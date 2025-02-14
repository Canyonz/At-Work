import App from "@/app/App";
import { MainPage } from "@/pages/mainPage";
import { getRouteMain, getRouteUserDetails } from "@/shared/lib/consts/routes";
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
				path: getRouteUserDetails(":id"),
				element: <MainPage />,
			},
		],
	},
]);
