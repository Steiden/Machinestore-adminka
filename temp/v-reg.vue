<template>
    <div>
        <div class="analytics_reg">
            <form class="form-signup" @submit.prevent="formSubmit" autocomplete="false">
                <div class="logo text-center">
                    <img src="../../assets/images/logo.svg" alt="" width="200" />
                </div>

                <div v-if="!this.regIsSuccess" class="std-auth__input-container">
                    <div :class="{ 'has-error': v$.form.login.$error }">
                        <FloatLabel>
                            <input
                                ref="loginInput"
                                type="text"
                                id="login"
                                placeholder="Логин"
                                class="dart-form-control std-auth__input"
                                v-model="form.login"
                                autocomplete="off" />
                            <div v-if="v$.form.login.$error" class="error-message">
                                <span v-if="!v$.form.login.required">Пожалуйста, введите логин.</span>
                                <span v-else-if="v$.form.login.minLength">Логин должен содержать минимум 3 символа.</span>
                                <span v-else-if="v$.form.login.maxLength">Логин должен содержать максимум 30 символов.</span>
                            </div>
                        </FloatLabel>
                    </div>

                    <div :class="{ 'has-error': v$.form.password.$error }">
                        <FloatLabel>
                            <div class="relative">
                                <input
                                    :type="showPassword1 ? 'text' : 'password'"
                                    ref="passwordInput"
                                    id="password"
                                    placeholder="Пароль"
                                    class="dart-form-control std-auth__input"
                                    v-model="form.password"
                                    autocomplete="new-password" />
                                <button type="button" @click="togglePasswordVisibility1" class="password-toggle">
                                    <i :class="showPassword1 ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                                </button>
                            </div>
                            <div v-if="v$.form.password.$error" class="error-message">
                                <span v-if="!v$.form.password.required">Пожалуйста, введите пароль.</span>
                                <span v-else-if="v$.form.password.minLength">Пароль должен содержать минимум 6 символов.</span>
                            </div>
                        </FloatLabel>
                    </div>

                    <div :class="{ 'has-error': v$.form.passwordConfirm.$error }">
                        <FloatLabel>
                            <div class="relative">
                                <input
                                    :type="showPassword2 ? 'text' : 'password'"
                                    id="passwordConfirm"
                                    placeholder="Подтверждение пароля"
                                    class="dart-form-control std-auth__input"
                                    v-model="form.passwordConfirm"
                                    autocomplete="new-password" />
                                <button type="button" @click="togglePasswordVisibility2" class="password-toggle">
                                    <i :class="showPassword2 ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                                </button>
                            </div>
                            <div v-if="v$.form.passwordConfirm.$error" class="error-message">
                                <span>Пожалуйста, подтвердите пароль. Пароли должны совпадать.</span>
                            </div>
                        </FloatLabel>
                    </div>
                </div>

                <div v-if="!this.regIsSuccess" class="std-auth__input-container-wrapper">
                    <span class="std-auth__input-label">Данные контактного лица</span>

                    <div :class="{ 'has-error': v$.form.name.$error }">
                        <Autocomplete
                            ref="nameInput"
                            name="name"
                            id="name"
                            placeholder="ФИО контактного лица"
                            class="dart-form-control std-auth__input"
                            type="fio"
                            selectionType="single"
                            v-model="form.name"
                            @setSelection="setName"
                            autocomplete="off" />
                        <div v-if="v$.form.name.$error" class="error-message">
                            <span v-if="!v$.form.name.required">Пожалуйста, введите ФИО.</span>
                            <span v-else-if="v$.form.name.minLength">ФИО должно содержать минимум 3 символа.</span>
                        </div>
                    </div>

                    <div :class="{ 'has-error': v$.form.telephone.$error }">
                        <input
                            v-imask="mask"
                            type="tel"
                            id="telephone"
                            placeholder="Телефон"
                            class="dart-form-control std-auth__input"
                            v-model="form.telephone"
                            @input="form.telephone = normalizePhone(form.telephone)"
                            autocomplete="off" />
                        <div v-if="v$.form.telephone.$error" class="error-message">
                            <span v-if="!v$.form.telephone.required">Пожалуйста, введите номер телефона.</span>
                            <span v-else-if="v$.form.telephone.minLength">Введите корректный номер телефона.</span>
                        </div>
                    </div>

                    <div :class="{ 'has-error': v$.form.email.$error }">
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            class="dart-form-control std-auth__input"
                            v-model="form.email"
                            autocomplete="off" />
                        <div v-if="v$.form.email.$error" class="error-message">
                            <span v-if="!v$.form.email.required">Пожалуйста, введите email.</span>
                            <span v-else-if="v$.form.email.email">Введите корректный email.</span>
                        </div>
                    </div>
                </div>

                <div v-if="!this.regIsSuccess" class="std-auth__input-container-wrapper">
                    <span class="std-auth__input-label">Данные компании</span>

                    <div :class="{ 'has-error': v$.form.org.inn.validInn.$response != true && v$.form.org.inn.$dirty }">
                        <!-- <input
                            maxlength="12"
                            ref="innInput"
                            name="inn"
                            id="inn"
                            placeholder="ИНН"
                            class="dart-form-control std-auth__input"
                            v-model="form.org.inn"
                        /> -->
                        <Autocomplete
                            ref="innInput"
                            name="inn"
                            id="inn"
                            placeholder="ИНН"
                            class="dart-form-control std-auth__input"
                            type="company"
                            selectionType="single"
                            v-model="form.org.inn"
                            @setSelection="setCompany"
                        />
                        <!-- {{ v$.form.org.inn.validInn.$response }} -->
                        <div v-if="v$.form.org.inn.validInn.$response != true && v$.form.org.inn.$dirty" class="error-message">
                            <span>{{ v$.form.org.inn.validInn.$response || 'Некорректный ИНН' }}</span>
                        </div>
                    </div>

                    <div :class="{ 'has-error': v$.form.org.name.$error }">
                        <input
                            type="text"
                            id="org_name"
                            placeholder="Наименование организации"
                            class="dart-form-control std-auth__input"
                            v-model="form.org.name"
                            autocomplete="off"
                        />
                        <div v-if="v$.form.org.name.$error" class="error-message">
                            <span v-if="!v$.form.org.name.required">Пожалуйста, введите наименование организации.</span>
                            <span v-else-if="v$.form.org.name.minLength">Наименование должно содержать минимум 3 символа.</span>
                        </div>
                    </div>

                    <div class="std-auth__input-container">
                        <span class="std-auth__input-label">Адрес доставки</span>
                        <AddAddress
                            v-for="(address, index) in form.delivery_addresses"
                            :key="index"
                            :index="index"
                            v-model="form.delivery_addresses[index]"
                        />
                        <div class="std-auth__actions-container">
                            <button
                                v-if="form.delivery_addresses.length > 1"
                                class="dart-btn dart-btn-secondary dart-btn-block align-items-center flex justify-content-center std-auth__button std-auth__button--secondary"
                                type="button"
                                @click="() => this.form.delivery_addresses.pop()">
                                <span>Удалить</span>
                            </button>
                            <button
                                class="dart-btn dart-btn-secondary dart-btn-block align-items-center flex justify-content-center std-auth__button std-auth__button--secondary"
                                type="button"
                                @click="() => this.form.delivery_addresses.push({ value: '' })">
                                <span>Добавить адрес</span>
                                <i class="pi pi-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="std-auth__button-container">
                    <button v-if="!this.regIsSuccess" :disabled="this.loading" class="dart-btn dart-btn-primary dart-btn-block align-items-center flex justify-content-center std-auth__button" type="submit">
                        <i v-if="this.loading" class="pi pi-spin pi-spinner" style="font-size: 14px"></i>
                        <span>Зарегистрироваться</span>
                    </button>
                    
                    <!-- {{ this.form.telephone }} -->

                    <span v-if="this.regIsSuccess" class="std-auth__span">Регистрация прошла успешно!</span>
                    <button @click="() => { this.setRegForm(); this.regIsSuccess = false; }" class="dart-btn dart-btn-secondary-outline dart-btn-block align-items-center flex justify-content-center std-auth__button std-auth__button--secondary" type="button">
                        <span>Войти</span>
                    </button>
                    <p class="kenost-policy">Нажимая кнопку "Зарегистрироваться", Вы соглашаетесь с <a targer="_blank" href="https://mst.tools/politika-konfidenczialnosti.html">Политика конфиденциальности</a> и обработкой персональных данных</p>

                </div>
            </form>
        </div>
    </div>

</template>


<script>
import Autocomplete from '../Autocomplete.vue';
import InputText from 'primevue/inputtext';
import AddAddress from './AddAddress.vue';
import { IMaskDirective } from 'vue-imask';
import Toast from 'primevue/toast';
import { sendMetrik } from '../../utils/metrika';
import FloatLabel from '../FloatLabel.vue';
import { required, minLength, maxLength, helpers, email } from '@vuelidate/validators';
import useVuelidate from '@vuelidate/core';

export default {
    name: 'reg-form',
    data() {
        return {
            showPassword1: false,
            showPassword2: false,
            regIsSuccess: false,
            loading: false,
            form: {
                login: null,
                password: '',
                passwordConfirm: '',
                telephone: '',
                email: '',
                org: {
                    name: '',
                    inn: '',
                    ogrn: '',
                    opf: ''
                },
                contact: {},
                delivery_addresses: [{ value: '' }]
            },
            mask: {
                mask: '+{7} (000) 000-00-00',
                lazy: false
            }
        };
    },
    setup() {
        return { v$: useVuelidate() };
    },
    validations() {
        // Функция валидации ИНН
        function validateInn(inn) {
            const error = { code: null, message: '' };
            let result = false;

            if (typeof inn === 'number') {
                inn = inn.toString();
            } else if (typeof inn !== 'string') {
                inn = '';
            }

            if (!inn.length) {
                error.code = 1;
                error.message = 'Пожалуйста, заполните ИНН';
            } else if (/[^0-9]/.test(inn)) {
                error.code = 2;
                error.message = 'ИНН может состоять только из цифр';
            } else if ([10, 12].indexOf(inn.length) === -1) {
                error.code = 3;
                error.message = 'ИНН может состоять только из 10 или 12 цифр';
            } else {
                const checkDigit = function (inn, coefficients) {
                    let n = 0;
                    for (let i in coefficients) {
                        n += coefficients[i] * inn[i];
                    }
                    return parseInt(n % 11 % 10);
                };

                switch (inn.length) {
                    case 10:
                        const n10 = checkDigit(inn, [2, 4, 10, 3, 5, 9, 4, 6, 8]);
                        if (n10 === parseInt(inn[9])) {
                            result = true;
                        }
                        break;
                    case 12:
                        const n11 = checkDigit(inn, [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                        const n12 = checkDigit(inn, [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]);
                        if (n11 === parseInt(inn[10]) && n12 === parseInt(inn[11])) {
                            result = true;
                        }
                        break;
                }
            }
            console.log({ valid: result, message: error.message })
            return { valid: result, message: error.message };
        }

        const validInn = helpers.withMessage(
            message => message || 'Некорректный ИНН',
            value => {
                const { valid, message } = validateInn(value);
                return valid || message;
            }
        );
        return {
            form: {
                login: {
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(30)
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                passwordConfirm: {
                    required
                },
                telephone: {
                    required,
                    minLength: minLength(11), // Длина с кодом +7 (XXX) XXX-XX-XX
                },
                email: {
                    required,
                    email
                },
                name: {
                    required,
                    minLength: minLength(3)
                },
                org: {
                    name: {
                        required,
                        minLength: minLength(3)
                    },
                    inn: {
                        required,
                        validInn
                    }
                },
                delivery_addresses: {
                    $each: {
                        value: { 
                            required,
                            minLength: minLength(5) // Минимальная длина адреса (пример)
                        }
                    }
                }
            }
        };
    },
    components: {
        Autocomplete,
        AddAddress,
        Toast,
        FloatLabel,
        InputText
    },
    methods: {
        sendMetrik: sendMetrik,
        formSubmit() {
            this.v$.$touch(); // Отмечаем все поля как проверенные
            if (this.v$.$invalid) {
                const errorMessage = this.getErrorMessages();
                this.$toast.add({
                    severity: 'error',
                    summary: 'Ошибка',
                    detail: errorMessage,
                    life: 3000
                });
                return;
            }
            if (this.form.password === this.form.passwordConfirm) {
                this.loading = true;
                this.$load(async () => {
                    const data = await this.$api.auth.register(this.form);
                    if (data) {
                        if (data === 'technical error') {
                            this.$toast.add({ severity: 'error', summary: 'Техническая ошибка', detail: 'Попробуйте позже.', life: 3000 });
                            this.loading = false;
                            return;
                        }
                        if (!data.data.success) {
                            this.$toast.add({ severity: 'error', summary: 'Ошибка!', detail: data.data.message, life: 3000 });
                            this.loading = false;
                            this.goToErrorInput(data.data.message);
                        } else {
                            this.sendMetrik('register');
                            this.regIsSuccess = true;
                        }
                        this.loading = false;
                    }
                });
            } else {
                this.$toast.add({ severity: 'error', summary: 'Ошибка!', detail: 'Пароли не совпадают. Пожалуйста, убедитесь, что вы ввели их правильно.', life: 3000 });
                this.goToErrorInput('пароль');
            }
        },
        normalizePhone(phone) {
            return phone.replace(/[^0-9]/g, ''); // Удалить все, кроме цифр
        },
        getErrorMessages() {
            if (this.v$.form.login.$error) {
                if (!this.v$.form.login.required) return 'Пожалуйста, введите логин.';
                if (this.v$.form.login.minLength) return 'Логин должен содержать минимум 3 символа.';
                if (this.v$.form.login.maxLength) return 'Логин должен содержать не более 30 символов.';
            }
            if (this.v$.form.password.$error) {
                if (!this.v$.form.password.required) return 'Пожалуйста, введите пароль.';
                if (this.v$.form.password.minLength) return 'Пароль должен содержать минимум 6 символов.';
            }
            if (this.v$.form.passwordConfirm.$error) {
                return 'Пожалуйста, подтвердите пароль. Пароли должны совпадать.';
            }
            if (this.v$.form.telephone.$error) {
                if (!this.v$.form.telephone.required) return 'Пожалуйста, введите номер телефона.';
                if (this.v$.form.telephone.minLength) return 'Введите корректный номер телефона.';
            }
            if (this.v$.form.email.$error) {
                if (!this.v$.form.email.required) return 'Пожалуйста, введите email.';
                if (this.v$.form.email.email) return 'Введите корректный email.';
            }
            if (this.v$.form.name.$error) {
                if (!this.v$.form.name.required) return 'Пожалуйста, введите ФИО.';
                if (this.v$.form.name.minLength) return 'ФИО должно содержать минимум 3 символа.';
            }
            if (this.v$.form.org.name.$error) {
                if (!this.v$.form.org.name.required) return 'Пожалуйста, введите наименование организации.';
                if (this.v$.form.org.name.minLength) return 'Наименование организации должно содержать минимум 3 символа.';
            }

            if (this.v$.form.org.inn.$error) {
                if (!this.v$.form.org.inn.required) return 'Пожалуйста, введите ИНН.';
                if (this.v$.form.org.inn.$params.innLength && !this.v$.form.org.inn.$params.innLength(value)) {
                    return 'ИНН должен содержать 10 или 12 символов.';
                }
            }
            if (this.v$.form.delivery_addresses.$error) {
                return 'Пожалуйста, заполните все адреса корректно.';
            }

            return ''; // Если ошибок нет, возвращаем пустую строку
        },
        togglePasswordVisibility1() {
            this.showPassword1 = !this.showPassword1;
        },
        togglePasswordVisibility2() {
            this.showPassword2 = !this.showPassword2;
        },
        setRegForm() {
            this.$emit('setRegForm', false);
        },
        setCompany(company) {
            this.form.org.name = company.data.name.short_with_opf;
            this.form.org.ogrn = company.data.ogrn;
            this.form.org.opf = company.data.opf.short;
        },
        setName(name){
            this.form.name = name.value
            this.form.contact = name.data
        },
        setDeliveryAddress(index, address) {
            this.form.delivery_addresses[index] = address;
        },
        goToErrorInput(errorMessage) {
            if (errorMessage.includes('ИНН')) {
                this.$refs.innInput.focus();
                this.$refs.innInput.$el.parentElement.classList.add('error');
            } else if (errorMessage.includes('логин')) {
                this.$refs.loginInput.focus();
                this.$refs.loginInput.parentElement.classList.add('error');
            } else if (errorMessage.includes('пароль')) {
                this.$refs.passwordInput.focus();
                this.$refs.passwordInput.parentElement.classList.add('error');
            }
        }
    },
    computed: {
        getYear() {
            return new Date().getFullYear();
        }
    },
    directives: {
        imask: IMaskDirective
    }
};
</script>
