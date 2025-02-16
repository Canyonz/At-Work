import { Text } from "@/shared/ui/text/Text";
import { UserData } from "../../model/types/userTypes";
import clsx from "clsx";
import styles from "./UserCard.module.sass";

export interface UserCardProps {
	user: UserData;
	archive?: boolean;
	BtnAction?: React.ReactElement;
	className?: string;
}

export const UserCard = ({ user, archive, BtnAction, className }: UserCardProps) => {
	return (
		<div className={clsx(styles.userCard, { [styles.archive]: archive }, className)}>
			<img src={user.avatar || "./images/default.jpg"} alt="user card image" width={112} height={120} className={styles.image} />
			<div className={styles.userCardInfo}>
				<div className={styles.userCardInfoPart}>
					<div className={styles.nameWithBtnAction}>
						<Text text={user.username} size="lg" bold className={styles.name} />

						{BtnAction}
					</div>
					<Text text={user.company.name} className={styles.job} />
				</div>

				<Text text={user.address.city} size="xs" className={styles.city} />
			</div>
		</div>
	);
};
