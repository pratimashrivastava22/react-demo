import { fork } from 'redux-saga/effects';
import repoSagas from './repo';

export default function* root() {
	yield [
		fork(repoSagas),
	];
}