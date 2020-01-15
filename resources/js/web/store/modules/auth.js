import axios from 'axios'

export const state = {
	status: '',
	admin_token: localStorage.getItem('admin-token') || '',
	user: {}
}

export const mutations = {
	auth_request(state) {
		state.status = 'loading'
	},
	auth_success(state, admin_token) {
		state.status = 'success'
		state.admin_token = admin_token
	},
	auth_error(state) {
		state.status = 'error'
	},
	logout(state) {
		state.status = ''
		state.admin_token = ''
	},
}

export const actions = {
	adminLogin({dispatch, commit}, {email, password}) {
		commit('auth_request')
		return axios.post('/api-admin/login', {
			email,
			password
		})
			.then((res) => {
				let admin_token = res.data.results.token;
				localStorage.setItem('admin-token', admin_token)
				commit('auth_success', admin_token);
				return res;
			})
			.catch(error => {
				commit('auth_error')
				localStorage.removeItem('admin-token')
				throw error;
			})
	},

	logout({commit}) {
		if (state.admin_token != null) {
			return axios.get('/api/logout', {
				headers: {'Authorization': "Bearer " + state.admin_token}
			}).then((res) => {
				commit('logout')
				localStorage.removeItem('admin-token')
				return res;
			})
				.catch(error => {
					commit('logout')
					localStorage.removeItem('admin-token')
					throw error;
				})
		}
	},
}

export const getters = {
	isLoggedIn: state => !!state.admin_token,
	authStatus: state => state.status,
}