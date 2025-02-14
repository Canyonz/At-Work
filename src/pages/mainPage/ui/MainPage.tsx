import { ActiveUsersList, ArchiveUsersList } from "@/widgets/users";
import clsx from "clsx";
import styles from "./MainPage.module.sass";

export const MainPage = () => {
	return (
		<main className={clsx(styles.mainPage)}>
			<ActiveUsersList />
			<ArchiveUsersList />
		</main>
	);
};
