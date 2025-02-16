import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
	base: "/At-Work/",
	plugins: [
		react(),
		svgr({
			include: "**/*.svg",
			svgrOptions: {
				icon: true,
				svgoConfig: {
					plugins: [
						{
							name: "convertColors",
							params: {
								currentColor: true,
							},
						},
					],
				},
			},
		}),
	],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
});
