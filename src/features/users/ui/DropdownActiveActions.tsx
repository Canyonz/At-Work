import { Dropdown } from "@/shared/ui/dropdown/Dropdown";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useArchive } from "../lib/hooks/useArchive";
import { getRouteUserDetails } from "@/shared/lib/consts/routes";
import { useHide } from "../lib/hooks/useHide";

interface DropdownActiveActionsProps {
	userId: number;
	className?: string;
}

export const DropdownActiveActions = ({ userId, className }: DropdownActiveActionsProps) => {
	const router = useNavigate();

	const { handleArchiveUser } = useArchive();
	const { handleHideUser } = useHide();

	const options = useMemo(
		() => [
			{ label: "Редактировать", onClick: () => router(getRouteUserDetails(userId)) },
			{ label: "Архивировать", onClick: () => handleArchiveUser(userId) },
			{ label: "Скрыть", onClick: () => handleHideUser(userId) },
		],
		[handleArchiveUser, handleHideUser, router, userId]
	);
	return <Dropdown options={options} className={className} />;
};
