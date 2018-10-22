import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

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

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		projectsTypeDef,
		commentsTypeDef,
		versionsTypeDef
	],
	[
		projectsQueries,
		commentsQueries,
		versionsQueries
	],
	[
		projectsMutations,
		commentsMutations,
		versionsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		projectsResolvers,
		commentsResolvers,
		versionsResolvers
	)
});
