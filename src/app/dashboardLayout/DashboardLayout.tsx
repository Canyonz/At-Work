import { Sidebar } from "@/widgets/dashboard";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { BackLink } from "@/shared/ui/backLink/BackLink";
import { getRouteMain } from "@/shared/lib/consts/routes";
import styles from "./DashboardLayout.module.sass";

export const DashboardLayout = () => {
	const router = useNavigate();
	const { id } = useParams<{ id: string }>();

	if (!id) {
		router(getRouteMain(), { replace: true });
		return null;
	}

	return (
		<div className={styles.dashboardLayoutWrapper}>
			<BackLink to={getRouteMain()} text="Назад" className={styles.backLink} />
			<div className={styles.dashboardLayout}>
				<Sidebar id={id} className={styles.sidebar}/>
				<Outlet context={id} />
			</div>
		</div>
	);
};
