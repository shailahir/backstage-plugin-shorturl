import type {
  DiscoveryApi,
  FetchApi,
  IdentityApi,
} from '@backstage/core-plugin-api';
import { ShortUrlApi } from './ShortURLApi';
import { ShortUrl } from '../types';

export class DefaultShortURLApi implements ShortUrlApi {
  constructor(
    private readonly fetchApi: FetchApi,
    private readonly discoveryApi: DiscoveryApi,
    private readonly identityApi: IdentityApi,
  ) {}

  async createOrRetrieveShortUrl(shortURLRequest: Omit<ShortUrl, 'shortId'>) {
    const baseUrl = await this.discoveryApi.getBaseUrl('shorturl');
    const idResponse = await this.identityApi.getCredentials();

    return await this.fetchApi.fetch(`${baseUrl}/create`, {
      method: 'PUT',
      body: JSON.stringify({
        fullUrl: shortURLRequest.fullUrl,
        usageCount: shortURLRequest.usageCount,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idResponse?.token}`,
      },
    });
  }

  async getMappingData() {
    const baseUrl = await this.discoveryApi.getBaseUrl('shorturl');
    const idResponse = await this.identityApi.getCredentials();

    return await this.fetchApi.fetch(`${baseUrl}/getAll`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${idResponse?.token}`,
      },
    });
  }
}
