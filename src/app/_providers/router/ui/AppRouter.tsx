import { RouterProvider } from "react-router-dom";
import { routerConfig } from "../routerConfig/routerConfig.tsx";

export const AppRouter = () => {
	return <RouterProvider router={routerConfig} />;
};
