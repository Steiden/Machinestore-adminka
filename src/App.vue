<script setup lang="ts">
import { /*RouterLink */ RouterView } from 'vue-router'
</script>

<template>
  <aside class="sidebar" id="sidebar">
    <div class="sidebar__inner sidebar__inner--desktop">
      <div class="sidebar__content-wrapper">
        <div class="sidebar__logo-wrapper">
          <a href="/" class="sidebar__logo-container">
            <img src="/icons/logo.svg" alt="MST" width="40" height="40" class="sidebar__logo" />
            <span class="sidebar__logo-text">МСТ Аналитика</span>
          </a>
          <div class="sidebar__block sidebar__toggle-block sidebar__logo-toggle">
            <button class="sidebar__toggle" data-sidebar-toggle>
              <i class="d-icon-arrow sidebar__toggle-icon"></i>
            </button>
          </div>
        </div>
        <div class="sidebar__content">
          <div class="sidebar__divider sidebar__divider--light sidebar__warehouse-divider-top sidebar__hidden"></div>

          <div class="sidebar__warehouse sidebar__hidden">
            <div class="sidebar__warehouse-content">
              <span class="sidebar__warehouse-title">Склад доставки:</span>
              <p class="sidebar__warehouse-text">Ростов на Дону, ул. Микухина Каланахлоя, 11 / 7 к 32 ЛИТ 898</p>
            </div>
            <button class="d-icon-wrapper sidebar__warehouse-button">
              <i class="d-icon-pen sidebar__warehouse-button-icon"></i>
            </button>
          </div>

          <div class="sidebar__divider sidebar__divider--light sidebar__warehouse-divider-bottom sidebar__hidden"></div>

          <div class="sidebar__block sidebar__toggle-block">
            <button class="sidebar__toggle" data-sidebar-toggle>
              <i class="d-icon-arrow sidebar__toggle-icon"></i>
            </button>
          </div>

          <div class="sidebar__divider sidebar__divider--light header__vendor-divider-top sidebar__hidden"></div>

          <div class="header__vendor">
            <span class="header__vendor-title">выбрано поставщиков:</span>
            <button class="header__vendor-button">
              <div>
                <i class="d-icon-trolley header__vendor-icon"></i>
                <span class="header__vendor-value">6 из 45</span>
              </div>
              <i class="d-icon-angle-rounded header__vendor-arrow"></i>
            </button>
          </div>

          <div class="sidebar__divider sidebar__divider--light sidebar__organization-divider-top sidebar__hidden"></div>

          <div class="sidebar__block sidebar__organization-block">
            <button class="sidebar__organization sidebar__organization--mini">
              <img src="/icons/spo-logo.svg" alt="SPO" class="sidebar__organization-logo" />
            </button>
            <div class="sidebar__organization sidebar__organization--full sidebar__hidden">
              <img src="/icons/spo-logo.svg" alt="SPO" class="sidebar__organization-logo" />
              <div class="sidebar__organization-content">
                <span class="sidebar__organization-title">Специальное Профессиональное Оборудование</span>
                <button class="d-button d-button-tertiary d-button-tertiary-small sidebar__organization-button">
                  <i class="d-icon-refresh sidebar__organization-button-icon"></i>
                  <span class="sidebar__organization-button-text">Сменить компанию</span>
                </button>
              </div>
              <button class="d-icon-wrapper sidebar__organization-info-button">
                <i class="d-icon-info sidebar__organization-info-button-icon"></i>
              </button>
            </div>
          </div>

          <div class="sidebar__divider sidebar__divider--light sidebar__user-divider--top sidebar__hidden"></div>

          <button class="sidebar__user sidebar__hidden">
            <i class="d-icon-profile sidebar__user-icon"></i>
            <span class="sidebar__user-text">Игорь Игореведовичив</span>
          </button>

          <div class="sidebar__divider sidebar__divider--light sidebar__user-divider--bottom sidebar__hidden"></div>

          <div class="sidebar__divider sidebar__nav-divider--top"></div>

          <nav class="sidebar__nav">
            <ul class="sidebar__list">
              <li class="sidebar__block sidebar__item">
                <button class="sidebar__item-button">
                  <i class="d-icon-list sidebar__item-icon"></i>
                  <span class="sidebar__item-text">Закупки</span>
                </button>
              </li>
              <li class="sidebar__block sidebar__item">
                <button class="sidebar__item-button sidebar__visible">
                  <i class="d-icon-cart-solid sidebar__item-icon"></i>
                  <span class="sidebar__item-text">Заказы</span>
                </button>
                <button class="sidebar__item-button sidebar__hidden">
                  <i class="d-icon-bag sidebar__item-icon"></i>
                  <span class="sidebar__item-text">Мои заказы</span>
                </button>
              </li>
              <li class="sidebar__block sidebar__item">
                <button class="sidebar__item-button">
                  <i class="d-icon-star sidebar__item-icon"></i>
                  <span class="sidebar__item-text sidebar__visible">Поставщики</span>
                  <span class="sidebar__item-text sidebar__hidden">Мои поставщики</span>
                </button>
              </li>
              <li class="sidebar__block sidebar__item">
                <button class="sidebar__item-button">
                  <i class="d-icon-box sidebar__item-icon"></i>
                  <span class="sidebar__item-text">Товары</span>
                </button>
              </li>
            </ul>
          </nav>
          <div class="sidebar__divider sidebar__bottom-divider sidebar__visible"></div>
        </div>
      </div>
      <div class="sidebar__bottom">
        <div class="sidebar__divider sidebar__bottom-divider sidebar__hidden"></div>

        <div class="sidebar__block sidebar__item sidebar__question-block sidebar__question-block--mini">
          <button class="sidebar__item-button sidebar__question">
            <i class="d-icon-question sidebar__item-icon sidebar__question-logo"></i>
            <span class="sidebar__item-text">Вопросы</span>
          </button>
        </div>
        <div class="sidebar__block sidebar__item sidebar__exit-block sidebar__exit-block--mini">
          <button class="sidebar__item-button sidebar__exit">
            <i class="d-icon-exit sidebar__item-icon sidebar__exit-logo"></i>
            <span class="sidebar__item-text">Выйти</span>
          </button>
        </div>

        <button class="sidebar__bottom-block sidebar__question-block sidebar__hidden">
          <i class="d-icon-question sidebar__question-logo"></i>
          <span class="sidebar__bottom-block-text">Работа в Закупках</span>
        </button>

        <button class="sidebar__bottom-block sidebar__exit-block sidebar__hidden">
          <i class="d-icon-exit sidebar__exit-logo"></i>
          <span class="sidebar__bottom-block-text">Выйти из ЛК</span>
        </button>
      </div>
    </div>
    <div class="sidebar__inner sidebar__inner--mobile">
      <nav class="sidebar__nav">
        <ul class="sidebar__list">
          <li class="sidebar__block sidebar__item">
            <button class="sidebar__item-button" data-catalog-toggle>
              <i class="d-icon-burger sidebar__item-icon"></i>
            </button>
          </li>
          <li class="sidebar__block sidebar__item">
            <button class="sidebar__item-button">
              <i class="d-icon-bell-solid sidebar__item-icon"></i>
            </button>
          </li>
          <li class="sidebar__block sidebar__item">
            <button class="sidebar__item-button">
              <i class="d-icon-upload-solid sidebar__item-icon"></i>
            </button>
          </li>
          <li class="sidebar__block sidebar__item sidebar__item--active">
            <button class="sidebar__item-button">
              <i class="d-icon-catalog-solid sidebar__item-icon"></i>
            </button>
          </li>
          <li class="sidebar__block sidebar__item">
            <button class="sidebar__item-button">
              <i class="d-icon-cart-solid sidebar__item-icon"></i>
            </button>
          </li>
          <li class="sidebar__block sidebar__item">
            <button class="sidebar__item-button">
              <img src="/icons/spo-logo.svg" class="sidebar__item-img" />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
  <div class="content">
    <div class="header__wrapper">
      <header class="content-wrapper header">
        <div class="header__catalog-content">
          <a href="/" class="header__logo-container">
            <img src="/icons/logo.svg" alt="MST" width="40" height="40" class="header__logo" />
            <span class="header__logo-text">Управление продажами</span>
          </a>
          <div class="sidebar__divider sidebar__divider--light header__logo-divider"></div>
          <div class="header__top">
            <button class="header__address">
              <i class="d-icon-location header__address-icon"></i>
              <p class="header__address-title">Склад:</p>
              <div class="header__address-value">
                <p class="header__address-text">Ростов на Дону, ул. Микухина Каланахлоя, 11 / 7 к 32 ЛИТ 898</p>
                <div class="header__address-divider"></div>
                <i class="d-icon-pen header__address-edit-icon"></i>
              </div>
            </button>
            <div class="header__vendor">
              <span class="header__vendor-title">выбрано поставщиков:</span>
              <button class="header__vendor-button">
                <i class="d-icon-trolley header__vendor-icon"></i>
                <span class="header__vendor-value">6 из 45</span>
                <i class="d-icon-angle header__vendor-arrow"></i>
              </button>
            </div>
          </div>
          <div class="header__content">
            <div class="header__left">
              <div class="header__design" data-catalog-design>
                <div class="header__design-block header__design-block--left"></div>
                <div class="header__design-block header__design-block--right"></div>

                <button class="d-button d-button-primary header__catalog" data-catalog-toggle>
                  <i class="d-icon-catalog header__catalog-icon"></i>
                  <span class="header__catalog-text">Каталог</span>
                </button>
                <form class="d-search header__search">
                  <input type="text" placeholder="Найти у поставщиков" class="d-search__field header__search-field" />
                  <button type="submit"
                    class="d-button d-button-primary d-button-primary-small box-shadow-none d-search__button header__search-button">
                    Найти
                  </button>
                  <button type="submit" class="d-search__icon-button header__search-icon-button">
                    <i class="d-icon-search-big header__icon-button-icon"></i>
                  </button>
                  <ul class="d-search__suggestions">
                    <!-- <li class="d-search__suggestion">
													Россия, Москва, Большой Предтеченский переулок, 13с4
												</li>
												<li class="d-search__suggestion">
													Россия, Москва, Большой Предтеченский переулок, 13с4
												</li>
												<li class="d-search__suggestion">
													Россия, Москва, Большой Предтеченский переулок, 13с4
												</li>
												<li class="d-search__suggestion">
													Россия, Москва, Большой Предтеченский переулок, 13с4
												</li> -->
                  </ul>
                </form>
              </div>
              <button class="d-button d-button-tertiary shadow header__upload">
                <i class="d-icon-upload header__upload-icon"></i>
                <span class="header__upload-text">Потребность</span>
              </button>
            </div>
            <div class="header__right">
              <button class="d-button d-button-secondary d-button-rounded header__cart">
                <i class="d-icon-cart header__cart-icon"></i>
              </button>
              <button class="d-button d-button-secondary d-button-rounded header__notification">
                <i class="d-icon-bell header__notification-icon"></i>
                <div class="status">+100</div>
              </button>
            </div>
          </div>
        </div>
        <div class="header__profile-content">
          <div class="header__vendor">
            <div class="header__vendor-content">
              <span class="header__vendor-title">выбрано поставщиков:</span>
              <div class="header__vendor-button">
                <i class="d-icon-trolley header__vendor-icon"></i>
                <span class="header__vendor-value">6 из 45</span>
              </div>
            </div>
            <button>
              <i class="d-icon-angle-rounded header__vendor-arrow"></i>
            </button>
          </div>

          <div class="sidebar__divider sidebar__divider--light header__vendor-divider"></div>

          <div class="header__organization">
            <div class="header__organization-info">
              <img src="/icons/spo-logo.svg" alt="SPO" class="header__organization-logo" />
              <span class="header__organization-title">Специальное Профессиональное Оборудование</span>
            </div>
            <button class="d-icon-wrapper header__organization-info-button">
              <i class="d-icon-info header__organization-info-button-icon"></i>
            </button>
          </div>

          <div class="sidebar__divider sidebar__divider--light header__user-divider header__user-divider--top"></div>

          <button class="header__user">
            <i class="d-icon-profile header__user-icon"></i>
            <span class="header__user-text">Игорь Игореведовичив</span>
          </button>

          <div class="sidebar__divider sidebar__divider--light header__user-divider header__user-divider--bottom"></div>

          <div class="header__organization-button-wrapper">
            <button class="d-button d-button-tertiary d-button-tertiary-small sidebar__organization-button">
              <i class="d-icon-refresh sidebar__organization-button-icon"></i>
              <span class="sidebar__organization-button-text">Сменить компанию</span>
            </button>
          </div>

          <div class="header__address header__address--alt">
            <i class="d-icon-location header__address-icon"></i>
            <div class="header__address-content">
              <p class="header__address-title">Склад:</p>
              <p class="header__address-text">Ростов на Дону, ул. Микухина Каланахлоя, 11 / 7 к 32 ЛИТ 898</p>
            </div>
            <button class="header__address-edit">
              <i class="d-icon-pen header__address-edit-icon"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
    <main class="main">
      <div class="content-wrapper"></div>

      <div class="d-modal2__overlay">
        <div class="d-modal2">
          <button class="d-modal2__close">
            <i class="d-icon-times d-modal2__close-icon"></i>
          </button>

          <div class="d-modal2__header">
            <p class="d-modal2__title">Настройка скидки</p>
            <p class="d-modal2__description">Выберите один из методов редактирования цены</p>
          </div>

          <div class="d-modal2__content">
            <div class="promo-settings">
              <div class="product-row">
                <img src="/images/product2.svg" alt="" class="product-row__image" />
                <div class="product-row__content">
                  <p class="product-row__title">Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2</p>
                  <p class="product-row__description">Арт: 844337</p>
                </div>
              </div>

              <div class="promo-settings__type">
                <div class="d-radio__container">
                  <div class="d-radio__wrapper">
                    <label for="promo-radio1" class="d-radio">
                      <input type="radio" name="promo-radio" id="promo-radio1" class="d-radio__input" />
                    </label>
                    <label for="promo-radio1" class="d-radio__label">Задать вручную</label>
                  </div>
                  <div class="d-radio__wrapper">
                    <label for="promo-radio2" class="d-radio">
                      <input type="radio" name="promo-radio" id="promo-radio2" class="d-radio__input" />
                    </label>
                    <label for="promo-radio2" class="d-radio__label">Тип цен</label>
                  </div>
                </div>
              </div>

              <div class="d-field-container d-field-container--long promo-settings__values">
                <div
                  class="d-field-wrapper d-field-wrapper--small d-field-wrapper--vertical promo-settings__values-value">
                  <label for="test-dropdown" class="d-dropdown__label">Тип ценообразования</label>
                  <div class="d-input d-input--light">
                    <input type="text" placeholder="Скидка" name="login" class="d-input__field" data-input-id="login"
                      required />
                    <button class="d-input__dropdown-button">
                      <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                    </button>
                  </div>
                  <label for="test-dropdown" class="d-dropdown__label">РРЦ: <span class="inline-block">23990
                      ₽</span></label>
                </div>
                <div
                  class="d-field-wrapper d-field-wrapper--small d-field-wrapper--vertical promo-settings__values-value">
                  <label for="test-dropdown" class="d-dropdown__label">От типа цены</label>
                  <div class="d-input d-input--light">
                    <input type="text" placeholder="" name="login" class="d-input__field" data-input-id="login"
                      required />
                    <button class="d-input__dropdown-button">
                      <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                    </button>
                  </div>
                  <label for="test-dropdown" class="d-dropdown__label">Скидка от РРЦ: <span class="inline-block">5.00
                      %</span></label>
                </div>
                <div
                  class="d-field-wrapper d-field-wrapper--small d-field-wrapper--vertical promo-settings__values-value">
                  <label for="test-dropdown" class="d-dropdown__label">Значение</label>
                  <div class="d-field-container d-field-container--long">
                    <div class="d-input d-input--light">
                      <input type="text" placeholder="" name="login" class="d-input__field" data-input-id="login"
                        required />
                    </div>
                    <div class="d-input d-input--light">
                      <input type="text" placeholder="%" name="login" class="d-input__field" data-input-id="login"
                        required />
                      <button class="d-input__dropdown-button">
                        <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                      </button>
                    </div>
                  </div>
                  <label for="test-dropdown" class="d-dropdown__label">Цена со скидкой: <span class="inline-block">35
                      542.05 ₽</span></label>
                </div>
              </div>

              <div class="d-field-container d-field-container--long promo-settings__values">
                <div
                  class="d-field-wrapper d-field-wrapper--small d-field-wrapper--vertical promo-settings__values-value">
                  <label for="test-dropdown" class="d-dropdown__label">Тип ценообразования</label>
                  <div class="d-input d-input--light">
                    <input type="text" placeholder="Скидка" name="login" class="d-input__field" data-input-id="login"
                      required />
                    <button class="d-input__dropdown-button">
                      <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                    </button>
                  </div>
                  <div class="d-between">
                    <label for="test-dropdown" class="d-dropdown__label">РРЦ: <span class="inline-block">23990
                        ₽</span></label>
                    <label for="test-dropdown" class="d-dropdown__label">Скидка от РРЦ: <span class="inline-block">23990
                        ₽</span></label>
                    <label for="test-dropdown" class="d-dropdown__label">Цена со скидкой: <span
                        class="inline-block">22790.5 ₽</span></label>
                  </div>
                </div>
              </div>

              <div class="d-note promo-settings__note">
                Цена будет оставаться неизменной, даже при изменении типов цен, РРЦ и любых других параметров товара.
              </div>
            </div>

            <div class="d-modal2__actions">
              <button
                class="d-button d-button-secondary d-button-secondary-small d-modal2__action-button">Отмена</button>
              <button class="d-button d-button-primary d-button-primary-small d-modal2__action-button">Ок</button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-modal2__overlay">
        <div class="d-modal2">
          <button class="d-modal2__close">
            <i class="d-icon-times d-modal2__close-icon"></i>
          </button>

          <div class="d-modal2__header">
            <p class="d-modal2__title">Совместимость акций</p>
            <p class="d-modal2__description">
              Таблица, в которой указывается совместимость создаваемой \ редактируемой акции, индивидуальной скидки,
              сбытовой
              политики:
            </p>
          </div>

          <div class="d-modal2__content">
            <div class="promo-compatibility">
              <table
                class="d-table d-table--small d-table--full d-table--no-col-divider d-table--v-top-col d-table--head-col-divider d-table--no-row-divider">
                <thead class="d-table__head">
                  <tr class="d-table__row">
                    <th class="d-table__head-col">Название</th>
                    <th class="d-table__head-col">Описание</th>
                    <th class="d-table__head-col">Статус совместимости</th>
                    <th class="d-table__head-col" style="width: 28px">
                      <div class="flex-center">
                        <button class="d-icon-wrapper d-icon-wrapper--no-hover text-white">
                          <i class="d-icon-pen2 d-table__icon promo-compatibility__icon"></i>
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="d-table__body promotions__product-card">
                  <tr class="d-table__row">
                    <td class="d-table__col">
                      <p class="d-table__text">Майские во всеоружии: отсрочка 90 дней</p>
                    </td>
                    <td class="d-table__col">
                      <p class="d-table__text">
                        Газовые грили и походные печи с отсрочкой 90 дней. Совместима с акцией "Бесплатная доставка
                        при заказе от 100 000 рублей"
                      </p>
                    </td>
                    <td class="d-table__col">
                      <div class="promo-compatibility__large-text-container">
                        <p class="d-table__text">Совместима со всеми акциями</p>
                        <p class="d-table__text">Режим совместивости: Складываются</p>
                      </div>
                    </td>
                    <td class="d-table__col">
                      <div class="flex-center">
                        <button class="d-icon-wrapper d-icon-wrapper--no-hover d-icon-wrapper--black">
                          <i class="d-icon-pen2 d-table__icon promo-compatibility__icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="d-table__row">
                    <td class="d-table__col">
                      <p class="d-table__text">Майские во всеоружии: отсрочка 90 дней</p>
                    </td>
                    <td class="d-table__col">
                      <p class="d-table__text">
                        Газовые грили и походные печи с отсрочкой 90 дней. Совместима с акцией "Бесплатная доставка
                        при заказе от 100 000 рублей"
                      </p>
                    </td>
                    <td class="d-table__col">
                      <div class="promo-compatibility__large-text-container">
                        <p class="d-table__text">Совместима со всеми акциями</p>
                        <p class="d-table__text">Режим совместивости: Складываются</p>
                      </div>
                    </td>
                    <td class="d-table__col">
                      <div class="flex-center">
                        <button class="d-icon-wrapper d-icon-wrapper--no-hover d-icon-wrapper--black">
                          <i class="d-icon-pen2 d-table__icon promo-compatibility__icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="d-table__row">
                    <td class="d-table__col">
                      <p class="d-table__text">Майские во всеоружии: отсрочка 90 дней</p>
                    </td>
                    <td class="d-table__col">
                      <p class="d-table__text">
                        Газовые грили и походные печи с отсрочкой 90 дней. Совместима с акцией "Бесплатная доставка
                        при заказе от 100 000 рублей"
                      </p>
                    </td>
                    <td class="d-table__col">
                      <div class="promo-compatibility__large-text-container">
                        <p class="d-table__text">Совместима со всеми акциями</p>
                        <p class="d-table__text">Режим совместивости: Складываются</p>
                      </div>
                    </td>
                    <td class="d-table__col">
                      <div class="flex-center">
                        <button class="d-icon-wrapper d-icon-wrapper--no-hover d-icon-wrapper--black">
                          <i class="d-icon-pen2 d-table__icon promo-compatibility__icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr class="d-table__row">
                    <td class="d-table__col">
                      <p class="d-table__text">Майские во всеоружии: отсрочка 90 дней</p>
                    </td>
                    <td class="d-table__col">
                      <p class="d-table__text">
                        Газовые грили и походные печи с отсрочкой 90 дней. Совместима с акцией "Бесплатная доставка
                        при заказе от 100 000 рублей"
                      </p>
                    </td>
                    <td class="d-table__col">
                      <div class="promo-compatibility__large-text-container">
                        <p class="d-table__text">Совместима со всеми акциями</p>
                        <p class="d-table__text">Режим совместивости: Складываются</p>
                      </div>
                    </td>
                    <td class="d-table__col">
                      <div class="flex-center">
                        <button class="d-icon-wrapper d-icon-wrapper--no-hover d-icon-wrapper--black">
                          <i class="d-icon-pen2 d-table__icon promo-compatibility__icon"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="d-modal2__actions">
              <button
                class="d-button d-button-secondary d-button-secondary-small d-modal2__action-button">Отмена</button>
              <button class="d-button d-button-primary d-button-primary-small d-modal2__action-button">Ок</button>
            </div>
          </div>
        </div>
      </div>

      <div class="d-modal2__overlay show-modal" data-modal2>
        <div class="content-wrapper promo-modal__wrapper">
          <div class="d-modal2 promo-modal">
            <div class="promo-modal__header">
              <div class="promo-modal__header-left">
                <div class="d-modal2__header promo-modal__header-title">
                  <p class="d-modal2__title">Мастер создания акций</p>
                  <p class="d-modal2__description">Создайте акцию в несколько этапов</p>
                </div>
                <div class="d-divider d-divider--vertical d-divider--black promo-modal__header-divider"></div>
                <button class="d-button d-button-tertiary box-shadow-none promo-modal__header-button">
                  <i class="d-icon-wallet"></i>
                  Условия оплаты
                </button>
              </div>
              <div class="promo-modal__header-right">
                <div class="d-progress promo-modal__progress">
                  <p class="d-progress__label promo-modal__progress-label">Для создания акции пройдите 8 из 10 шагов</p>
                  <div class="d-progress__line"></div>
                </div>
                <button class="d-modal2__close promo-modal__close" data-modal2-close>
                  <i class="d-icon-times d-modal2__close-icon"></i>
                </button>
              </div>
            </div>
            <div class="d-modal2__content promo-modal__content">
              <section class="promo-master">
                <div class="promo-master__content">
                  <div class="promo-master__content-left">
                    <!-- Условия оплаты -->
                    <div class="contents hidden" id="paymentConditions">
                      <p class="promo-master__title">Условия оплаты</p>
                      <div class="d-field-container d-field-container--vertical promo-master__settings">
                        <p class="promo-master__subtitle">Настройка отсрочки платежа</p>
                        <div class="d-radio__container d-radio__container--small">
                          <div class="d-radio__wrapper">
                            <label for="promo-master-radio1" class="d-radio">
                              <input type="radio" name="promo-master-radio" id="promo-master-radio1"
                                class="d-radio__input" />
                            </label>
                            <label for="promo-master-radio1" class="d-radio__label">Отсрочка (по умолчанию)</label>
                          </div>
                          <div class="d-radio__wrapper">
                            <label for="promo-master-radio2" class="d-radio">
                              <input type="radio" name="promo-master-radio" id="promo-master-radio2"
                                class="d-radio__input" />
                            </label>
                            <label for="promo-master-radio2" class="d-radio__label">Под реализацию</label>
                          </div>
                        </div>
                      </div>
                      <div class="promotions__card promotions__card--small promo-master__card">
                        <div class="promotions__card-header">
                          <div class="promotions__card-header-left">
                            <p class="promotions__card-title">
                              Срок отсрочки платежа: <span class="promotions__card-title-span">19 дней</span>
                            </p>
                          </div>
                          <button class="promotions__card-button">
                            <i class="d-icon-pen2 promotions__card-button-icon"></i>
                          </button>
                        </div>
                        <div class="promotions__card-content">
                          <div class="promotions__card-values">
                            <p class="promotions__card-text promotions__card-text--bold promotions__card-text--small">
                              Срок отсрочки платежа:
                            </p>
                            <div class="d-field-container d-field-container--vertical">
                              <p class="promotions__card-text promotions__card-text--dark-gray">
                                — 90% через 10 дней после отгрузки
                              </p>
                              <p class="promotions__card-text promotions__card-text--dark-gray">
                                — 10% через 100 дней после отгрузки
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- Баннер акции -->
                    <div class="contents" id="promoBanner">
                      <p class="promo-master__title">Баннер акции</p>
                      <div class="d-field-container d-field-container--vertical promo-master__upload-header">
                        <p class="promo-master__subtitle">Загрузка баннера</p>
                        <p class="d-text">
                          Загрузите изображение с разрешением 6824х1996, в формате png, jpeg, svg. Размер
                          изображения не должен превышать 5 Мбайт .
                        </p>
                      </div>
                      <label class="d-upload promo-master__upload" for="promo-upload">
                        <input type="file" name="promo-upload" id="promo-upload" class="d-upload__input" />

                        <img src="/icons/upload-cloud.svg" alt="Upload icon" class="d-upload__icon" width="80"
                          height="50" />
                        <p class="d-upload__title">Перетащите файл в эту область</p>
                        <p class="d-upload__description">
                          Вы также можете загрузить файлы png, jpeg, svg,
                          <a href="/" class="d-link d-upload__link">нажав сюда</a>
                        </p>
                      </label>
                      <div class="d-field-container d-field-container--vertical promo-master__settings">
                        <p class="promo-master__subtitle">Места размещения</p>
                        <div class="d-radio__container d-radio__container--small">
                          <div class="d-radio__wrapper">
                            <label class="d-switch" for="test-switch">
                              <input type="checkbox" name="promoHome" id="promoHome" class="d-switch__input" />
                              <div class="d-switch__circle"></div>
                            </label>
                            <label class="d-switch-button__text" for="promoHome">На главной странице закупок</label>
                          </div>
                          <div class="d-radio__wrapper">
                            <label class="d-switch" for="promoInCart">
                              <input type="checkbox" name="promoInCart" id="promoInCart" class="d-switch__input" />
                              <div class="d-switch__circle"></div>
                            </label>
                            <label for="promoInCart" class="d-switch-button__text d-radio__label">В корзине</label>
                          </div>
                          <div class="d-radio__wrapper">
                            <label class="d-switch" for="promoInCatalog">
                              <input type="checkbox" name="promoInCatalog" id="promoInCatalog"
                                class="d-switch__input" />
                              <div class="d-switch__circle"></div>
                            </label>
                            <label for="promoInCatalog" class="d-switch-button__text d-radio__label">В каталоге</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="promo-master__content-right">
                    <div class="promo-master__setting-container">
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--used">
                        <i class="d-icon-lines"></i>
                        Контент акции
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--used">
                        <i class="d-icon-calendar"></i>
                        Даты проведения акции
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--used">
                        <i class="d-icon-picture"></i>
                        Баннер акции
                      </button>
                      <button class="d-button d-button-tertiary box-shadow-none promo-master__setting">
                        <i class="d-icon-wallet"></i>
                        Условия оплаты
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--disabled"
                        disabled>
                        <i class="d-icon-truck"></i>
                        Условия доставки
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--disabled"
                        disabled>
                        <i class="d-icon-percent"></i>
                        Условия участия в акции: Требования к заказу
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--disabled"
                        disabled>
                        <i class="d-icon-percent"></i>
                        Условия участия в акции: Совместимость
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--disabled"
                        disabled>
                        <i class="d-icon-user-star"></i>
                        Аудитория акции
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--disabled"
                        disabled>
                        <i class="d-icon-cube"></i>
                        Товары и скидки: Склады
                      </button>
                      <button
                        class="d-button d-button-tertiary box-shadow-none promo-master__setting promo-master__setting--disabled"
                        disabled>
                        <i class="d-icon-cube"></i>
                        Товары и скидки: Товары
                      </button>
                    </div>
                  </div>
                </div>
                <div class="promo-master__footer">
                  <div class="promo-master__footer-actions">
                    <button
                      class="d-button d-button-secondary d-button-secondary-small box-shadow-none promo-master__action-button">
                      <i class="d-icon-arrow-left promo-master__action-button-icon"></i>
                      Назад
                    </button>
                    <button
                      class="d-button d-button-secondary d-button-secondary-small box-shadow-none promo-master__action-button">
                      Далее
                      <i class="d-icon-arrow-right promo-master__action-button-icon"></i>
                    </button>
                  </div>

                  <div class="d-divider d-divider--full d-divider--black"></div>

                  <div class="promo-master__footer-content">
                    <div class="promo-master__info-block">
                      <i class="d-icon-lines promo-master__info-block-icon"></i>
                      <p class="promo-master__info-block-text">Отразите в названии суть акции</p>
                    </div>
                    <div class="d-divider d-divider--vertical promo-master__info-block-divider"></div>
                    <div class="promo-master__info-block">
                      <i class="d-icon-percent promo-master__info-block-icon"></i>
                      <p class="promo-master__info-block-text">
                        Дополнительная скидка 5% при покупке МиниМАКС от 5 штук!
                      </p>
                    </div>
                    <div class="d-divider d-divider--vertical promo-master__info-block-divider"></div>
                    <div class="promo-master__info-block">
                      <i class="d-icon-doc-plus promo-master__info-block-icon"></i>
                      <p class="promo-master__info-block-text">Оптовый прайс</p>
                    </div>
                    <div class="d-divider d-divider--vertical promo-master__info-block-divider"></div>
                    <div class="promo-master__description-block">
                      <p class="promo-master__description-block-title">
                        Подробно опишите условия акции, расскажите о вашей продукции
                      </p>
                      <p class="promo-master__description-block-text">
                        Известный европейский бренд 25 лет в России! Высокая маржинальность до 45%! Широкий
                        ассортимент для любого сегмента рынка. Цены крупного опта при любом заказе! 100% контроль цен.
                        Возврат денег за непроданный товар. Широкая рекламная поддержка.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
