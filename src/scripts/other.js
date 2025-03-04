import { DotLottie } from "@lottiefiles/dotlottie-web";

try {
	// Очистка поля ввода

	const clearInputButtons = document.querySelectorAll("[data-input='clear']");
	clearInputButtons.forEach((clearButton) => {
		const inputId = clearButton.getAttribute("data-for-input");
		const inputs = document.querySelectorAll(`[data-input-id='${inputId}']`);

		inputs.forEach((input) => {
			clearButton.style.display = input.value ? "flex" : "none";

			input.addEventListener("input", (e) => {
				clearButton.style.display = input.value ? "flex" : "none";
			});
			clearButton.addEventListener("click", (e) => {
				input.value = "";
				clearButton.style.display = "none";
			});
		});
	});
} catch (e) {
	console.error("Ошибка работы кнопки очистки поля: " + e);
}

try {
	// Показать/скрыть пароль

	const showPasswordButtons = document.querySelectorAll("[data-input='show']");
	const hidePasswordButtons = document.querySelectorAll("[data-input='hide']");

	showPasswordButtons.forEach((showButton) => {
		const inputId = showButton.getAttribute("data-for-input");
		const inputs = document.querySelectorAll(`[data-input-id='${inputId}']`);
		const hideButtons = document.querySelectorAll(
			`[data-input='hide'][data-for-input='${inputId}']`
		);

		inputs.forEach((input) => {
			const inputType = input.getAttribute("type");
			showButton.style.display = input.value && inputType === "password" ? "flex" : "none";

			input.addEventListener("input", (e) => {
				const inputType = input.getAttribute("type");
				showButton.style.display =
					input.value && inputType === "password" ? "flex" : "none";
			});
		});

		showButton.addEventListener("click", (e) => {
			inputs.forEach((input) => {
				input.setAttribute("type", "text");
			});

			showButton.style.display = "none";
			hideButtons.forEach((hideButton) => {
				hideButton.style.display = "flex";
			});
		});
	});

	hidePasswordButtons.forEach((hideButton) => {
		const inputId = hideButton.getAttribute("data-for-input");
		const inputs = document.querySelectorAll(`[data-input-id='${inputId}']`);
		const showButtons = document.querySelectorAll(
			`[data-input='show'][data-for-input='${inputId}']`
		);

		inputs.forEach((input) => {
			const inputType = input.getAttribute("type");
			hideButton.style.display = input.value && inputType === "password" ? "flex" : "none";

			input.addEventListener("input", (e) => {
				const inputType = input.getAttribute("type");
				hideButton.style.display = input.value && inputType === "text" ? "flex" : "none";
			});
		});

		hideButton.addEventListener("click", (e) => {
			inputs.forEach((input) => {
				input.setAttribute("type", "password");
			});

			hideButton.style.display = "none";
			showButtons.forEach((showButton) => {
				showButton.style.display = "flex";
			});
		});
	});
} catch (e) {
	console.error("Ошибка работы кнопок показать/скрыть пароль: " + e);
}


try {
	// Lottie анимации

	const dLoaders = document.querySelectorAll(".d-loader");
	console.log(dLoaders);
	dLoaders.forEach(dLoader => {
		new DotLottie({
			autoplay: true,
			loop: true,
			canvas: dLoader,
			src: "https://lottie.host/b816b1ca-73aa-452d-b295-bf8cb9b3b3b1/fqUmFIbkpf.lottie"
		});
	})

}
catch (e) {
	console.error("Ошибка загрузки Lottiefiles: " + e);
}