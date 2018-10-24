export const imagesTypeDef = `

`;

export const imagesQueries = `
    imageByCode(code: Int!): String!
`;

export const imagesMutations = `
    singleUpload(file: Upload!): Int!
    deleteImage(code: Int!): Boolean!
    singleUpdate(code: Int!, file: Upload!): Boolean!
    collectionOfImages(codes: [Int!]): [String!]
`;
