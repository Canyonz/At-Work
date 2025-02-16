import { ReactElement } from "react";
import { Overlay } from "../overlay/Overlay";
import { Portal } from "../portal/Portal";
import styles from "./Modal.module.sass";
import clsx from "clsx";
import { Button } from "../button/Button";
import CrossSVG from "@/shared/assets/icons/cross.svg";

interface ModalProps {
	children: ReactElement;
	className?: string;
	onClose: () => void;
}

export const Modal = ({ children, className, onClose }: ModalProps) => {
	return (
		<Portal>
			<div className={clsx(styles.modal, className)}>
				<Overlay onClick={onClose} />
				<div className={styles.content}>
					<Button variant="icon" className={styles.btnClose} onClick={onClose}>
						<CrossSVG width={10} height={10} />
					</Button>
					{children}
				</div>
			</div>
		</Portal>
	);
};
