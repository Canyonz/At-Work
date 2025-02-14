import { getUsersError, getUsersIsLoading, UserCard } from "@/entities/users";
import { UserList } from "./usersList/UsersList";
import { useSelector } from "react-redux";
import { DropdownArchiveActions } from "@/features/users";
import { getUsersArchive } from "@/entities/users/model/selectors/userSelectors";

export const ArchiveUsersList = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
	const users = useSelector(getUsersArchive);
	const error = useSelector(getUsersError);
	const isLoading = useSelector(getUsersIsLoading);

	return (
		<UserList
			title="Архив"
			usersList={users}
			UserCardComponent={(props) => <UserCard {...props} archive BtnAction={<DropdownArchiveActions userId={props.user.id} />} />}
			isLoading={isLoading}
			error={error}
			className={className}
		/>
	);
};
