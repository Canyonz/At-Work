import clsx from "clsx";
import styles from "./UserCard.module.sass";
import { Text } from "@/shared/ui/text/Text";
import { ReactNode } from "react";

interface UserCardProps {
	BtnAction?: ReactNode;
	className?: string;
}

export const UserCard = ({ BtnAction, className }: UserCardProps) => {
	return (
		<div className={clsx(styles.userCard, className)}>
			<img src="/images/default.jpg" width={112} height={120} className={styles.image} />
			<div className={styles.userCardInfo}>
				<div className={styles.userCardInfoPart}>
					<div className={styles.nameWithBtnAction}>
						<Text text="LoveHat" size="lg" bold className={styles.name} />

						{BtnAction}
					</div>
					<Text text="At-Work" className={styles.job} />
				</div>

				<Text text="Санкт-Петербург" size="xs" className={styles.city} />
			</div>
		</div>
	);
};
