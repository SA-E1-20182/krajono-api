import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allProjects: (_) =>
			getRequest(URL, ''),
		projectByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		createProject: (_, { project }) =>
			generalRequest(`${URL}`, 'POST', project),
		updateProject: (_, { code, project }) =>
			generalRequest(`${URL}/${code}`, 'PUT', project),
		deleteProject: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE')
	}
};

export default resolvers;
