<template>
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
                            <p class="d-progress__label promo-modal__progress-label">Для создания акции пройдите 8 из 10
                                шагов</p>
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
                                                    <input type="radio" name="promo-master-radio"
                                                        id="promo-master-radio1" class="d-radio__input" />
                                                </label>
                                                <label for="promo-master-radio1" class="d-radio__label">Отсрочка (по
                                                    умолчанию)</label>
                                            </div>
                                            <div class="d-radio__wrapper">
                                                <label for="promo-master-radio2" class="d-radio">
                                                    <input type="radio" name="promo-master-radio"
                                                        id="promo-master-radio2" class="d-radio__input" />
                                                </label>
                                                <label for="promo-master-radio2" class="d-radio__label">Под
                                                    реализацию</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="promotions__card promotions__card--small promo-master__card">
                                        <div class="promotions__card-header">
                                            <div class="promotions__card-header-left">
                                                <p class="promotions__card-title">
                                                    Срок отсрочки платежа: <span class="promotions__card-title-span">19
                                                        дней</span>
                                                </p>
                                            </div>
                                            <button class="promotions__card-button">
                                                <i class="d-icon-pen2 promotions__card-button-icon"></i>
                                            </button>
                                        </div>
                                        <div class="promotions__card-content">
                                            <div class="promotions__card-values">
                                                <p
                                                    class="promotions__card-text promotions__card-text--bold promotions__card-text--small">
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
                                    <div
                                        class="d-field-container d-field-container--vertical promo-master__upload-header">
                                        <p class="promo-master__subtitle">Загрузка баннера</p>
                                        <p class="d-text">
                                            Загрузите изображение с разрешением 6824х1996, в формате png, jpeg, svg.
                                            Размер
                                            изображения не должен превышать 5 Мбайт .
                                        </p>
                                    </div>
                                    <label class="d-upload promo-master__upload" for="promo-upload">
                                        <input type="file" name="promo-upload" id="promo-upload"
                                            class="d-upload__input" />

                                        <img src="/icons/upload-cloud.svg" alt="Upload icon" class="d-upload__icon"
                                            width="80" height="50" />
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
                                                    <input type="checkbox" name="promoHome" id="promoHome"
                                                        class="d-switch__input" />
                                                    <div class="d-switch__circle"></div>
                                                </label>
                                                <label class="d-switch-button__text" for="promoHome">На главной странице
                                                    закупок</label>
                                            </div>
                                            <div class="d-radio__wrapper">
                                                <label class="d-switch" for="promoInCart">
                                                    <input type="checkbox" name="promoInCart" id="promoInCart"
                                                        class="d-switch__input" />
                                                    <div class="d-switch__circle"></div>
                                                </label>
                                                <label for="promoInCart" class="d-switch-button__text d-radio__label">В
                                                    корзине</label>
                                            </div>
                                            <div class="d-radio__wrapper">
                                                <label class="d-switch" for="promoInCatalog">
                                                    <input type="checkbox" name="promoInCatalog" id="promoInCatalog"
                                                        class="d-switch__input" />
                                                    <div class="d-switch__circle"></div>
                                                </label>
                                                <label for="promoInCatalog"
                                                    class="d-switch-button__text d-radio__label">В каталоге</label>
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
                                        Известный европейский бренд 25 лет в России! Высокая маржинальность до 45%!
                                        Широкий
                                        ассортимент для любого сегмента рынка. Цены крупного опта при любом заказе! 100%
                                        контроль цен.
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
</template>

<script setup lang="ts">

</script>

<style scoped></style>