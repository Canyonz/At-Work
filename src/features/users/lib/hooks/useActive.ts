import { userActions } from "@/entities/users";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const useActive = () => {
	const dispatch = useAppDispatch();

	const handleActiveUser = (id: number) => {
		dispatch(userActions.activeById(id));
	};

	return { handleActiveUser };
};
