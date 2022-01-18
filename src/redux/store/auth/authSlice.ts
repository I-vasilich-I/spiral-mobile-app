/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAuth {
	authError?: string;
	token: string | null;
	isLoading: boolean;
}

const initialState: IAuth = {
	token: null,
	isLoading: false,
};

export const authSlice = createSlice({
	name: 'AUTH',
	initialState,
	reducers: {
		setToken(state, action: PayloadAction<string | null>) {
			state.token = action.payload;
		},
		removeToken(state) {
			state.token = null;
		},
		setError(state, action: PayloadAction<string>) {
			state.authError = action.payload;
		},
		setIsLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
	},
});

export const { setToken, removeToken, setError, setIsLoading } = authSlice.actions;

export default authSlice.reducer;
