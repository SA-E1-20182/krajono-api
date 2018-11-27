import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		getAuthor: (_, { username }) =>
			generalRequest(`http://${url}:${port}/${entryPoint}/${username}`, 'GET', username),
		getAllAuthors: (_, {  }) =>
			generalRequest(`http://${url}:${port}/${entryPoint}/search/all`, 'GET')
		
	},
	Mutation: {
		createAuthor: (_, { author }) =>
			generalRequest(`http://${url}:${port}/${entryPoint}/create`, 'POST', author),
		addProjectToAuthor: (_, { username, project }) =>
			generalRequest(`http://${url}:${port}/${entryPoint}/${username}/addProject`, 'PATCH', project),
		removeProjectFromAuthor: (_, { username, project }) =>
			generalRequest(`http://${url}:${port}/${entryPoint}/${username}/removeProject`, 'PATCH', project)
	}
};

export default resolvers;
