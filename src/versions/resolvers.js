import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import { version } from 'punycode';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allVersions: (_) =>
			getRequest(URL, ''),
		pagesByCode: (_, { code }) =>
			generalRequest(`${URL}/1/images/${code}`, 'GET'),
	},
	Mutation: {
		createVersion: (_, { version }) =>
			generalRequest(`${URL}`, 'POST', version)
	}
};

export default resolvers;
