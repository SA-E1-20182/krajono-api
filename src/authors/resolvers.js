import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPointCreate, entryPointAuthor, entryPointSearch } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getAuthorByName: (_, { name }) =>
			generalRequest(`http://${url}:${port}/${entryPointSearch}`, 'POST', name),
		fetchAuthor: (_, { id }) =>
			generalRequest(`http://${url}:${port}/${entryPointAuthor}`, 'POST', id)
	},
	Mutation: {
		createAuthor: (_, { comment }) =>
			generalRequest(`http://${url}:${port}/${entryPointCreate}`, 'POST', comment),
	}
};

export default resolvers;