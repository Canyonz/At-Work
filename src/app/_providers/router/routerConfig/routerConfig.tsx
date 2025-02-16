import App from "@/app/App";
import { DashboardLayout } from "@/app/dashboardLayout/DashboardLayout";
import { PrivacyPage, ProfilePage, SecuryPage, WorkSpacePage } from "@/pages/dashboardPage";
import { MainPage } from "@/pages/mainPage";
import {
	getRouteMain,
	getRouteUserDetails,
	getRouteUserPrivacy,
	getRouteUserSecury,
	getRouteUserWorkSpace,
} from "@/shared/lib/consts/routes";
import { createBrowserRouter } from "react-router-dom";

export const routerConfig = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: getRouteMain(),
				element: <MainPage />,
			},
			{
				element: <DashboardLayout />,
				children: [
					{
						path: getRouteUserDetails(":id"),
						element: <ProfilePage />,
					},
					{
						path: getRouteUserWorkSpace(":id"),
						element: <PrivacyPage />,
					},
					{
						path: getRouteUserPrivacy(":id"),
						element: <SecuryPage />,
					},
					{
						path: getRouteUserSecury(":id"),
						element: <WorkSpacePage />,
					},
				],
			},
		],
	},
]);
