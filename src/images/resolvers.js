import { generalRequest, getRequest } from '../utilities';
import { url, port, entryPoint } from './server';
import { GraphQLUpload } from 'graphql-upload'


const URL = `http://${url}:${port}/${entryPoint}`;

const processUpload = async upload => {
  const { stream, filename, mimetype } = await upload
  const id = generalRequest(`${URL}`, 'POST', file)
  return id
}
const processUpdate = async upload => {
  const { stream, filename, mimetype } = await upload
  const response = generalRequest(`${URL}/${code}`, 'PUT', file)
  return response
}

const resolvers = {
	Upload: GraphQLUpload,
	Query: {
		imageByCode: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'GET'),
	},
	Mutation: {
		singleUpload: (obj, { file }) => processUpload(file),
		singleUpdate: (obj, { code, file }) => processUpdate(code, file),
		deleteImage: (_, { code }) =>
			generalRequest(`${URL}/${code}`, 'DELETE'),
    collectionOfImages: (_, { codes }) =>
      generalRequest(`${URL}/collection`, 'POST', codes)
	}
};

export default resolvers;
