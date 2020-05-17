const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');

const constructTestServer = (typeDefs, resolvers) => {
  const server = new ApolloServer({
    schema: buildFederatedSchema({
      typeDefs,
      resolvers
    }),
    introspection: false,
    playground: false,
    subscriptions: false,
  });

  return server;
};

module.exports = constructTestServer;
