import clsx from "clsx";
import styles from "./Overlay.module.sass";

interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => {
	return <div className={clsx(styles.overlay, className)} onClick={onClick} />;
};
