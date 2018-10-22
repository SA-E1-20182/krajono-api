export const versionsTypeDef = `
type Version {
    id: Int!
    user_id: Int!
    project_id: Int!
    inserted_at: String!
}

input VersionInput {
    user_id: Int!
    project_id: Int!
    pages: [String]!
}
type Page{
    image_url: String!
    inserted_at: String!
}
`;



export const versionsQueries = `
    allVersions: [Version]!
    pagesByCode(code: Int!): [Page]!
`;
export const versionsMutations = `
    createVersion(version: VersionInput!): Version!
`;
;