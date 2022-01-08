/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import { watchSignIn } from './authSaga/authSaga';

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
	yield all([watchSignIn()]);
}
