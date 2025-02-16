import { getRouteUserDetails, getRouteUserPrivacy, getRouteUserSecury, getRouteUserWorkSpace } from "@/shared/lib/consts/routes";

export const navLinks = [
	{
		title: "Данные профиля",
		to: getRouteUserDetails,
	},
	{
		title: "Рабочее пространство",
		to: getRouteUserWorkSpace,
	},
	{
		title: "Приватность",
		to: getRouteUserPrivacy,
	},
	{
		title: "Безопасность",
		to: getRouteUserSecury,
	},
];
