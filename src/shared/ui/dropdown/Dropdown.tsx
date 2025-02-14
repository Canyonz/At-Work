import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../button/Button";
import MoreSVG from "../../assets/icons/more.svg";
import styles from "./Dropdown.module.sass";
import clsx from "clsx";

interface DropdownOptions {
	label: string;
	onClick: (id?: number) => void;
}

interface DropdownProps {
	options: DropdownOptions[];
	className?: string;
}

export const Dropdown = ({ options, className }: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleClickToggleDropDown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleSelect = (onClick: () => void) => {
		onClick();
		setIsOpen(false);
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
		<div ref={dropdownRef} className={clsx(styles.dropdown, className)}>
			<Button variant="icon" onClick={handleClickToggleDropDown}>
				<MoreSVG height={16} width={4} />
			</Button>
			{isOpen && (
				<ul className={styles.dropdownMenu}>
					{options.map((option, index) => (
						<li key={index} onClick={() => handleSelect(option.onClick)} className={styles.dropdownMenuItem}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};
