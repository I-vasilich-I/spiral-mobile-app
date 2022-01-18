import { call, put, takeLatest } from 'redux-saga/effects';
import { setError } from '@src/redux/store/auth/authSlice';
import { setPhoto } from '@src/redux/store/user/userSlice';
import SAGA_ACTIONS from '../sagaActions/sagaActions';
import photoService from '@src/services/photo';

function* pickPhoto() {
	try {
		const res: string | null = yield call(() => photoService.pickPhoto());
		if (res) {
			yield put(setPhoto(res));
		} else {
			yield put(setError("Photo haven't been picked"));
		}
	} catch (error) {
		yield put(setError('Something went wrong, try again'));
	}
}

function* watchPickPhoto() {
	yield takeLatest(SAGA_ACTIONS.PICK_PHOTO, pickPhoto);
}

function* takePhoto() {
	try {
		const res: string | null = yield call(() => photoService.takePhoto());
		if (res) {
			yield put(setPhoto(res));
		} else {
			yield put(setError("Photo haven't been picked"));
		}
	} catch (error) {
		yield put(setError('Something went wrong, try again'));
	}
}

function* watchTakePhoto() {
	yield takeLatest(SAGA_ACTIONS.TAKE_PHOTO, takePhoto);
}

export { watchPickPhoto, watchTakePhoto };
