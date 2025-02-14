import { $rtkApi } from "@/shared/api/rtkApi";
import { UserData } from "../model/types/userTypes";

const usersApi = $rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<UserData[], void>({
			query: () => ({
				url: `/users/`,
			}),
		}),
	}),
});

export const getUsers = usersApi.endpoints.getUsers.initiate;
