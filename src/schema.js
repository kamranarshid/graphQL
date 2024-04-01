const gql = require('graphql-tag');
const typeDefs = gql`
type Query {
    tracksForHome: [Track!]!
}
"A track is a group of module that teaches about a specific topic"
type Track {
    "The track's ID"
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
}

"A module is a single unit of teaching. Multiple modules compose a track"
type Author {
    "The author's ID"
    id: ID!
    "The author's first and last name"
    name: String!
    "The author's photo"
    photo: String
}
`;

module.exports = typeDefs;

