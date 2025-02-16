import { RootStateType } from "@/app/_providers/store/storeConfig/storeConfig";

export const getUsersData = (state: RootStateType) => state.users.dataById;
export const getUsersActive = (state: RootStateType) => Object.values(state.users.dataById).filter((user) => !user.archive);
export const getUsersArchive = (state: RootStateType) => Object.values(state.users.dataById).filter((user) => user.archive);
export const getUserDataById = (state: RootStateType, id: number) => state.users.dataById[id];

export const getUsersIsLoading = (state: RootStateType) => state.users.isLoading;
export const getUsersError = (state: RootStateType) => state.users.error;
