/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IMAGES from '@src/assets/images';

interface IUser {
	photo: string;
}

const initialState: IUser = {
	photo: IMAGES.OVAL,
};

export const userSlice = createSlice({
	name: 'USER',
	initialState,
	reducers: {
		setPhoto(state, action: PayloadAction<string>) {
			state.photo = action.payload;
		},
	},
});

export const { setPhoto } = userSlice.actions;

export default userSlice.reducer;
