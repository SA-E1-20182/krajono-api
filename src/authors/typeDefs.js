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
    getAuthor(username: String!): Author!
    getAllAuthors: Author
`;

export const authorsMutations = `
    createAuthor(author: AuthorInput!): Author!
    addProjectToAuthor(username: String!, project: int): boolean
    removeProjectFromAuthor(username: String!, project: int): boolean
`;
