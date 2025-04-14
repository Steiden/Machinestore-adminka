<script setup lang="ts">
</script>

<template>
  <section class="promotions" id="promotions">
    <div class="promotions__top">
      <a class="d-back promotions__top-back">
        <i class="d-icon-arrow d-back__icon"></i>
        <span class="d-back__text hidden-640">Назад</span>
      </a>

      <ul class="d-breadcrumbs">
        <li class="d-breadcrumbs__item">
          <button class="d-breadcrumbs__button">Оптовые продажи</button>
        </li>
        <li class="d-breadcrumbs__item">
          <button class="d-breadcrumbs__button">Оптовые цены</button>
        </li>
        <li class="d-breadcrumbs__item">
          <button class="d-breadcrumbs__button">Акции</button>
        </li>
        <li class="d-breadcrumbs__item d-breadcrumbs__item--active">
          <button class="d-breadcrumbs__button">Насторойка акции</button>
        </li>
      </ul>
    </div>

    <div class="promotions__header">
      <h1 class="d-title promotions__header-title">Настройка акции № 454 324 453</h1>

      <div class="promotions__header-actions">
        <label class="d-switch-button" for="enable-promotion">
          <div class="d-switch">
            <input type="checkbox" name="enable-promotion" id="enable-promotion" class="d-switch__input" />
            <div class="d-switch__circle"></div>
          </div>
          <span class="d-switch-button__text">Включить акцию</span>
        </label>
        <div class="d-divider d-divider--vertical"></div>
        <button class="d-icon-wrapper d-icon-wrapper--big">
          <i class="d-icon-copy promotions__icon"></i>
        </button>
        <div class="d-divider d-divider--vertical"></div>
        <button class="d-icon-wrapper d-icon-wrapper--big">
          <i class="d-icon-trash promotions__icon"></i>
        </button>
      </div>
    </div>

    <div class="promotions__info">
      <div class="promotions__info-title-container">
        <h2 class="promotions__info-title">Мастер создания акций</h2>
        <p class="promotions__info-description">Создайте акцию в несколько этапов</p>
      </div>

      <div class="d-progress">
        <p class="d-progress__label">Пройдено этапов:</p>
        <p class="d-progress__value">78%</p>
        <div class="d-progress__line"></div>
      </div>

      <div class="promotions__info-actions">
        <div class="contents promotions__info-additional">
          <label class="d-switch-button" for="enable-promotion2">
            <div class="d-switch">
              <input type="checkbox" name="enable-promotion2" id="enable-promotion2" class="d-switch__input" />
              <div class="d-switch__circle"></div>
            </div>
            <span class="d-switch-button__text">Включить акцию</span>
          </label>
          <div class="d-divider d-divider--vertical"></div>
        </div>
        <button class="d-icon-wrapper d-icon-wrapper--black d-icon-wrapper--big promotions__info-edit">
          <i class="d-icon-pen2 promotions__icon"></i>
        </button>
        <div class="d-divider d-divider--vertical"></div>
        <button class="d-icon-wrapper d-icon-wrapper--big promotions__info-add">
          <i class="d-icon-plus promotions__icon promotions__icon--plus"></i>
        </button>
      </div>
    </div>

    <div class="promotions__content">
      <div class="dart-row">
        <div class="d-col d-col-9">
          <div class="promotions__card">
            <div class="promotions__card-header">
              <div class="promotions__card-header-left">
                <i class="d-icon-lines promotions__card-icon"></i>
                <p class="promotions__card-title">Контент акции</p>
              </div>
              <button class="promotions__card-button">
                <i class="d-icon-pen2 promotions__card-button-icon"></i>
              </button>
            </div>
            <div class="promotions__card-content">
              <div class="promotions__card-values">
                <div class="promotions__card-value-container">
                  <span class="promotions__card-label">Название акции:</span>
                  <p class="promotions__card-value promotions__card-value--bold">4+1 на дрели</p>
                </div>
                <div class="promotions__card-value-container">
                  <span class="promotions__card-label">Описание акции:</span>
                  <p class="promotions__card-value">
                    При покупке 5-ти УШМ (с текущей скидкой клиента) вы получаете 25 дисков по металлу
                    бесплатно (выгода достигается за счет скидки на инструмент). При покупке 5-ти УШМ (с
                    текущей скидкой клиента) вы получаете 25 дисков по металлу бесплатно. УШМ (с текущей
                    скидкой клиента) вы получаете 25 дисков по металлу бесплатно (выгода достигается за счет
                    скидки на инструмент). А тут я добавила текста чтобы было так по количеству символов и еще
                    тут...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-col d-col-15">
          <div class="promotions__card">
            <div class="promotions__card-header">
              <div class="promotions__card-header-left">
                <i class="d-icon-picture promotions__card-icon"></i>
                <p class="promotions__card-title">Баннер акции</p>
              </div>
              <button class="promotions__card-button">
                <i class="d-icon-pen2 promotions__card-button-icon"></i>
              </button>
            </div>
            <div class="promotions__card-content">
              <div class="promotions__card-banner">
                <div class="promotions__card-banner-message">
                  <i class="d-icon-danger promotions__card-banner-message-icon"></i>
                  <p class="promotions__card-banner-message-title">Баннер не показывается в рекламе</p>
                </div>
                <img src="/images/banner.png" alt="Banner image" class="promotions__card-banner-img" />
              </div>
              <div class="promotions__card-value-container">
                <span class="promotions__card-label">Места размещения баннера:</span>
                <div class="d-badge__container">
                  <div class="d-badge">Главная страница</div>
                  <div class="d-badge">Главная страница</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dart-row">
        <div class="d-col d-col-9">
          <div class="promotions__card-container">
            <div class="promotions__card">
              <div class="promotions__card-header">
                <div class="promotions__card-header-left">
                  <i class="d-icon-truck promotions__card-icon"></i>
                  <p class="promotions__card-title">Условия акции</p>
                </div>
                <button class="promotions__card-button">
                  <i class="d-icon-pen2 promotions__card-button-icon"></i>
                </button>
              </div>
              <div class="promotions__card-content">
                <div class="promotions__card-values">
                  <div class="promotions__card-value-container">
                    <span class="promotions__card-label">Оплата доставки:</span>
                    <p class="promotions__card-value promotions__card-value--bold">
                      Доставка за счет покупателя
                    </p>
                  </div>
                  <div class="promotions__card-value-container">
                    <span class="promotions__card-label">Срок доставки:</span>
                    <p class="promotions__card-value promotions__card-value--bold">Рассчитывается ТК</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="promotions__card">
              <div class="promotions__card-header">
                <div class="promotions__card-header-left">
                  <i class="d-icon-wallet promotions__card-icon"></i>
                  <p class="promotions__card-title">Условия оплаты</p>
                </div>
                <button class="promotions__card-button">
                  <i class="d-icon-pen2 promotions__card-button-icon"></i>
                </button>
              </div>
              <div class="promotions__card-content">
                <div class="promotions__card-values">
                  <div class="promotions__card-info">
                    <div class="promotions__card-value-container">
                      <span class="promotions__card-label">Под реализацию</span>
                      <p class="promotions__card-value promotions__card-value--bold">120 дней</p>
                    </div>
                    <button class="promotions__card-info-button">
                      <i class="d-icon-info promotions__card-info-icon"></i>
                    </button>
                  </div>
                  <div class="d-fractions">
                    <div class="d-fractions__item">
                      <p class="d-fractions__item-text">Предоплата</p>
                      <div class="d-fractions__item-block" style="width: 36px"></div>
                      <p class="d-fractions__item-text">20%</p>
                    </div>
                    <div class="d-fractions__item">
                      <p class="d-fractions__item-text">30 дней</p>
                      <div class="d-fractions__item-block" style="width: 32px"></div>
                      <p class="d-fractions__item-text">30%</p>
                    </div>
                    <div class="d-fractions__item d-fractions__item--center">
                      <p class="d-fractions__item-text">145 дней</p>
                      <div class="d-fractions__item-block" style="width: 287px"></div>
                      <p class="d-fractions__item-text">50%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-col d-col-15">
          <div class="promotions__card">
            <div class="promotions__card-header">
              <div class="promotions__card-header-left">
                <i class="d-icon-user-star promotions__card-icon"></i>
                <p class="promotions__card-title">Аудитория акции</p>
              </div>
              <button class="promotions__card-button">
                <i class="d-icon-pen2 promotions__card-button-icon"></i>
              </button>
            </div>
            <div class="promotions__card-content">
              <div class="promotions__card-info promotions__card-info--fit mb-24">
                <p class="promotions__card-info-text">Скрыто у клиентов с индивидуальными условиями</p>
                <button class="promotions__card-info-button">
                  <i class="d-icon-info promotions__card-info-icon"></i>
                </button>
              </div>

              <div class="promotions__card-value-container">
                <span class="promotions__card-label mb-16">По географии</span>
                <div class="d-badge__container">
                  <div class="d-badge">
                    <i class="d-icon-toggles d-badge__icon"></i>
                    Все типы компаний
                  </div>
                </div>
              </div>

              <div class="d-divider d-divider--full mt-16 mb-8"></div>

              <div class="promotions__card-value-container">
                <span class="promotions__card-label mb-16">Типы компаний</span>
                <div class="d-badge__container">
                  <div class="d-badge">
                    <i class="d-icon-toggles d-badge__icon"></i>
                    Все типы компаний
                  </div>
                </div>
              </div>

              <div class="d-divider d-divider--full mt-16 mb-8"></div>

              <div class="promotions__card-value-container">
                <span class="promotions__card-label mb-16">Отдельные компании</span>
                <div class="d-badge__container">
                  <div class="d-badge">
                    <div class="d-badge__img-fallback"></div>
                    КЛС-Трейд
                  </div>
                  <div class="d-badge">
                    <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                    Alteco
                  </div>
                  <div class="d-badge">
                    <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                    МСТ
                  </div>
                  <div class="d-badge">
                    <div class="d-badge__img-fallback"></div>
                    Спец Проф Оборудование
                  </div>
                  <div class="d-badge">
                    <i class="d-icon-location d-badge__icon"></i>
                    Члябинская область
                  </div>
                  <div class="d-badge">
                    <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                    КЛС-Трейд
                  </div>
                  <div class="d-badge">
                    <div class="d-badge__img-fallback"></div>
                    МСТ
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dart-row">
        <div class="d-col d-col-24">
          <div class="promotions__card">
            <div class="promotions__card-header">
              <div class="promotions__card-header-left">
                <i class="d-icon-check-list promotions__card-icon"></i>
                <p class="promotions__card-title">Условия участия в акции</p>

                <div class="d-category__container ml-44">
                  <div class="d-category">Негативная акция</div>
                  <div class="d-category">Акция доступна только в предложениях</div>
                </div>
              </div>
              <button class="promotions__card-button">
                <i class="d-icon-pen2 promotions__card-button-icon"></i>
              </button>
            </div>
            <div class="promotions__card-content">
              <div class="promotions__card-block-wrapper">
                <div class="promotions__card-value-container promotions__card-block">
                  <span class="promotions__card-label">Требования к заказу</span>
                  <div class="promotions__card-block-inner">
                    <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                      Минимальная общая сумма заказа товаров акции
                    </p>
                    <p class="promotions__card-label promotions__card-block-description">
                      Общая сумма товаров акции должна быть не менее указанной суммы.
                    </p>
                    <p class="promotions__card-value promotions__card-value--bold promotions__card-block-value">
                      0 ₽
                    </p>
                  </div>
                </div>
                <div class="d-divider d-divider--vertical d-divider--full promotions__card-block-divider"></div>
                <div class="promotions__card-value-container promotions__card-block">
                  <span class="promotions__card-label">&nbsp;</span>
                  <div class="promotions__card-block-inner">
                    <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                      Минимальное количество SKU акции
                    </p>
                    <p class="promotions__card-label promotions__card-block-description">
                      В заказе должно быть не менее заданного количества SKU товаров акции.
                    </p>
                    <p class="promotions__card-value promotions__card-value--bold promotions__card-block-value">
                      Любое
                    </p>
                  </div>
                </div>
                <div class="d-divider d-divider--vertical d-divider--full promotions__card-block-divider"></div>
                <div class="promotions__card-value-container promotions__card-block">
                  <span class="promotions__card-label">&nbsp;</span>
                  <div class="promotions__card-block-inner">
                    <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                      Минимально общее количество товаров
                    </p>
                    <p class="promotions__card-label promotions__card-block-description">
                      В заказе должно быть не менее заданного общего количества товаров акции.
                    </p>
                    <p class="promotions__card-value promotions__card-value--bold promotions__card-block-value">
                      Любое
                    </p>
                  </div>
                </div>
                <div class="d-divider d-divider--vertical d-divider--full promotions__card-block-divider"></div>
                <div class="promotions__card-value-container promotions__card-block">
                  <span class="promotions__card-label">&nbsp;</span>
                  <div class="promotions__card-block-container">
                    <div class="promotions__card-block-inner grow-0">
                      <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                        Совместимость
                      </p>
                      <p class="promotions__card-label promotions__card-block-description">
                        С какой акцией может применяться совместно
                      </p>
                    </div>
                    <div class="promotions__card-block-inner">
                      <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                        Совместима со всеми акциями
                      </p>
                      <p class="promotions__card-label promotions__card-block-description"></p>
                      <button class="d-button d-button-tertiary promotions__card-block-button">
                        <i class="d-icon-trade promotions__card-block-button-icon"></i>
                        Совместимость акций
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  class="d-divider d-divider--vertical d-divider--full d-divider--bold promotions__card-block-divider">
                </div>
                <div class="promotions__card-value-container promotions__card-block">
                  <span class="promotions__card-label">&nbsp;</span>
                  <div class="promotions__card-block-container">
                    <div class="promotions__card-block-inner grow-0">
                      <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                        Режим совместимости
                      </p>
                      <p class="promotions__card-label promotions__card-block-description">
                        Как условия акций сочетаются
                      </p>
                    </div>
                    <div class="promotions__card-block-inner">
                      <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                        Складываются
                      </p>
                      <p class="promotions__card-label promotions__card-block-description">
                        Процент скидки сложиться и отнимется от цены. Отсрочка сложится.
                      </p>
                      <button class="d-button d-button-tertiary promotions__card-block-button">
                        <i class="d-icon-trade promotions__card-block-button-icon"></i>
                        Совместимость акций
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dart-row">
        <div class="d-col d-col-24">
          <div class="promotions__card products__card">
            <div class="promotions__card-header">
              <div class="promotions__card-header-left">
                <i class="d-icon-cube promotions__card-icon"></i>
                <p class="promotions__card-title">Товары и скидки</p>
              </div>
              <button class="promotions__card-button">
                <i class="d-icon-pen2 promotions__card-button-icon"></i>
              </button>
            </div>
            <div class="promotions__card-content products__card-content">
              <div class="promotions__card-warehouse">
                <div class="promotions__card-value-container promotions__card-warehouse-header">
                  <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                    Склады
                  </p>
                  <span class="promotions__card-label">Укажите скалады, на товары которых распространяется акция</span>
                </div>
                <div class="promotions__card-warehouse-settings">
                  <div class="d-field-container d-field-container--vertical">
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="warehouse1">
                        <input type="checkbox" name="warehouse1" id="warehouse1" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="warehouse1" class="d-switch__label">Все склады</label>
                    </div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="warehouse2">
                        <input type="checkbox" name="warehouse2" id="warehouse2" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="warehouse2" class="d-switch__label">ООО МСТ, г Химки, ул, Ленинградская д. 29</label>
                    </div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="warehouse3">
                        <input type="checkbox" name="warehouse3" id="warehouse3" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="warehouse3" class="d-switch__label">ООО МСТ, г Химки, ул, Ленинградская д. 29</label>
                    </div>
                  </div>
                  <div class="d-field-container d-field-container--vertical">
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="warehouse4">
                        <input type="checkbox" name="warehouse4" id="warehouse4" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="warehouse4" class="d-switch__label">ООО МСТ, г Химки, ул, Ленинградская д. 29</label>
                    </div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="warehouse5">
                        <input type="checkbox" name="warehouse5" id="warehouse5" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="warehouse5" class="d-switch__label">ООО МСТ, г Химки, ул, Ленинградская д. 29</label>
                    </div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="warehouse6">
                        <input type="checkbox" name="warehouse6" id="warehouse6" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="warehouse6" class="d-switch__label">ООО МСТ, г Химки, ул, Ленинградская д. 29</label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="d-divider d-divider--full d-divider--semibold d-divider--black promotions__card-warehouse-divider">
              </div>

              <div class="promotions__card-warehouse promotions__card-warehouse-header-container">
                <div class="promotions__card-value-container promotions__card-warehouse-header">
                  <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                    Товары
                  </p>
                  <span class="promotions__card-label">Загрузите список товаров и установите скидки, которые получит
                    клиент при выполнении
                    условий акции</span>
                </div>
                <form class="d-search d-search--alt promotions__card-warehouse-search">
                  <i class="d-icon-search-big d-search__icon promotions__card-warehouse-search-icon"></i>
                  <input type="text" placeholder="Найти у выбранных поставщиков" class="d-search__field" />
                  <button type="button"
                    class="d-button d-button-primary d-button-primary-small box-shadow-none d-search__button">
                    Добавить товар
                  </button>

                  <ul class="d-search__suggestions">
                    <!-- <li class="d-search__suggestion">Россия, Москва, Большой Предтеченский переулок, 13с4</li>
															<li class="d-search__suggestion">Россия, Москва, Большой Предтеченский переулок, 13с4</li>
															<li class="d-search__suggestion">Россия, Москва, Большой Предтеченский переулок, 13с4</li>
															<li class="d-search__suggestion">Россия, Москва, Большой Предтеченский переулок, 13с4</li> -->
                  </ul>
                </form>
              </div>

              <div class="d-table__wrapper promotions__card-products">
                <table class="d-table">
                  <thead class="d-table__head">
                    <tr class="d-table__row">
                      <th class="d-table__head-col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--white" id="checkbox1">
                            <input type="checkbox" name="checkbox1" id="checkbox1" class="d-radio__input" />
                          </label>
                        </div>
                      </th>
                      <th class="d-table__head-col" style="width: 20%">Товар</th>
                      <th class="d-table__head-col">РРЦ</th>
                      <th class="d-table__head-col">Скидка</th>
                      <th class="d-table__head-col">Тип ценообразования</th>
                      <th class="d-table__head-col">Цена со скидкой за шт.</th>
                      <th class="d-table__head-col">Минимальное количество</th>
                      <th class="d-table__head-col">Максимальное количество</th>
                      <th class="d-table__head-col">Кратность</th>
                      <th class="d-table__head-col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover text-white">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="d-table__body promotions__product-card">
                    <tr class="d-table__row">
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                          <button
                            class="d-button d-button-tertiary d-button-tertiary-small product-table-card__discount-button">
                            <i class="d-icon-mixer product-table-card__discount-button-icon"></i>
                            Настроить
                          </button>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                          <button
                            class="d-button d-button-tertiary d-button-tertiary-small product-table-card__discount-button">
                            <i class="d-icon-mixer product-table-card__discount-button-icon"></i>
                            Настроить
                          </button>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                          <button
                            class="d-button d-button-tertiary d-button-tertiary-small product-table-card__discount-button">
                            <i class="d-icon-mixer product-table-card__discount-button-icon"></i>
                            Настроить
                          </button>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="d-table__footer">
                  <div class="d-table__footer-left">
                    <div class="d-table__mark">Отмечено 0 из 3</div>
                    <div class="d-divider d-divider--vertical d-divider--big d-divider--black"></div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="products1">
                        <input type="checkbox" name="products1" id="products1" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="products1" class="d-switch__label">Выбрать все элементы на всех страницах</label>
                    </div>
                  </div>
                  <div class="d-table__footer-right">
                    <ul class="d-pagination">
                      <li class="d-pagination__item">1</li>
                      <li class="d-pagination__item">2</li>
                      <li class="d-pagination__item">3</li>
                      <li class="d-pagination__item d-pagination__item--active">4</li>
                      <li class="d-pagination__item">+</li>
                    </ul>
                    <button class="d-select">
                      <span class="d-select__title">Задать вручную</span>
                      <i class="d-icon-angle-rounded-bottom d-select__arrow"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="d-divider d-divider--black d-divider--full promotions__card-products-divider"></div>

              <div class="promotions__card-warehouse">
                <div class="promotions__card-value-container promotions__card-warehouse-header">
                  <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                    Коллекции
                  </p>
                  <span class="promotions__card-label">Загрузите список товаров и установите скидки, которые получит
                    клиент при выполнении
                    условий акции</span>
                </div>
                <button class="d-button d-button-primary promotions__card-block-button promotions__card-collection-add">
                  <i class="d-icon-plus promotions__card-block-button-icon promotions__card-collection-add-icon"></i>
                  Добавить коллекцию
                </button>
              </div>
              <div class="promotions__card-collection-header">
                <h2 class="promotions__card-title">Коллекция “Купить слона”№345 43</h2>
                <div class="d-divider d-divider--vertical promotions__card-collection-header-divider"></div>
                <button class="d-icon-wrapper d-icon-wrapper--big">
                  <i class="d-icon-trash"></i>
                </button>
              </div>

              <div class="d-tab__wrapper promotions__card-collection-tabs">
                <div class="d-tab__container">
                  <!-- NOTE: Порядок табов обратный -->
                  <button class="d-tab">Оснастка Интерскол (34332)</button>
                  <button class="d-tab">Оснастка Интерскол (34332)</button>
                  <button class="d-tab d-tab--active">Основная продукция интерскол (34332)</button>
                </div>
              </div>

              <div
                class="d-field-container d-field-container--vertical d-field-container--long promotions__card-collection-search">
                <p class="promotions__card-text">Поиск товаров по коллекции</p>
                <form class="d-search d-search--alt2">
                  <input type="text" placeholder="Название, артикул, бренд, тег, категория" class="d-search__field" />
                  <button type="submit" class="d-search__icon-button">
                    <i class="d-icon-search-big"></i>
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

              <div class="d-table__wrapper promotions__card-products">
                <table class="d-table">
                  <thead class="d-table__head">
                    <tr class="d-table__row">
                      <th class="d-table__head-col d-table__head-col--big">
                        <div class="flex-center">
                          <label class="d-radio d-radio--white" id="checkbox1">
                            <input type="checkbox" name="checkbox1" id="checkbox1" class="d-radio__input" />
                          </label>
                        </div>
                      </th>
                      <th class="d-table__head-col d-table__head-col--big" style="width: 20%">Товар</th>
                      <th class="d-table__head-col d-table__head-col--big">РРЦ</th>
                      <th class="d-table__head-col d-table__head-col--big">
                        Скидка
                        <button
                          class="d-button d-button-tertiary d-button-tertiary-small product-table-card__discount-button product-table-card__discount-button--table mt-4">
                          <i class="d-icon-mixer product-table-card__discount-button-icon"></i>
                          Настроить
                        </button>
                      </th>
                      <th class="d-table__head-col d-table__head-col--big">Тип ценообразования</th>
                      <th class="d-table__head-col d-table__head-col--big">Цена со скидкой за шт.</th>
                      <th class="d-table__head-col d-table__head-col--big">Минимальное количество</th>
                      <th class="d-table__head-col d-table__head-col--big">Максимальное количество</th>
                      <th class="d-table__head-col d-table__head-col--big">Кратность</th>
                      <th class="d-table__head-col d-table__head-col--big">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover text-white">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="d-table__body promotions__product-card">
                    <tr class="d-table__row">
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="d-table__footer">
                  <div class="d-table__footer-left">
                    <div class="d-table__mark">Отмечено 0 из 3</div>
                    <div class="d-divider d-divider--vertical d-divider--big d-divider--black"></div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="products2">
                        <input type="checkbox" name="products2" id="products2" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="products2" class="d-switch__label">Выбрать все элементы на всех страницах</label>
                    </div>
                  </div>
                  <div class="d-table__footer-right">
                    <ul class="d-pagination">
                      <li class="d-pagination__item">1</li>
                      <li class="d-pagination__item">2</li>
                      <li class="d-pagination__item d-pagination__item--active">3</li>
                      <li class="d-pagination__item">4</li>
                      <li class="d-pagination__item">+</li>
                    </ul>
                    <button class="d-select">
                      <span class="d-select__title">Массовые действия</span>
                      <i class="d-icon-angle-rounded-bottom d-select__arrow"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div class="d-divider d-divider--black d-divider--full promotions__card-products-divider"></div>

              <div class="promotions__card-warehouse promotions__complects-header">
                <div class="promotions__card-value-container promotions__card-warehouse-header">
                  <p class="promotions__card-value promotions__card-value--bold promotions__card-block-title">
                    Комлпекты
                  </p>
                  <span class="promotions__card-label">Загрузите список товаров и установите скидки, которые получит
                    клиент при выполнении
                    условий акции</span>
                </div>

                <div class="promotions__complects-header-right">
                  <button class="d-button d-button-secondary promotions__complects-search-button">
                    <i class="d-icon-search-big"></i>
                    Найти товар
                  </button>
                  <button
                    class="d-button d-button-primary promotions__card-block-button promotions__card-collection-add">
                    <i class="d-icon-plus promotions__card-block-button-icon promotions__card-collection-add-icon"></i>
                    Создать комплект
                  </button>
                  <div class="d-divider d-divider--vertical d-divider--big"></div>
                  <button class="d-icon-wrapper d-icon-wrapper--big">
                    <i class="d-icon-pen2"></i>
                  </button>
                </div>
              </div>

              <div class="d-table__wrapper promotions__card-products">
                <table class="d-table">
                  <thead class="d-table__head">
                    <tr class="d-table__row">
                      <th class="d-table__head-col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--white" id="checkbox1">
                            <input type="checkbox" name="checkbox1" id="checkbox1" class="d-radio__input" />
                          </label>
                        </div>
                      </th>
                      <th class="d-table__head-col" style="width: 20%">Товар</th>
                      <th class="d-table__head-col">РРЦ</th>
                      <th class="d-table__head-col">Скидка</th>
                      <th class="d-table__head-col">Тип ценообразования</th>
                      <th class="d-table__head-col">Цена со скидкой за шт.</th>
                      <th class="d-table__head-col">Минимальное количество</th>
                      <th class="d-table__head-col">Максимальное количество</th>
                      <th class="d-table__head-col">Кратность</th>
                      <th class="d-table__head-col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover text-white">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="d-table__body promotions__product-card">
                    <tr class="d-table__row">
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                      <td class="d-table__col"></td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                          <button
                            class="d-button d-button-tertiary d-button-tertiary-small product-table-card__discount-button">
                            <i class="d-icon-mixer product-table-card__discount-button-icon"></i>
                            Настроить
                          </button>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr class="d-table__row">
                      <td class="d-table__col">
                        <div class="flex-center">
                          <label class="d-radio d-radio--black" id="checkbox2">
                            <input type="checkbox" name="checkbox2" id="checkbox2" class="d-radio__input" />
                          </label>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="product-table-card">
                          <p class="product-table-card__title">
                            Аккумуляторная дрель-шуруповерт ИНТЕРСКОЛ ДА-10/14.4Л2
                          </p>
                          <p class="product-table-card__article">Арт: 844337</p>
                          <div class="d-badge d-badge--small">
                            <img src="/icons/spo-logo.svg" alt="" class="d-badge__img" />
                            МСТ
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="d-table__col-inner">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            2 500.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p
                            class="promotions__card-text promotions__card-text--bold product-table-card__discount product-table-card__value">
                            30% ₽
                          </p>
                          <button
                            class="d-button d-button-tertiary d-button-tertiary-small product-table-card__discount-button">
                            <i class="d-icon-mixer product-table-card__discount-button-icon"></i>
                            Настроить
                          </button>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center flex-center--vertical">
                          <p class="promotions__card-text promotions__card-text--bold">Скидка</p>
                          <p class="product-table-card__text">по формуле</p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <p class="promotions__card-text promotions__card-text--bold product-table-card__value">
                            1 750.00 ₽
                          </p>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <div class="d-counter" data-counter>
                            <button class="d-counter__button" data-counter-button="decrement">
                              <i class="d-icon-minus d-counter__button-icon"></i>
                            </button>
                            <input class="d-counter__input" type="text" name="test-counter" id="test-counter" value="1"
                              data-counter-input />
                            <button class="d-counter__button" data-counter-button="increment">
                              <i class="d-icon-plus d-counter__button-icon"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="d-table__col">
                        <div class="flex-center">
                          <button class="d-icon-wrapper d-icon-wrapper--big d-icon-wrapper--no-hover">
                            <i class="d-icon-trash d-table__icon"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="d-table__footer">
                  <div class="d-table__footer-left">
                    <div class="d-table__mark">Отмечено 0 из 3</div>
                    <div class="d-divider d-divider--vertical d-divider--big d-divider--black"></div>
                    <div class="d-field-wrapper">
                      <label class="d-switch" for="products3">
                        <input type="checkbox" name="products3" id="products3" class="d-switch__input" />
                        <div class="d-switch__circle"></div>
                      </label>
                      <label for="products3" class="d-switch__label">Выбрать все элементы на всех страницах</label>
                    </div>
                  </div>
                  <div class="d-table__footer-right">
                    <ul class="d-pagination">
                      <li class="d-pagination__item">1</li>
                      <li class="d-pagination__item">2</li>
                      <li class="d-pagination__item">3</li>
                      <li class="d-pagination__item d-pagination__item--active">4</li>
                      <li class="d-pagination__item">+</li>
                    </ul>
                    <button class="d-select">
                      <span class="d-select__title">Массовые действия</span>
                      <i class="d-icon-angle-rounded-bottom d-select__arrow"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
