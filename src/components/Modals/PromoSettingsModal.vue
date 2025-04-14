<template>
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
                                <input type="text" placeholder="Скидка" name="login" class="d-input__field"
                                    data-input-id="login" required />
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
                                <input type="text" placeholder="" name="login" class="d-input__field"
                                    data-input-id="login" required />
                                <button class="d-input__dropdown-button">
                                    <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                                </button>
                            </div>
                            <label for="test-dropdown" class="d-dropdown__label">Скидка от РРЦ: <span
                                    class="inline-block">5.00
                                    %</span></label>
                        </div>
                        <div
                            class="d-field-wrapper d-field-wrapper--small d-field-wrapper--vertical promo-settings__values-value">
                            <label for="test-dropdown" class="d-dropdown__label">Значение</label>
                            <div class="d-field-container d-field-container--long">
                                <div class="d-input d-input--light">
                                    <input type="text" placeholder="" name="login" class="d-input__field"
                                        data-input-id="login" required />
                                </div>
                                <div class="d-input d-input--light">
                                    <input type="text" placeholder="%" name="login" class="d-input__field"
                                        data-input-id="login" required />
                                    <button class="d-input__dropdown-button">
                                        <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                                    </button>
                                </div>
                            </div>
                            <label for="test-dropdown" class="d-dropdown__label">Цена со скидкой: <span
                                    class="inline-block">35
                                    542.05 ₽</span></label>
                        </div>
                    </div>

                    <div class="d-field-container d-field-container--long promo-settings__values">
                        <div
                            class="d-field-wrapper d-field-wrapper--small d-field-wrapper--vertical promo-settings__values-value">
                            <label for="test-dropdown" class="d-dropdown__label">Тип ценообразования</label>
                            <div class="d-input d-input--light">
                                <input type="text" placeholder="Скидка" name="login" class="d-input__field"
                                    data-input-id="login" required />
                                <button class="d-input__dropdown-button">
                                    <i class="d-icon-angle-rounded-bottom d-input__dropdown-button-icon"></i>
                                </button>
                            </div>
                            <div class="d-between">
                                <label for="test-dropdown" class="d-dropdown__label">РРЦ: <span
                                        class="inline-block">23990
                                        ₽</span></label>
                                <label for="test-dropdown" class="d-dropdown__label">Скидка от РРЦ: <span
                                        class="inline-block">23990
                                        ₽</span></label>
                                <label for="test-dropdown" class="d-dropdown__label">Цена со скидкой: <span
                                        class="inline-block">22790.5 ₽</span></label>
                            </div>
                        </div>
                    </div>

                    <div class="d-note promo-settings__note">
                        Цена будет оставаться неизменной, даже при изменении типов цен, РРЦ и любых других параметров
                        товара.
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
</template>

<script setup lang="ts">

</script>

<style scoped></style>