const { CONTENT_API_ENDPOINT, VERSIONING_API_ENDPOINT, MEDIA_API_ENDPOINT } = process.env;

const federatedApis = () => {
  const contentApi = { name: 'content', url: CONTENT_API_ENDPOINT };
  const versionApi = { name: 'versioning', url: VERSIONING_API_ENDPOINT };
  const mediaApi = { name: 'media', url: MEDIA_API_ENDPOINT };

  // required
  if (!contentApi.url) throw new Error('You must provide a content api url');

  const apiList = [contentApi, versionApi, mediaApi].filter((api) => api.url.length > 0);

  return apiList;
};

const config = {
  federatedApis: federatedApis(),
};

module.exports = config;
