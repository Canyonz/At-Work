import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}

export default App;
