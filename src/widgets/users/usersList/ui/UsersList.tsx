import { UserCard } from "@/entities/users";
import clsx from "clsx";
import styles from "./UsersList.module.sass";

interface UsersListProps {
	className?: string;
}

export const UsersList = ({ className }: UsersListProps) => {
	return (
		<div className={clsx(styles.userCard, className)}>
			<UserCard />
		</div>
	);
};
