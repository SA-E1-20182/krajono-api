export const authorsTypeDef = `
type Author {
    id: Int!
    name: String!
    projects: [Int]!
}

input AuthorInput {
    name: String!
}`;

export const authorsQueries = `
    getAuthorByName(name: String!): Author!
    fetchAuthor(id: Int!): Author!
`;

export const authorsMutations = `
    createAuthor(author: AuthorInput!): Comment!
`;