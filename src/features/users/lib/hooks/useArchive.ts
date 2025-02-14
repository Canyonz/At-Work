import { userActions } from "@/entities/users";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";

export const useArchive = () => {
	const dispatch = useAppDispatch();

	const handleArchiveUser = (id: number) => {
		dispatch(userActions.archiveById(id));
	};

	return { handleArchiveUser };
};
