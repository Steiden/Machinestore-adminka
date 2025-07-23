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
				need: resolve(__dirname, "views/modals/need/index.html"),
				basket: resolve(__dirname, "views/modals/basket/index.html"),
				address: resolve(__dirname, "views/modals/address/index.html"),
				aviasales: resolve(__dirname, "views/modals/aviasales/index.html"),
				shipments: resolve(__dirname, "views/shipments/index.html"),
				lk: resolve(__dirname, "views/lk/index.html"),
				lk_about: resolve(__dirname, "views/lk/about/index.html"),
				lk_access: resolve(__dirname, "views/lk/access/index.html"),
				lk_access_edit: resolve(__dirname, "views/lk/access/edit/index.html"),
				lk_access_groups: resolve(__dirname, "views/lk/access/groups/index.html"),
				lk_staff: resolve(__dirname, "views/lk/staff/index.html"),
				lk_staff_edit: resolve(__dirname, "views/lk/staff/edit/index.html"),
			},
		},
	},
});
