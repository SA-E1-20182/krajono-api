export const authorsTypeDef = `
type Author {
    username: String!
    name: String!
    projects: [Int]!
}`;

export const authorsQueries = `
    author: (username: String!): Author!
`;

export const authorsMutations = `
    createAuthor(author: Author!): Author!
`;