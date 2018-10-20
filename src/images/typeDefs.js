export const imagesTypeDef = `
scalar Upload

input ImageInput {
    project: String!
    version: String!
    page: String!
    file: Upload!
}`;

export const imagesQueries = `
    imageByCode(code: Int!): Upload!
`;

export const imagesMutations = `
    uploadImage(project: ImageInput!): Int!
    deleteImage(code: Int!): Int!
    updateImage(code: Int!, file: Upload!): Upload!
`;
