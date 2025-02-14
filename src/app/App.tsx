import { fetchUsers } from "@/entities/users";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { Header } from "@/widgets/header";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
