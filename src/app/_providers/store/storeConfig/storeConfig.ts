import { userReducer } from "@/entities/users/model/slices/userSlice";
import { $rtkApi } from "@/shared/api/rtkApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
	users: userReducer,
	[$rtkApi.reducerPath]: $rtkApi.reducer,
});

export const storeConfig = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat($rtkApi.middleware),
});

export type RootStateType = ReturnType<typeof storeConfig.getState>;
export type AppDispatchType = typeof storeConfig.dispatch;

export interface ThunkConfig<T> {
	rejectValue: T;
	state: RootStateType;
}
