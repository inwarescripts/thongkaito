<template>
    <logo>
        <form autocomplete="off" @submit.prevent="login" method="post">
            <div class="justify-content-center form_container">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" v-model="email" placeholder="example@kireilign.com"
                           class="form-control" id="email">
                </div>
                <div class="form-group">
                    <label for="pwd">Password</label><span class="note-tip">Using half-width English more than 8 characters numbers and letters</span>
                    <input type="password" v-model="password" placeholder="Password" class="form-control" id="pwd">
                </div>
            </div>
            <div class="forget-password">
                <router-link :to="{ name: 'password.request' }" class="float-right">
                    Forgot Password?
                </router-link>
                <template>
                    <div v-if="validationErrors">
                        <ul class="justify-content-center errors">
                            <li v-for="(value, key, index) in validationErrors">{{ value }}</li>
                        </ul>
                    </div>
                </template>
            </div>
            <div class="d-flex justify-content-center mt-3 mb-4 login_container">
                <button type="submit" name="button" class="btn login_btn">
                    <font-awesome-icon icon="arrow-right"/>
                    Login
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
			document.title = 'Admin Login';
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
