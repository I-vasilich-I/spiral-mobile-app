/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPlayer {
	seekTime: number;
}

const initialState: IPlayer = {
	seekTime: 0,
};

export const playerSlice = createSlice({
	name: 'PLAYER',
	initialState,
	reducers: {
		setSeekTime(state, action: PayloadAction<number>) {
			state.seekTime = action.payload;
		},
	},
});

export const { setSeekTime } = playerSlice.actions;

export default playerSlice.reducer;
