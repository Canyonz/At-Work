import clsx from "clsx";
import styles from "./Skeleton.module.sass";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
	return <div className={clsx(styles.skeleton, className)} {...props} />;
};
