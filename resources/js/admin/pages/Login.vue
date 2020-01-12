<template>
    <logo>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="justify-content-center form_container">
                <div class="form-group">
                    <label for="email">{{ $t('common_page.email') }}</label>
                    <input type="email" v-model="email" placeholder="example@kireilign.com"
                           class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">{{ $t('common_page.password') }}</label><span class="note-tip">{{ $t('common_page.input_characters') }}</span>
                    <input type="password" v-model="password" class="form-control" id="pwd">
                </div>
            </div>
            <div class="forget-password">
                <router-link :to="{ name: 'password.request' }" class="float-right"
                             style="padding:15px 25px;color:#7FC7EF;text-decoration: underline;">
                    {{ $t('login_page.forgot_pass') }}
                </router-link>
                <validation-errors :errors="validationErrors" v-if="validationErrors"></validation-errors>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-4 login_container">
                <button type="submit" name="button" class="btn login_btn">{{ $t('common_page.btn_login') }}</button>
            </div>
        </form>
    </logo>
</template>

<script>
    import logo from '../components/Logo'

    export default {
        components: {
            logo
        },
        data() {
            return {
                email: '',
                password: '',
                error: false,
                validationErrors: {},
                success: false,
                remember: false
            };
        },
        created() {
            document.title = this.$t('page_title.u1_1');
        },
        methods: {
            async login() {
                this.$store.commit('set_loading', true)
                this.$store.dispatch('login', {email: this.email, password: this.password}).then((result) => {
                    this.$store.commit('set_loading', false)
                    this.$router.push('/dashboard');
                }).catch((error) => {
                    this.$store.commit('set_loading', false)
                    this.validationErrors = error.response.data.errors;
                });
            }
        }
    }
</script>
