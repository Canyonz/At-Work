import clsx from "clsx";
import styles from "./Button.module.sass";

type ButtonVariant = "default" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	className?: string;
}

export const Button = ({ variant = "default", children, className }: ButtonProps) => {
	return <button className={clsx(styles.button, styles[variant], className)}>{children}</button>;
};
