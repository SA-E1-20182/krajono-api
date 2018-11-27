export const authorsTypeDef = `
type Author {
    username: String!
    name: String!
    projects: [Int]!
}

input AuthorInput {
    username: String!
    name: String!
}

input Project{
    project: Int
}`;

export const authorsQueries = `
    getAuthor(username: String!): Author!
    getAllAuthors: Author
`;

export const authorsMutations = `
    createAuthor(author: AuthorInput!): Author!
    addProjectToAuthor(username: String!, project: Project!): boolean
    removeProjectFromAuthor(username: String!, project: Project!): boolean
`;
