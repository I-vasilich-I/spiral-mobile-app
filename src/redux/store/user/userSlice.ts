/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IMAGES from '@src/assets/images';
import { TPhoto } from '@src/types';

interface IUser {
	photo: TPhoto;
	fullName: string;
	birthDay: string;
}

const initialState: IUser = {
	photo: IMAGES.OVAL as string,
	fullName: 'User',
	birthDay: new Date().toString(),
};

export const userSlice = createSlice({
	name: 'USER',
	initialState,
	reducers: {
		setPhoto(state, action: PayloadAction<TPhoto>) {
			state.photo = action.payload;
		},
		setUser(state, action: PayloadAction<IUser>) {
			const { fullName, birthDay, photo } = action.payload;
			state.birthDay = birthDay;
			state.fullName = fullName;
			state.photo = photo;
		},
	},
});

export const { setPhoto, setUser } = userSlice.actions;

export default userSlice.reducer;
