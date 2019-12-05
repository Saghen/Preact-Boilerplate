export default {
  api: {
    ssl: true,
    domain: 'someApiUrl',
    getUrl() {
      return `${this.ssl ? 'https://' : 'http://'}${this.domain}`;
    }
  }
};
