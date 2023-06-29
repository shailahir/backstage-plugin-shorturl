/** @public */
export type Shortcut = {
  id: string;
  url: string;
  title: string;
};

/** @public */
export type ShortUrl = {
  shortId: string;
  fullUrl: string;
  usageCount: number;
};
