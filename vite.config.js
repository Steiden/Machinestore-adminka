import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";
import { resolve } from "path";

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
				grid: resolve(__dirname, "views/grid.html"),
				login: resolve(__dirname, "views/login.html"),
				registration: resolve(__dirname, "views/registration.html"),
				ui: resolve(__dirname, "views/ui.html"),
				"promo-master": resolve(__dirname, "views/promo-master.html"),
				products: resolve(__dirname, "views/products/index.html"),
				vendor: resolve(__dirname, "views/modals/vendor/index.html"),
				organization: resolve(__dirname, "views/modals/organization/index.html"),
			},
		},
	},
});
