export const imagesTypeDef = `

input ImageInput{
  project: String!
  version: Int!
  Page: Int!
  picture: Upload
}

`;

export const imagesQueries = `
    imageByCode(code: Int!): String!
`;

export const imagesMutations = `
    uploadImage(project: ImageInput!): Int!
    deleteImage(code: Int!): String!
    updateImage(code: Int!, file: Upload!): String!
`;
