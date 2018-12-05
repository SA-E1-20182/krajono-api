import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLUpload } from 'graphql-upload'
import { mergeSchemas } from './utilities';
import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import {
		authMutations,
		authTypeDef
} from './auth/typeDefs';
import usersResolvers from './users/resolvers';
import authResolvers from './auth/resolvers';
import {
	projectsMutations,
	projectsQueries,
	projectsTypeDef
} from './projects/typeDefs';

import projectsResolvers from './projects/resolvers';

import {
	commentsMutations,
	commentsQueries,
	commentsTypeDef
} from './comments/typeDefs';

import commentsResolvers from './comments/resolvers';

import {
	versionsMutations,
	versionsQueries,
	versionsTypeDef
} from './versions/typeDefs';

import versionsResolvers from './versions/resolvers';

import {
	imagesMutations,
	imagesQueries,
	imagesTypeDef
} from './images/typeDefs';

import imagesResolvers from './images/resolvers';

import {
	authorsMutations,
	authorsQueries,
	authorsTypeDef
} from './authors/typeDefs';

import authorsResolvers from './authors/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		usersTypeDef, 
		authTypeDef,
		projectsTypeDef,
		commentsTypeDef,
		versionsTypeDef,
		'scalar Upload',
		authorsTypeDef
	],
	[
		usersQueries,
		projectsQueries,
		commentsQueries,
		versionsQueries,
		imagesQueries,
		authorsQueries
	],
	[
		usersMutations, 
		authMutations,
		projectsMutations,
		commentsMutations,
		versionsMutations,
		imagesMutations,
		authorsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		usersResolvers, 
		authResolvers,
		projectsResolvers,
		commentsResolvers,
		versionsResolvers,
		{ Upload: GraphQLUpload},
		imagesResolvers,
		authorsResolvers
	)
});
