import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allComments: (_) =>
			getRequest(URL, ''),
		commentByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createComment: (_, { comment }) =>
			generalRequest(`${URL}`, 'POST', comment),
		updateComment: (_, { code, comment }) =>
			generalRequest(`${URL}/${code}`, 'PUT', comment),
		deleteComment: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
