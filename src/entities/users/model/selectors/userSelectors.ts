import { RootStateType } from "@/app/providers/store/storeConfig/storeConfig";

export const getUsersData = (state: RootStateType) => Object.values(state.users.dataById);
export const getUsersArchive = (state: RootStateType) => Object.values(state.users.dataById).filter((user) => user.archive);

export const getUserDataById = (state: RootStateType, id: number) => state.users.dataById[id];

export const getUsersIsLoading = (state: RootStateType) => state.users.isLoading;
export const getUsersError = (state: RootStateType) => state.users.error;
