import { ReactElement } from "react";
import clsx from "clsx";
import styles from "./Category.module.sass";

interface CategoryProps {
	children: ReactElement;
	className?: string;
}

export const Category = ({ children, className }: CategoryProps) => {
	return <span className={clsx(styles.category, className)}>{children}</span>;
};
