import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		imageByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		uploadImage: (_, { imageInput }) =>
			generalRequest(`${URL}`, 'POST', imageInput),
		updateImage: (_, { code, file }) =>
			generalRequest(`${URL}/${code}`, 'PUT', {code, file}),
		deleteImage: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
