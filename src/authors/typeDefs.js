export const authorsTypeDef = `
type Author {
    username: String!
    name: String!
    projects: [Int]!
}

input AuthorInput {
    username: String!
    name: String!
}`;

export const authorsQueries = `
    getAuthorByName(name: String!): Author!
    fetchAuthor(id: Int!): Author!
`;

export const authorsMutations = `
    createAuthor(author: AuthorInput!): Comment!
`;