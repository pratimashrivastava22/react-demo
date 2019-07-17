import { take, call, put, fork } from 'redux-saga/effects';
import { RepoActions } from '../actions';
import { service } from '../services';

const IS_TRUE = true;

function* watchGetRepo() {
	while (IS_TRUE) {
    let action = yield take(RepoActions.GET_REPO);
		let { json, response } = yield call(service.getRepo, action.keyword);
		if (response.ok && json) {
			yield put(RepoActions.setRepoArray(json));
		}
	}
}

export default function* root() {
	yield fork(watchGetRepo);
}