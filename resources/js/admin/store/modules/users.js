import axios from "axios";
import {state} from "./auth";

export const actions = {
    userList({dispatch, commit}, queryData) {
        return axios.get('/api-admin/users', {
            params: queryData,
            headers: {'Authorization': "Bearer " + state.admin_token}
        })
            .then((res) => {
                return res;
            })
            .catch(error => {
                throw error;
            })
    },
}