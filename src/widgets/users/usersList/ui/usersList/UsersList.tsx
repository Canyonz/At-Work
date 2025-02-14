import { UserCardSkeleton, UserData } from "@/entities/users";
import { UserCardProps } from "@/entities/users/ui/userCard/UserCard";
import { Text } from "@/shared/ui/text/Text";
import clsx from "clsx";
import styles from "./UsersList.module.sass";

interface UserListProps extends React.HTMLAttributes<HTMLDivElement> {
	title: string;
	usersList: UserData[];
	UserCardComponent: React.ComponentType<UserCardProps>;
	isLoading: boolean;
	error?: string;
}

export const UserList = ({ title, usersList, UserCardComponent, isLoading, error, className }: UserListProps) => {
	return (
		<div className={clsx(styles.userListWrapper, className)}>
			<Text text={title} size="xl" bold />
			<hr className={styles.line} />

			{error && <Text text={error} size="lg" bold />}
			{!usersList.length && !error && !isLoading && <Text text="Пользователей нет" size="lg" bold />}

			<div className={styles.usersList}>
				{isLoading
					? Array.from({ length: 6 }, (_, index) => <UserCardSkeleton key={index} />)
					: usersList?.map((user) => <UserCardComponent key={user.id} user={user} />)}
			</div>
		</div>
	);
};
