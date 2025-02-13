import clsx from "clsx";
import styles from "./Text.module.sass";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";
type TextAlign = "left" | "center" | "right";

interface TextProps {
	text: string;
	size?: TextSize;
	bold?: boolean;
	align?: TextAlign;
	className?: string;
}

const getTextComponent = (variant: TextSize) => {
	switch (variant) {
		case "xl":
			return "h2";
		default:
			return "span";
	}
};

export const Text = ({ text, size = "sm", bold, align = "left", className }: TextProps) => {
	const Comp = getTextComponent(size);
	return <Comp className={clsx(styles.text, { [styles.bold]: bold }, styles[size], styles[align], className)}>{text}</Comp>;
};
