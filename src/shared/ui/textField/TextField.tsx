import clsx from "clsx";
import styles from "./TextField.module.sass";
import React, { InputHTMLAttributes } from "react";
import CrossSVG from "../../assets/icons/cross.svg";
import { Button } from "../button/Button";
import { Text } from "../text/Text";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	title?: string;
	error?: string;
	onClearField?: () => void;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
	({ title, error, className, onClearField, ...props }, ref) => {
		return (
			<div className={clsx(styles.textField, className)}>
				{title && (
					<label htmlFor={props.name} className={styles.label}>
						{title}
					</label>
				)}
				<div className={styles.inputWrapper}>
					<input id={props.name} ref={ref} className={styles.input} {...props} />

					{props.value && onClearField && (
						<Button variant="icon" type="button" onClick={onClearField} className={styles.btn}>
							<CrossSVG width={10} height={10} />
						</Button>
					)}
				</div>

				{error && <Text text={error} size="xs" className={styles.error} />}
			</div>
		);
	}
);
