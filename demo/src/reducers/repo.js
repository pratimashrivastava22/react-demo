import { RepoActions } from '../actions';
import Immutable from 'immutable';

const { Map, fromJS } = Immutable;

const initialState = Map({
	repoArray: [],
	isLoading: true,
	repoCount: 0,
});

export default function (state = initialState, action) {

	switch (action.type) {

		case RepoActions.SET_REPO_ARRAY:
      return state.set('repoArray', action.repoArray)
        .set('repoCount', action.repoCount)
				.set('isLoading', false);

		case RepoActions.GET_REPO:
			return state.set('keyword', action.keyword)
				.set('isLoading', true);

		default: return state;
	}
}
