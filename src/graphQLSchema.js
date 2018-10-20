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
	imagesMutations,
	imagesQueries,
	imagesTypeDef
} from './images/typeDefs';

import imagesResolvers from './images/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		projectsTypeDef,
		imagesTypeDef
	],
	[
		projectsQueries,
		imagesQueries
	],
	[
		projectsMutations,
		imagesMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		projectsResolvers,
		imagesResolvers
	)
});
