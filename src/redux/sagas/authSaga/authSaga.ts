/* eslint-disable @typescript-eslint/no-unused-vars */
import authService from '@src/services/auth';
import { call, ForkEffect, put, takeEvery } from 'redux-saga/effects';
import { setError, setIsLoading, setToken } from '../../store/auth/authSlice';
import SAGA_ACTIONS from '../sagaActions/sagaActions';

interface IAction {
	type: string;
	payload: {
		email: string;
		password: string;
	};
}

function* signIn({ payload: { email, password } }: IAction) {
	yield put(setIsLoading(true));
	try {
		const response: string | null = yield call(() => authService.signIn(email, password));
		if (response) {
			yield put(setToken(response));
		} else {
			yield put(setError('Wrong credentials!'));
		}
	} catch (error) {
		console.error(error);
	}
	yield put(setIsLoading(false));
}

function* watchSignIn(): Generator<ForkEffect<never>, void, unknown> {
	yield takeEvery(SAGA_ACTIONS.AUTH_USER, signIn);
}

export { watchSignIn };
