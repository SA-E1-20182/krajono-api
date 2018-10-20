import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
const { GraphQLUpload } = require('apollo-server');

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Upload: GraphQLUpload,
	Query: {
		imageByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		uploadImage: (_, { Upload }) =>
			generalRequest(`${URL}`, 'POST', code),
		updateImage: (_, { code, Upload }) =>
			generalRequest(`${URL}/${code}`, 'PUT', Upload),
		deleteImage: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
