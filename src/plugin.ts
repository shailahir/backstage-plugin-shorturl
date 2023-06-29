import {
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
  fetchApiRef,
  identityApiRef,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';
import { DefaultShortURLApi, shorturlApiRef } from './api';

export const shorturlPlugin = createPlugin({
  id: 'shorturl',
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: shorturlApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        fetchApi: fetchApiRef,
        identityApi: identityApiRef,
      },
      factory: ({ fetchApi, discoveryApi, identityApi }) =>
        new DefaultShortURLApi(fetchApi, discoveryApi, identityApi),
    }),
  ],
});

export const ShorturlPage = shorturlPlugin.provide(
  createRoutableExtension({
    name: 'ShorturlPage',
    component: () =>
      import('./components/ShorturlPage').then(m => m.ShorturlPage),
    mountPoint: rootRouteRef,
  }),
);
