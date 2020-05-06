const { ApolloServer } = require('apollo-server');
const { ApolloGateway } = require('@apollo/gateway');

const { federatedApis } = require('./config');

const gateway = new ApolloGateway({
  // ServiceList is optional, can use Apollo Graph Manager here as single source of truth
  // Graph Manager will also enable server tracing and schema management tools
  serviceList: federatedApis,

  // Experimental query plan view
  __exposeQueryPlanExperimental: true,
});

(async () => {
  const server = new ApolloServer({
    gateway,
    // If using Apollo Graph Manager, ensure `ENGINE_API_KEY` is set in environment
    engine: false,
    // Not currently supported, needs to be explicitly turned off
    subscriptions: false,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();

