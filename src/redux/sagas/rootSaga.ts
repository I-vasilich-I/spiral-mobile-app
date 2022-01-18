/* eslint-disable @typescript-eslint/no-unused-vars */
import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import { watchSignIn } from './authSaga/authSaga';
import { watchPickPhoto, watchTakePhoto } from './userSaga/userSaga';

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown> {
	yield all([watchSignIn(), watchPickPhoto(), watchTakePhoto()]);
}
