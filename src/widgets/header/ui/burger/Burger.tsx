import clsx from "clsx";
import styles from "./Burger.module.sass";
import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/text/Text";
import HeartSVG from "@/shared/assets/icons/heart.svg";
import NotificateSVG from "@/shared/assets/icons/notificate.svg";
import { useCallback, useEffect, useRef, useState } from "react";

interface BurgerProps {
	className?: string;
}

export const Burger = ({ className }: BurgerProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickToggleDropDown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		},
		[isOpen]
	);

	useEffect(() => {
		document.body.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.body.removeEventListener("mousedown", handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div ref={dropdownRef} className={clsx(styles.burger, className)}>
			<Button variant="icon" onClick={handleClickToggleDropDown}>
				<img src="/images/default.jpg" width={20} height={20} className={styles.image} />
			</Button>

			{isOpen && (
				<div className={styles.dropdownMenu}>
					<div className={styles.BurgerInfo}>
						<Text text="Ivan1234" className={styles.login} />
					</div>
					<div className={styles.actionsBtn}>
						<Button variant="icon">
							<HeartSVG width={16} height={16} />
						</Button>
						<Button variant="icon">
							<NotificateSVG width={16} height={16} />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};
