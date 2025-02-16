import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserData, UserSchema } from "../types/userTypes";
import { fetchUsers } from "../services/userService";

const initialState: UserSchema = {
	dataById: [],
	isLoading: true,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		editUserById: (state, action: PayloadAction<UserData>) => {
			const user = action.payload;

			state.dataById[user.id] = user;
		},
		archiveById: (state, action: PayloadAction<number>) => {
			const userId = action.payload;

			state.dataById[userId].archive = true;
		},
		activeById: (state, action: PayloadAction<number>) => {
			const userId = action.payload;

			state.dataById[userId].archive = false;
		},
		hideById: (state, action: PayloadAction<number>) => {
			const userId = action.payload;

			delete state.dataById[userId];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUsers.pending, (state) => {
			state.error = "";
			state.isLoading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UserData[]>) => {
			state.dataById = action.payload.reduce((acc, user) => {
				acc[user.id] = { ...user, avatar: user.avatar || "./images/default.jpg" };
				return acc;
			}, {} as Record<string, UserData>);
			state.isLoading = false;
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		});
	},
});

export const { actions: userActions, reducer: userReducer } = userSlice;
