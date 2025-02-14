import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppStore } from "./app/providers/store/index.ts";
import { AppRouter } from "./app/providers/router/index.ts";
import "./app/styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<AppStore>
			<AppRouter />
		</AppStore>
	</StrictMode>
);
