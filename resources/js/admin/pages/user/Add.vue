<template>
    <div class="wrap-user">
        <div class="row">
            <div class="col-lg-12">
                <div class="ibox ">
                    <IboxHeader>
                        <template v-slot:iboxAction>
							<router-link :to="{ name: 'users' }" class="btn bg-gray ">
								<i class="fa fa-backward" aria-hidden="true"></i> 
							</router-link>
                            <button class="btn btn-blue">
								<i class="fa fa-plus-square" aria-hidden="true"></i> 
							</button>
							<button class="btn btn-red" @click="edit"><i class="fa fa-trash" aria-hidden="true"></i> </button>
                        </template>
                    </IboxHeader>
                    <div class="ibox-content">
                        <form autocomplete="off" class="form" role="form">
                            <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab"
                                       href="#nav-home" role="tab" aria-controls="nav-home"
                                       aria-selected="true">General</a>
                                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                       href="#nav-profile" role="tab" aria-controls="nav-profile"
                                       aria-selected="false">Profile</a>
                                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
                                       href="#nav-contact" role="tab" aria-controls="nav-contact"
                                       aria-selected="false">Contact</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                     aria-labelledby="nav-home-tab">
                                    <div class="row">
                                        <div class="col-md-4 col-xl-3">
											<fieldset class="user-avatar">
												<img :src="'../../images/admin/a4.jpg'"/>
											</fieldset>
                                        </div>
                                        <div class="col-md-8 col-xl-9">
                                            <div class="form-group">
                                                <label for="inputName">Name</label>
                                                <input class="form-control" id="inputName"
                                                       placeholder="Full name"
                                                       type="text">
                                            </div>
                                            <div class="form-group">
                                                <label for="inputEmail3">Email</label>
                                                <input class="form-control" id="inputEmail3" placeholder="Email"
                                                       required=""
                                                       type="email">
                                            </div>
                                            <div class="form-group">
                                                <label for="inputPassword3">Password</label>
												<div class="input-group">
													<input class="form-control" id="inputPassword3"
														   placeholder="Password"
														   required="" type="password">
													<small class="form-text text-muted" id="passwordHelpBlock">Your
														password
														must be
														8-20 characters long, contain letters and numbers, and must
														not
														contain
														spaces, special characters, or emoji.
													</small>
												</div>
                                            </div>
                                            <div class="form-group">
                                                <label for="inputVerify3">Verify</label>
                                                <input class="form-control" id="inputVerify3"
                                                       placeholder="Password (again)"
                                                       required="" type="password">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-profile" role="tabpanel"
                                     aria-labelledby="nav-profile-tab">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="inputEmail3">Image</label>
                                                <div class="custom-file">
                                                    <input id="logo" type="file" class="custom-file-input">
                                                    <label for="logo" class="custom-file-label">Choose file...</label>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <label for="sex">Sex</label>
                                                <select class="form-control" name="sex" id="sex">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="phone">Phone</label>
                                                <input class="form-control" id="phone" placeholder="Phone"
                                                       required="" type="text">
                                            </div>
                                            <div class="form-group">
                                                <label for="date-of-birth">Phone</label>
                                                <input class="form-control" id="date-of-birth" name="date_of_birth"
                                                       placeholder="Birthday"
                                                       required="" type="text">
                                            </div>
                                            <div class="form-group">
                                                <label for="city">City</label>
                                                <select class="form-control" name="city" id="city">
                                                    <option>option 1</option>
                                                    <option>option 2</option>
                                                    <option>option 3</option>
                                                    <option>option 4</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="address">City</label>
                                                <textarea class="form-control" id="address" rows="3"
                                                          name="address"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="nav-contact" role="tabpanel"
                                     aria-labelledby="nav-contact-tab">...
                                </div>
                            </div>
                        </form>
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