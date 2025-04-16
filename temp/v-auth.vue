<template>
    <div class="analytics_auth">
        <form class="form-signin" @submit.prevent="formSubmit">
            <!-- <Toast /> -->
            <div class="logo text-center">
                <img src="../../assets/images/logo.svg" alt="" width="200" />
            </div>
            <div class="std-auth__input-container">
                <input type="text" name="username" class="dart-form-control std-auth__input" placeholder="Логин" required="" v-model="form.email" />
                <div class="relative">
                    <input
                    :type="showPassword ? 'text' : 'password'"
                    name="password"
                    class="dart-form-control std-auth__input"
                    placeholder="Пароль"
                    required=""
                    v-model="form.password" />
                    <button type="button" @click="togglePasswordVisibility" class="password-toggle">
                        <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
                    </button>
                </div>
            </div>
            <div class="std-auth__button-container">
                <button
                    class="dart-btn dart-btn-primary dart-btn-block align-items-center flex justify-content-center std-auth__button"
                    :disabled="this.loading"
                    type="submit">
                    <i v-if="this.loading" class="pi pi-spin pi-spinner" style="font-size: 14px"></i> <span>Войти</span>
                </button>
                <button
                    class="dart-btn dart-btn-secondary-outline dart-btn-block align-items-center flex justify-content-center std-auth__button std-auth__button--secondary"
                    type="button"
                    @click="this.setRegForm">
                    <span>Зарегистрироваться</span>
                </button>
                <div class="form-signin__desc">
                    <a href="" @click.prevent="showForgotModal = true">Забыли пароль?</a>
                </div>
            </div>
            <teleport to="body">
                <custom-modal v-model="showForgotModal" @cancel="cancel">
                    <template v-slot:title>Восстановление пароля</template>
                    <v-forgot />
                </custom-modal>
            </teleport>
            <div class="form-signin__copy">
                <span>© MST, {{ getYear }}.</span>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import customModal from '../CustomModal.vue';
import vForgot from './v-forgot.vue';
import Toast from 'primevue/toast';
import { sendMetrik } from '../../utils/metrika';

export default {
    name: 'auth-form',
    data() {
        return {
            mode: 'signIn',
            loading: false,
            showPassword: false, // Флаг для видимости пароля
            showForgotModal: false,
            form: {
                email: '',
                password: ''
            },
            errors: []
        };
    },
    computed: {
        getYear() {
            return new Date().getFullYear();
        }
    },
    methods: {
        sendMetrik: sendMetrik,
        ...mapActions({
            org_get_from_api: 'org_get_from_api',
            getSessionUser: 'user/getSessionUser',
        }),
        formSubmit() {
            this.signIn();
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        signIn() {
            this.loading = true;
            this.$load(async () => {
                const data = await this.$api.auth.signIn({
                    username: this.form.email,
                    password: this.form.password
                });
                if (data.data.success) {
                    this.getSessionUser()
                    localStorage.setItem('user', JSON.stringify(data.data.data));
                    this.$store.dispatch('user/setUser', data.data);
                    // this.$router.push({ name: 'home' })

                    // this.$router.push({ name: 'org', params: { id: '48' } })

                    const orgs = await this.org_get_from_api({
                        action: 'get/orgs'
                    });

                    if (orgs != undefined) {
                        // console.log(orgs.data.data)
                        let role = localStorage.getItem('role');
                        this.sendMetrik('auth');
                        if (role == 1) {
                            const res = await this.$router.push({ name: 'retail_orders', params: { id: orgs.data.data[0].id } });
                        } else if (role == 2) {
                            const res = await this.$router.push({ name: 'statistics', params: { id: orgs.data.data[0].id } });
                        } else {
                            const res = await this.$router.push({ name: 'purchases_home', params: { id: orgs.data.data[0].id } });
                        }
                    }else{
                        this.deleteUser();
                        this.$router.push({ name: 'home'})
                    }
                } else {
                    this.$toast.add({ severity: 'error', summary: 'Вход запрещен', detail: data.data.message, life: 3000 });
                    this.loading = false;
                }
            });
        },
        cancel(close) {
            close();
        },
        setRegForm() {
            this.$emit('setRegForm', true);
        }
    },
    components: {
        customModal,
        vForgot,
        Toast
    }
};
</script>

<style lang="scss"></style>
