<template>
    <div>
        <div class="row">
            <div class="col-lg-12">
                <div class="ibox ">
                    <IboxHeader>
                        <template v-slot:iboxAction>
							<router-link :to="{ name: 'user.add' }">
								<button class="btn btn-blue">
									<i class="fa fa-plus-square" aria-hidden="true"></i>
								</button>
							</router-link>
							<button class="btn btn-red" @click="edit"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </template>
						<template v-slot:iboxFilter>
						<label>Show <select name="numb" class="form-control ">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                            </select> entries</label>
						</template>
                    </IboxHeader>
                    <div class="ibox-content">
                        <div class="table-responsive">
                            <table class="table table-striped table-bordered table-hover table-list ">
                                <thead>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Sex</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-if="users.data.length" v-for="user in users.data">
                                    <td><input type="checkbox"/></td>
                                    <td>{{user.name}}</td>
                                    <td><img :src="'../../images/admin/'+user.avatar_img"/></td>
                                    <td>{{user.email}}</td>
                                    <td class="center">{{user.sex}}</td>
                                    <td class="center">{{user.phone}}</td>
                                    <td class="center">{{user.city}}</td>
                                    <td class="center">{{user.status}}</td>
                                    <th class="text-center">
                                        <button class="btn"><i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </button>
                                        <button class="btn"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </th>
                                </tr>
                                <tr v-else>
                                    <td class="center" colspan="9"> Data empty</td>
                                </tr>
                                </tbody>
                                <tfoot>
                                <tr>
                                    <th><input type="checkbox"/></th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Email</th>
                                    <th>Sex</th>
                                    <th>Phone</th>
                                    <th>City</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                                </tfoot>
                            </table>
                            <div class="div-center">
                                <vue-pagination :pagination="users"
                                                @paginate="getUsers()"
                                                :offset="4">
                                </vue-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Loading></Loading>
    </div>
</template>
<script>
    export default {
        name: 'Dash',
        components: {},
        props: {},
        data() {
            return {
                users: {
                    total: 0,
                    per_page: 2,
                    from: 1,
                    to: 0,
                    current_page: 1,
                    data: [],
                },
                offset: 4,
            }
        },
        created() {
            document.title = 'USERLIST';
            this.getUsers();
        },
        methods: {
            safeGet: function (object, keys) {
                return keys.split('.').reduce((xs, x) => (xs && xs[x]) ? xs[x] : undefined, object) || '';
            },
            getUsers: function () {
                let queryData = {page: this.users.current_page};
                this.$store.commit('set_loading', true);
                this.$store.dispatch('userList', queryData).then((result) => {
                    this.users = this.safeGet(result.data, 'results');
                    this.$store.commit('set_loading', false);
                }).catch((error) => {
                    this.$store.commit('set_loading', false);
                });
            },
            edit: function () {
                console.log('xxx');
            }
        }
    }
</script>
<style>
    .tooltip {
        display: block !important;
        z-index: 10000;
    }

    .tooltip .tooltip-inner {
        background: black;
        color: white;
        border-radius: 16px;
        padding: 5px 10px 4px;
    }

    .tooltip .tooltip-arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
        border-color: black;
        z-index: 1;
    }

    .tooltip[x-placement^="top"] {
        margin-bottom: 5px;
    }

    .tooltip[x-placement^="top"] .tooltip-arrow {
        border-width: 5px 5px 0 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="bottom"] {
        margin-top: 5px;
    }

    .tooltip[x-placement^="bottom"] .tooltip-arrow {
        border-width: 0 5px 5px 5px;
        border-left-color: transparent !important;
        border-right-color: transparent !important;
        border-top-color: transparent !important;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .tooltip[x-placement^="right"] {
        margin-left: 5px;
    }

    .tooltip[x-placement^="right"] .tooltip-arrow {
        border-width: 5px 5px 5px 0;
        border-left-color: transparent !important;
        border-top-color: transparent !important;
        border-bottom-color: transparent !important;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip[x-placement^="left"] {
        margin-right: 5px;
    }

    .tooltip[x-placement^="left"] .tooltip-arrow {
        border-width: 5px 0 5px 5px;
        border-top-color: transparent !important;
        border-right-color: transparent !important;
        border-bottom-color: transparent !important;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .tooltip.popover .popover-inner {
        background: #f9f9f9;
        color: black;
        padding: 24px;
        border-radius: 5px;
        box-shadow: 0 5px 30px rgba(black, .1);
    }

    .tooltip.popover .popover-arrow {
        border-color: #f9f9f9;
    }

    .tooltip[aria-hidden='true'] {
        visibility: hidden;
        opacity: 0;
        transition: opacity .15s, visibility .15s;
    }

    .tooltip[aria-hidden='false'] {
        visibility: visible;
        opacity: 1;
        transition: opacity .15s;
    }
</style>