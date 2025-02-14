import { userActions } from "@/entities/users";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const useHide = () => {
	const dispatch = useAppDispatch();

	const handleHideUser = (id: number) => {
		dispatch(userActions.hideById(id));
	};

	return { handleHideUser };
};
