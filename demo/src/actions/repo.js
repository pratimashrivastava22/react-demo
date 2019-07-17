export const GET_REPO = 'GET_REPO';
export const SET_REPO_ARRAY = 'SET_REPO_ARRAY';

export const getRepo = (keyword) => {
	return {
		type: GET_REPO,
		keyword,
	};
}

export const setRepoArray = (response) => {
	return {
		type: SET_REPO_ARRAY,
    repoArray : response.items,
    repoCount: response.total_count
	};
}

