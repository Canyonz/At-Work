import { Dropdown } from "@/shared/ui/dropdown/Dropdown";
import { useMemo } from "react";
import { useActive } from "../lib/hooks/useActive";

interface DropdownArchiveActionsProps {
	userId: number;
	className?: string;
}

export const DropdownArchiveActions = ({ userId, className }: DropdownArchiveActionsProps) => {
	const { handleActiveUser } = useActive();

	const options = useMemo(() => [{ label: "Активировать", onClick: () => handleActiveUser(userId) }], [handleActiveUser, userId]);

	return <Dropdown options={options} className={className} />;
};
