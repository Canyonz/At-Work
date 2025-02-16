import clsx from "clsx";
import styles from "./Sidebar.module.sass";
import { NavLinks } from "./navLinks/NavLinks";
import { useGetUserByIdQuery } from "@/entities/users";

interface SidebarProps {
	id: string;
	className?: string;
}

export const Sidebar = ({ id, className }: SidebarProps) => {
	const { data: userData } = useGetUserByIdQuery({ id: Number(id) });

	return (
		<div className={clsx(styles.sidebar, className)}>
			<img src={userData?.avatar || "/images/default.jpg"} alt="Avatar" width={280} height={485} className={styles.image} />

			<NavLinks id={id} />
		</div>
	);
};
