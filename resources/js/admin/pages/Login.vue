<template>
    <logo>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="justify-content-center form_container">
                <div class="form-group">
                    <label for="email">{{$t('auth.email_address')}}</label>
                    <input type="email" v-model="email" placeholder="example@kireilign.com"
                           class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">{{$t('auth.password')}}</label>
                    <span class="note-tip">{{$t('auth.password_note')}}</span>
                    <input type="password" v-model="password" :placeholder="$t('auth.password')" class="form-control"
                           id="pwd">
                </div>
            </div>
            <div class="forget-password">
                <router-link :to="{ name: 'password.request' }" class="float-right">
                    {{$t('auth.forgot_password')}}
                </router-link>
                <template v-if="validationErrors && Object.keys(validationErrors).length">
                    <ul class="justify-content-center error">
                        <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
                    </ul>
                </template>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-5 login_container">
                <button type="submit" name="button" class="btn login_btn btn-blue">
                    <font-awesome-icon icon="arrow-right"/>
                    {{$t('auth.login')}}
                </button>
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
            document.title = this.$t('page_title.login');
        },
        methods: {
            async login() {
                this.$store.commit('set_loading', true)
                this.$store.dispatch('adminLogin', {email: this.email, password: this.password}).then((result) => {
                    this.$store.commit('set_loading', false)
                    this.$router.push({name: 'dashboard'});
                }).catch((error) => {
                    this.$store.commit('set_loading', false)
                    this.validationErrors = error.response.data.errors;
                });
            }
        }
    }
</script>
