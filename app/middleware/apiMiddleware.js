import apiService from '../services/apiService';
import { PENDING, SUCCESS, FAILURE } from '../../shared/constants/RequestConstants.js';

export default () => (next) => (action) => {
	const { api, type, ...rest } = action;

	// api = {
	//   query: {
	// 	   method: 'test',
	// 	   params: {
	// 		 item: 1
	// 	   }
	//   },
	//   mutation: {
	// 	   method: 'test',
	// 	   params: {
	// 		 item: 1
	// 	   }
	//   }
	// }

	if (!api) {
		return next(action);
	}

	// This isn't used, and needs enumifying before it is
	// but this is how to show loading states
	next({ ...rest, type, status: PENDING });

	// Fire off a request
	return apiService(api)
		.then(({ data }) => next({ ...rest, data, type, status: SUCCESS }))
		.catch(({ status }) => next({ ...rest, type, status: FAILURE, data: { code: status } }));
};
