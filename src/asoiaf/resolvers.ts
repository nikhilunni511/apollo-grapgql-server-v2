export const resolvers = {
  Query: {
    getBooks: async (_, {}, { dataSources }) => {
      return await dataSources.asoiafAPI.getBooks();
    },

    getCharacters: async (_, {}, { dataSources }) => {
      return await dataSources.asoiafAPI.getCharacters();
    }
  }
};
