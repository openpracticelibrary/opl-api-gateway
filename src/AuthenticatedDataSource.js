/* eslint class-methods-use-this: ["error", { "exceptMethods": ["willSendRequest"] }] */
const { RemoteGraphQLDataSource } = require('@apollo/gateway');

class AuthenticatedDataSource extends RemoteGraphQLDataSource {
  willSendRequest({ request, context }) {
    request.http.headers.set('Authorization', context.token || '');
  }
}

module.exports = AuthenticatedDataSource;
