import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppStore } from "./app/_providers/store/index.ts";
import { AppRouter } from "./app/_providers/router/index.ts";
import "./app/_styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppStore>
			<AppRouter />
		</AppStore>
	</StrictMode>
);
