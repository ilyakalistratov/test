const graphql = require('graphql');

const {GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt, GraphQLList} = graphql;

const movies = [
    {id: '1', name: 'StarWars', genre: 'wars', direcorId: '1'},
    {id: 2, name: 'Recetir', genre: 'triller', direcorId: '2'},
    {id: 3, name: 'Terminator', genre: 'crime', direcorId: '3'},
    {id: 4, name: 'RD2pistols', genre: 'crime', direcorId: '2'},
    {id: 5, name: 'Reketir', genre: 'crime', direcorId: '2'},
    {id: 6, name: 'Big kush', genre: 'crime', direcorId: '2'},
];

const directors = [
    {id: '1', name: 'Lucas Film', age: 50},
    {id: 2, name: 'Quentin Tarantino', age: 47},
    {id: 3, name: 'James McTeigue', age: 55},
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        director: {
            type: DirectorType,
            resolve (parent, args) {
                return directors.find(item => item.id == parent.id)
            }
        }
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        movies: {
            type: new GraphQLList(MovieType),
            resolve (parent, args) {
                return movies.filter(item => item.direcorId == parent.id)
            }
        }
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
        },
        direcor: {
            type: DirectorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return directors.find(item => item.id == args.id)
            }
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return movies;
            }
        },
        direcors: {
            type: new GraphQLList(DirectorType),
            resolve(parent, args) {
                return directors;
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: Query,
});

/*
query($id: ID) {
  movie(id: $id) {
  id
  name
  genre
    director {
      name
      age
    }
  }
}
 */