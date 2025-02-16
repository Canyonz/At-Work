import clsx from "clsx";
import styles from "./NavLinks.module.sass";
import { navLinks } from "../../lib/consts/navLinks";
import { Link, useLocation } from "react-router-dom";

interface NavLinksProps {
	id: string;
	className?: string;
}

export const NavLinks = ({ id, className }: NavLinksProps) => {
	const { pathname } = useLocation();

	const isActive = (link: string) => {
		return pathname === link;
	};

	return (
		<nav className={clsx(styles.navLinks, className)}>
			{navLinks.map((link, index) => (
				<Link key={index} to={link.to(id)} className={clsx(styles.link, { [styles.active]: isActive(link.to(id)) })}>
					{link.title}
				</Link>
			))}
		</nav>
	);
};
