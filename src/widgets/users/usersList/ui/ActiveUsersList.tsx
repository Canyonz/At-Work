import { getUsersError, getUsersIsLoading, UserCard } from "@/entities/users";
import { UserList } from "./usersList/UsersList";
import { useSelector } from "react-redux";
import { DropdownActiveActions } from "@/features/users";
import { getUsersActive } from "@/entities/users/model/selectors/userSelectors";

export const ActiveUsersList = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
	const users = useSelector(getUsersActive);
	const error = useSelector(getUsersError);
	const isLoading = useSelector(getUsersIsLoading);

	return (
		<UserList
			title="Активные"
			usersList={users}
			UserCardComponent={(props) => <UserCard {...props} BtnAction={<DropdownActiveActions userId={props.user.id} />} />}
			isLoading={isLoading}
			error={error}
			className={className}
		/>
	);
};
