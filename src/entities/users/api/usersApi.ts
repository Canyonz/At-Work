import { $rtkApi } from "@/shared/api/rtkApi";
import { UserData } from "../model/types/userTypes";

const usersApi = $rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getUsers: build.query<UserData[], void>({
			query: () => ({
				url: `/users/`,
			}),
		}),

		getUserById: build.query<UserData, { id: number }>({
			query: ({ id }) => ({
				url: `/users/${id}`,
			}),
		}),
	}),
});

export const getUsers = usersApi.endpoints.getUsers.initiate;
export const { useGetUserByIdQuery } = usersApi;
