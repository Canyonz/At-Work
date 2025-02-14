import clsx from "clsx";
import styles from "./TextField.module.sass";
import { InputHTMLAttributes } from "react";
import { Text } from "../text/Text";
import { Button } from "../button/Button";
import CrossSVG from "../../assets/icons/cross.svg";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
}

export const TextField = ({ name, title, className, ...props }: TextFieldProps) => {
	return (
		<div className={clsx(styles.textField, className)}>
			{title && <Text text={title} size="lg" bold />}
			<label htmlFor={name} className={styles.label}></label>
			<div className={styles.inputWrapper}>
				<input name={name} className={styles.input} {...props} />
				<Button variant="icon" className={styles.btn}>
					<CrossSVG />
				</Button>
			</div>
		</div>
	);
};
