import clsx from "clsx";
import styles from "./MainPage.module.sass";
import { UsersList } from "@/widgets/users";

export const MainPage = () => {
	return (
		<div className={clsx(styles.mainPage)}>
			<UsersList />
		</div>
	);
};
