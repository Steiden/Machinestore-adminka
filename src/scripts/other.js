import { DotLottie } from "@lottiefiles/dotlottie-web";
import debounce from "./debounce";

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
	dLoaders.forEach((dLoader) => {
		new DotLottie({
			autoplay: true,
			loop: true,
			canvas: dLoader,
			src: "https://lottie.host/b816b1ca-73aa-452d-b295-bf8cb9b3b3b1/fqUmFIbkpf.lottie",
		});
	});
} catch (e) {
	console.error("Ошибка загрузки Lottiefiles: " + e);
}

try {
	// Яндекс карты

	async function refreshAddress(addressInput, markerELement, coordinates) {
		const address = await getAddress(coordinates);
		addressInput.value = address;
		markerELement.querySelector(".marker__text").textContent = address;
	}

	async function getAddress(coordinates) {
		// Обратное геокодирование через Яндекс API

		const response = await fetch(
			`https://geocode-maps.yandex.ru/1.x/?apikey=9cc9371c-b0ef-422b-b0be-2b1d49e32386&geocode=${coordinates.join(
				","
			)}&format=json&results=1`
		).catch((err) => {
			console.error("Ошибка получения адреса по координатам: " + err);
		});

		const data = await response.json();
		return data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.metaDataProperty
			?.GeocoderMetaData?.text;
	}

	async function getCoordinates(address) {
		// Обратное геокодирование через Яндекс API

		const response = await fetch(
			`https://geocode-maps.yandex.ru/1.x/?apikey=9cc9371c-b0ef-422b-b0be-2b1d49e32386&geocode=${address}&format=json&results=1`
		).catch((err) => {
			console.error("Ошибка получения адреса по координатам: " + err);
		});

		const data = await response.json();
		return data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos?.split(
			" "
		);
	}

	async function initMap() {
		await ymaps3.ready;
		const { YMap, YMapListener, YMapMarker, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
			ymaps3;

		// Creating maps
		const yandexMapContainers = document.querySelectorAll(".yandex-map");
		yandexMapContainers.forEach((yandexMapContainer) => {
			const addressInput = document.querySelector(
				`[data-input-id='${yandexMapContainer.getAttribute("data-for-input")}']`
			);

			// Create marker element
			const markerHtml = `
				<img src="/icons/marker.svg" class="marker__icon" />
				<img src="/icons/marker-active.svg" class="marker__icon--active" />
				<div class="marker__content">
					<p class="marker__text"></p>
				</div>
			`;
			const markerELement = document.createElement("div");
			markerELement.classList.add("marker");
			markerELement.innerHTML = markerHtml;

			markerELement.addEventListener("click", (e) => {
				e.stopPropagation();
				const markerContent = markerELement.querySelector(".marker__content");
				const markerText = markerELement.querySelector(".marker__text");
				markerContent.classList.contains("marker__content--visible")
					? markerContent.classList.remove("marker__content--visible")
					: markerText.textContent &&
					  markerContent.classList.add("marker__content--visible");
			});

			// Create marker
			const marker = new YMapMarker(
				{
					coordinates: [37.588144, 55.733842],
					draggable: true,
					onDragEnd: async (coordinates) =>
						refreshAddress(addressInput, markerELement, coordinates),
				},
				markerELement
			);

			const mapListener = new YMapListener({
				layer: "any",
				onClick: (object, event) => {
					const coordinates = event.coordinates;
					marker?.update({
						coordinates,
					});
					refreshAddress(addressInput, markerELement, coordinates);
				},
			});

			// Create map
			const map = new YMap(yandexMapContainer, {
				location: {
					center: [37.588144, 55.733842],
					zoom: 10,
				},
				theme: "dark",
				showScaleInCopyrights: true,
			});

			map.addChild(new YMapDefaultSchemeLayer({}));
			map.addChild(new YMapDefaultFeaturesLayer({}));
			map.addChild(mapListener);
			map.addChild(marker);

			// Link map and input field
			addressInput.addEventListener("input", (e) => {
				debounce(async () => {
					const address = addressInput.value;
					if (!address) return;

					const coordinates = await getCoordinates(address);
					marker.update({ coordinates });
					map.update({
						location: {
							center: coordinates,
						},
					});
				}, 300);
			});
		});
	}

	initMap();
} catch (e) {
	console.error("Ошибка работы Яндекс карт: " + e);
}

try {
	// Маска на все поля ввода телефона

	const phoneInputs = document.querySelectorAll("input[type=tel]");
	phoneInputs.forEach((phoneInput) => {
		const maskOptions = {
			mask: "+{7} (000) 000-00-00",
		};
		IMask(phoneInput, maskOptions);
	});
} catch (e) {
	console.error("Ошибка работы IMask: " + e);
}