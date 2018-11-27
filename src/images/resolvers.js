import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import { GraphQLUpload } from 'graphql-upload'


const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
	Upload: GraphQLUpload,
	Query: {
		imageByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		deleteImage: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE'),
		collectionOfImages: (_, { codes }) =>
			generalRequest(`${URL}/collection`, 'POST', {codes})
	}
};

export default resolvers;
