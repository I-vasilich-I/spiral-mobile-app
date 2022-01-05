/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuth {
	authError?: string;
	token: string | null;
}

const initialState: IAuth = {
	token: null,
};

export const authSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string>) {
			state.token = action.payload;
		},
		removeToken(state) {
			state.token = null;
		},
		setError(state, action: PayloadAction<string>) {
			state.authError = action.payload;
		},
	},
});

export const { setToken, removeToken, setError } = authSlice.actions;

export default authSlice.reducer;
