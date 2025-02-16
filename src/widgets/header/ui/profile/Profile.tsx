import clsx from "clsx";
import styles from "./Profile.module.sass";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import HeartSVG from "@/shared/assets/icons/heart.svg";
import NotificateSVG from "@/shared/assets/icons/notificate.svg";

interface ProfileProps {
	className?: string;
}

export const Profile = ({ className }: ProfileProps) => {
	return (
		<div className={clsx(styles.profile, className)}>
			<div className={styles.actionsBtn}>
				<Button variant="icon">
					<HeartSVG width={16} height={16} />
				</Button>
				<Button variant="icon">
					<NotificateSVG width={16} height={16} />
				</Button>
			</div>

			<div className={styles.profileInfo}>
				<img src="./images/default.jpg" width={20} height={20} className={styles.image} />
				<Text text="Ivan1234" className={styles.login} />
			</div>
		</div>
	);
};
