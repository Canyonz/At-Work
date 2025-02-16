import { EditSelectedUser } from "@/features/editSelectedUser";
import { Text } from "@/shared/ui/text/Text";
import styles from "./Profile.module.sass";
import { useOutletContext } from "react-router-dom";

export const ProfilePage = () => {
	const userId = useOutletContext<string>();

	return (
		<div className={styles.profilePage}>
			<Text text="Данные профиля" size="xl" bold />
			<hr className={styles.line} />
			<EditSelectedUser userId={userId}/>
		</div>
	);
};
