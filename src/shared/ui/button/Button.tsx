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
<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.06588 1.99469C9.35877 1.70179 9.35877 1.22692 9.06588 0.934025C8.77298 0.641132 8.29811 0.641132 8.00522 0.934025L5.00002 3.93922L1.99482 0.934026C1.70192 0.641133 1.22705 0.641132 0.934157 0.934026C0.641264 1.22692 0.641264 1.70179 0.934157 1.99469L3.93936 4.99989L0.934147 8.00509C0.641254 8.29799 0.641254 8.77286 0.934147 9.06575C1.22704 9.35865 1.70191 9.35865 1.99481 9.06575L5.00002 6.06054L8.00522 9.06575C8.29812 9.35865 8.77299 9.35865 9.06588 9.06575C9.35878 8.77286 9.35878 8.29799 9.06588 8.00509L6.06068 4.99989L9.06588 1.99469Z" fill="#161616"/>
</svg>
