import { api } from './api';

export default {
	getRepo(param) {
		let endpoint = 'https://api.github.com/search/repositories?q='+ param;
		return api('GET', endpoint);
	}
}