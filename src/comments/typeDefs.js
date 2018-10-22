export const commentsTypeDef = `
type Comment {
    id: Int!
    message: String!
    version_id: Int!
    image_id: Int!
    likes: Int!
    created_by: String!
    created_at: String!
}

input CommentInput {
    message: String!
    version_id: Int!
    image_id: Int!
    likes: Int!
}`;

export const commentsQueries = `
    allComments: [Comment]!
    commentByCode(code: Int!): Comment!
`;

export const commentsMutations = `
    createComment(comment: CommentInput!): Comment!
    deleteComment(code: Int!): Int
    updateComment(code: Int!, comment: CommentInput!): Comment!
`;