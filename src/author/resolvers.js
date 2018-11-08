import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		author: (_) =>
			getRequest(URL, ''),
	},
	Mutation: {
		createAuthor: (_, { author }) => {
			generalRequest(`${URL}`, 'POST', author)
    }
  }
};

export default resolvers;
