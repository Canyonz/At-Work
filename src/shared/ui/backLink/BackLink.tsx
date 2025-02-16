import { Link } from "react-router-dom";
import BackLinkSVG from "../../assets/icons/backArrow.svg";
import clsx from "clsx";
import styles from "./BackLink.module.sass";

interface BackLinkProps {
	text: string;
	to: string;
	className?: string;
}

export const BackLink = ({ text, to, className }: BackLinkProps) => {
	return (
		<Link to={to} className={clsx(styles.backLink, className)}>
			<BackLinkSVG height={28} width={28}/>
			{text}
		</Link>
	);
};
