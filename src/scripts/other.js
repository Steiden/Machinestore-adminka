import { DotLottie } from "@lottiefiles/dotlottie-web";
import debounce from "./debounce";

try {
	// Статус active для полей ввода

	const inputs = document.querySelectorAll(".d-input");
	inputs.forEach((input) => {
		const inputField = input.querySelector(".d-input__field");
		inputField.addEventListener("input", (e) => {
			console.log(inputField.value);
			if (inputField.value) input.classList.add("d-input--active");
			else input.classList.remove("d-input--active");
		});
	});
} catch (e) {
	console.error("Ошибка работы кнопок показать/скрыть пароль: " + e);
}

try {
	// Очистка поля ввода

	const clearInputButtons = document.querySelectorAll("[data-input='clear']");
	clearInputButtons?.forEach((clearButton) => {
		const inputId = clearButton.getAttribute("data-for-input");
		const inputs = document.querySelectorAll(`[data-input-id='${inputId}']`);

		inputs.forEach((input) => {
			clearButton.style.display = input.value ? "flex" : "none";

			input.addEventListener("input", (e) => {
				clearButton.style.display = input.value ? "flex" : "none";
			});
			clearButton.addEventListener("click", (e) => {
				input.value = "";
				input.parentElement.classList.remove("d-input--active");
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

	showPasswordButtons?.forEach((showButton) => {
		const inputId = showButton.getAttribute("data-for-input");
		const inputs = document.querySelectorAll(`[data-input-id='${inputId}']`);
		const hideButtons = document.querySelectorAll(`[data-input='hide'][data-for-input='${inputId}']`);

		inputs.forEach((input) => {
			const inputType = input.getAttribute("type");
			showButton.style.display = input.value && inputType === "password" ? "flex" : "none";

			input.addEventListener("input", (e) => {
				const inputType = input.getAttribute("type");
				showButton.style.display = input.value && inputType === "password" ? "flex" : "none";
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

	hidePasswordButtons?.forEach((hideButton) => {
		const inputId = hideButton.getAttribute("data-for-input");
		const inputs = document.querySelectorAll(`[data-input-id='${inputId}']`);
		const showButtons = document.querySelectorAll(`[data-input='show'][data-for-input='${inputId}']`);

		inputs?.forEach((input) => {
			const inputType = input.getAttribute("type");
			hideButton.style.display = input.value && inputType === "password" ? "flex" : "none";

			input.addEventListener("input", (e) => {
				const inputType = input.getAttribute("type");
				hideButton.style.display = input.value && inputType === "text" ? "flex" : "none";
			});
		});

		hideButton.addEventListener("click", (e) => {
			inputs?.forEach((input) => {
				input.setAttribute("type", "password");
			});

			hideButton.style.display = "none";
			showButtons?.forEach((showButton) => {
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
	dLoaders?.forEach((dLoader) => {
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

	async function refreshAddress(addressInput, markerELement, coordinates, refreshInput = true) {
		const address = await getAddress(coordinates);

		if (refreshInput) addressInput.value = address;

		markerELement.querySelector(".marker__text").textContent = address;
	}

	async function getAddress(coordinates) {
		// Обратное геокодирование через Яндекс API

		const response = await fetch(
			`https://geocode-maps.yandex.ru/1.x/?apikey=9cc9371c-b0ef-422b-b0be-2b1d49e32386&geocode=${coordinates.join(",")}&format=json&results=1`
		).catch((err) => {
			console.error("Ошибка получения адреса по координатам: " + err);
		});

		const data = await response.json();
		return data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.metaDataProperty?.GeocoderMetaData?.text;
	}

	async function getCoordinates(address) {
		// Обратное геокодирование через Яндекс API

		const response = await fetch(
			`https://geocode-maps.yandex.ru/1.x/?apikey=9cc9371c-b0ef-422b-b0be-2b1d49e32386&geocode=${address}&format=json&results=1`
		).catch((err) => {
			console.error("Ошибка получения адреса по координатам: " + err);
		});

		const data = await response.json();
		return data?.response?.GeoObjectCollection?.featureMember[0]?.GeoObject?.Point?.pos?.split(" ");
	}

	async function initMap() {
		await ymaps3.ready;
		const { YMap, YMapListener, YMapMarker, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } = ymaps3;

		// Creating maps
		const yandexMapContainers = document.querySelectorAll(".yandex-map");
		yandexMapContainers?.forEach((yandexMapContainer) => {
			const addressInput = document.querySelector(`[data-input-id='${yandexMapContainer.getAttribute("data-for-input")}']`);

			// Create marker element
			const markerHtml = `
				<img src="/icons/marker.svg" class="marker__icon" />
				<img src="/icons/marker-active.svg" class="marker__icon--active" />
				<div class="marker__content">
					<p class="marker__text"></p>
				</div>
			`;
			const markerElement = document.createElement("div");
			markerElement.classList.add("marker");
			markerElement.innerHTML = markerHtml;

			markerElement.addEventListener("click", (e) => {
				e.stopPropagation();
				const markerContent = markerElement.querySelector(".marker__content");
				const markerText = markerElement.querySelector(".marker__text");
				markerContent.classList.contains("marker__content--visible")
					? markerContent.classList.remove("marker__content--visible")
					: markerText.textContent && markerContent.classList.add("marker__content--visible");
			});

			// Create marker
			const marker = new YMapMarker(
				{
					coordinates: [37.588144, 55.733842],
					draggable: true,
					onDragEnd: async (coordinates) => refreshAddress(addressInput, markerElement, coordinates),
				},
				markerElement
			);

			const mapListener = new YMapListener({
				layer: "any",
				onClick: (object, event) => {
					const coordinates = event.coordinates;
					marker?.update({
						coordinates,
					});
					refreshAddress(addressInput, markerElement, coordinates);
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

			// map.behaviors.disable("scrollZoom");

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
					refreshAddress(addressInput, markerElement, coordinates, false);
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
	phoneInputs?.forEach((phoneInput) => {
		const maskOptions = {
			mask: "+{7} (000) 000-00-00",
		};
		IMask(phoneInput, maskOptions);
	});
} catch (e) {
	console.error("Ошибка работы IMask: " + e);
}

try {
	// Функционал модальных окон

	const modals = document.querySelectorAll(".d-modal");
	modals?.forEach((modal) => {
		modal.querySelector(".d-modal__close").addEventListener("click", (e) => {
			modal.classList.remove("modal--active");
		});
	});
} catch (e) {
	console.error("Ошибка работы модального окна: " + e);
}

try {
	// Функционал сайдбара

	const sidebar = document.getElementById("sidebar");
	const sidebarToggles = document.querySelectorAll("[data-sidebar-toggle]");

	sidebarToggles?.forEach((sidebarToggle) => {
		sidebarToggle.addEventListener("click", (e) => {
			const sidebarIsFull = sidebar.classList.contains("sidebar--full");

			if (sidebarIsFull) {
				sidebar.classList.remove("sidebar--full");
			} else {
				sidebar.classList.add("sidebar--full");
			}
		});
	});
} catch (e) {
	console.error("Ошибка работы сайдбара: " + e);
}

try {
	// Функционал каталога

	const catalogs = document.querySelectorAll("[data-catalog]");
	const catalogToggles = document.querySelectorAll("[data-catalog-toggle]");
	const catalogDesign = document.querySelector("[data-catalog-design]");

	catalogToggles?.forEach((catalogToggle) => {
		catalogToggle.addEventListener("click", (e) => {
			const catalogIsActive = Array.from(catalogs).reduce((result, catalog) => catalog.classList.contains("catalog--active") || result, false);
			const catalogDesignIsActive = catalogDesign.classList.contains("header__design--active");

			if (catalogIsActive) {
				catalogs.forEach((catalog) => catalog.classList.remove("catalog--active"));
			} else {
				catalogs.forEach((catalog) => catalog.classList.add("catalog--active"));
			}

			if (catalogDesignIsActive) {
				catalogDesign.classList.remove("header__design--active");
			} else {
				catalogDesign.classList.add("header__design--active");
			}
		});
	});

	window.addEventListener("click", (e) => {
		let isAvailable =
			Array.from(catalogs).reduce((result, catalog) => !catalog.contains(e.target) && result, true) &&
			Array.from(catalogToggles).reduce((result, toggle) => !toggle.contains(e.target) & result, true);

		if (isAvailable) {
			catalogs?.forEach((catalog) => catalog.classList.remove("catalog--active"));
			catalogDesign?.classList.remove("header__design--active");
		}
	});
} catch (e) {
	console.error("Ошибка работы каталога: " + e);
}

try {
	// Функционал счетчика

	const counters = document.querySelectorAll("[data-counter]");

	counters?.forEach((counter) => {
		const decreaseButton = counter.querySelector("[data-counter-button='decrement']");
		const increaseButton = counter.querySelector("[data-counter-button='increment']");
		const input = counter.querySelector("[data-counter-input]");

		decreaseButton.addEventListener("click", () => {
			if (input.value > 1) {
				input.value--;
			}
		});

		increaseButton.addEventListener("click", () => {
			input.value++;
		});
	});
} catch (e) {
	console.error("Ошибка работы счетчика: " + e);
}

try {
	const promotionsInfo = document.querySelector(".promotions__info");
	const header = document.querySelector(".header");
	const main = document.querySelector(".main");

	main.addEventListener("scroll", (e) => {
		const promotionsInfoTop = Math.floor(promotionsInfo.getClientRects()[0].top);
		const headerHeight = Math.floor(header.getClientRects()[0].height);

		if (promotionsInfoTop === headerHeight) {
			promotionsInfo.classList.add("promotions__info--sticky");
		} else {
			promotionsInfo.classList.remove("promotions__info--sticky");
		}
	});
} catch (e) {
	console.error("Ошибка обработки липкого хедера: " + e);
}

try {
	// Функционал модалок

	const modals = document.querySelectorAll("[data-modal2]");
	modals.forEach((modal) => {
		const closeButtons = modal.querySelectorAll("[data-modal2-close]");
		closeButtons.forEach((close) => {
			close.addEventListener("click", () => modal.classList.remove("show-modal"));
		});
	});
} catch (e) {
	console.error("Ошибка работы модалки2: " + e);
}
