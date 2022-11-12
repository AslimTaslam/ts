import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface githubState {
	favourites: string[]
}

const FAV_KEY = "fkv";

const initialState: githubState = {
	favourites: []
}

export const githubSlice = createSlice({
	name: "github",
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<string>) {
			state.favourites.push(action.payload);
			localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
		},
		removeFavourites(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(f => f !== action.payload);
			localStorage.setItem(FAV_KEY, JSON.stringify(state.favourites));
		}
	}
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
