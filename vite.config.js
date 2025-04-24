import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		postcss: {
			plugins: [autoprefixer({})],
		},
		preprocessorOptions: {
			scss: {
				api: "modern-compiler",
			},
		},
	},
	build: {
		rollupOptions: {
			input: {
				grid: "./grid.html",
				login: "./login.html",
				registration: "./registration.html",
				ui: "./ui.html",
				"promo-master": "./promo-master.html",
			},
		},
	},
});
