const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID} = graphql;

const movies = [
    {id:'1', name: 'StarWars', genre: 'wars'},
    {id: 2, name: 'Airport', genre: 'triller'},
    {id: 3, name: 'Terminator', genre: 'crime'},
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});