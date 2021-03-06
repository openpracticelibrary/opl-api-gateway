const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const { federatedApis } = require('./src/config/config');
const AuthenticatedDataSource = require('./src/AuthenticatedDataSource');

const createGateway = (serviceList) => {
  return new ApolloGateway({
    // ServiceList is optional, can use Apollo Graph Manager here as single source of truth
    // Graph Manager will also enable server tracing and schema management tools
    serviceList,
    buildService({ url }) {
      return new AuthenticatedDataSource({ url });
    },
    // experimental_pollInterval: 3000,
    // Experimental query plan view
    __exposeQueryPlanExperimental: true,
  });
};

const server = new ApolloServer({
  gateway: createGateway(federatedApis),
  // If using Apollo Graph Manager, ensure `ENGINE_API_KEY` is set in environment
  engine: false,
  // Not currently supported, needs to be explicitly turned off
  subscriptions: false,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  },
});

server.listen().then(({ url }) => {
  console.info(`🚀 Gateway Server ready at ${url}`);
  console.info('Federated APIs available at:');
  console.info(federatedApis);
});

// For testing
module.exports = createGateway;
