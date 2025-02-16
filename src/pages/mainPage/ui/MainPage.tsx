import { ActiveUsersList, ArchiveUsersList } from "@/widgets/users";
import clsx from "clsx";
import styles from "./MainPage.module.sass";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchUsers } from "@/entities/users";

export const MainPage = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<main className={clsx(styles.mainPage)}>
			<ActiveUsersList />
			<ArchiveUsersList />
		</main>
	);
};
