import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "../types/userTypes";
import { ThunkConfig } from "@/app/providers/store/storeConfig/storeConfig";
import { getUsers } from "../../api/usersApi";

export const fetchUsers = createAsyncThunk<UserData[], void, ThunkConfig<string>>("users/fetchUsers", async (_, thunkApi) => {
	const { dispatch, rejectWithValue } = thunkApi;

	try {
		const userResult = await dispatch(getUsers());

		if (userResult.data) {
			return userResult.data;
		} else {
			return rejectWithValue("Данные пользователей не были получены");
		}
	} catch (error) {
		console.log(error);
		return rejectWithValue("Произошла ошибка при получении данных пользователей");
	}
});
