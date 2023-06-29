import { ShortUrl } from '../types';
import { createApiRef } from '@backstage/core-plugin-api';

/** @public */
export const shorturlApiRef = createApiRef<ShortUrlApi>({
  id: 'plugin.shorturl.api',
});

/** @public */
export interface ShortUrlApi {
  /**
   * Generates a unique short id for a url and saves in database.
   * @param shortURLRequest
   */
  createOrRetrieveShortUrl(
    shortURLRequest: Omit<ShortUrl, 'shortId'>,
  ): Promise<Response>;

  getMappingData(): Promise<Response>;
}
