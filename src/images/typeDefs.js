export const imagesTypeDef = `

`;

export const imagesQueries = `
    imageByCode(code: Int!): String!
`;

export const imagesMutations = `
    deleteImage(code: Int!): Boolean!
    collectionOfImages(codes: [Int!]): [String!]
`;
