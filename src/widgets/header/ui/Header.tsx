import clsx from "clsx";
import styles from "./Header.module.sass";
import LogoSVG from "@/shared/assets/icons/logo.svg";
import { Profile } from "./profile/Profile";
import { Burger } from "./burger/Burger";

interface HeaderProps {
	className?: string;
}

export const Header = ({ className }: HeaderProps) => {
	return (
		<header className={clsx(styles.header, className)}>
			<LogoSVG width={124} height={24} />

			<Profile className={styles.profile} />
			<Burger className={styles.burger} />
		</header>
	);
};
