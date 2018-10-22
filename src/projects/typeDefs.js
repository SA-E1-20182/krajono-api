export const projectsTypeDef = `
type Project {
    id: Int!
    name: String!
    genre: String!
    description: String!
    created_at: String!
    total_pages: Int!
    author_id: String!
    current_version_id: String!
}

input ProjectInput {
    name: String!
    description: String!
    genre: String!
    author_id: String!
}`;

export const projectsQueries = `
    allProjects: [Project]!
    projectByCode(code: Int!): Project!
`;

export const projectsMutations = `
    createProject(project: ProjectInput!): Project!
    deleteProject(code: Int!): Int
    updateProject(code: Int!, project: ProjectInput!): Project!
`;