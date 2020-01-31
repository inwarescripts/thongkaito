<template>
    <div class="adminform">
        <div class="row">
            <div class="cpanel-left col-md-12 col-lg-7">
                <div class="cpanel">
                    <div class="icon-wrapper">
                        <div class="icon">
                            <router-link :to="{ name: 'users' }">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span>User</span>
                            </router-link>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-user-plus" aria-hidden="true"></i>
                                <span>Add user</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-building" aria-hidden="true"></i>
                                <span>Category Manager</span>
                            </a></div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span>Media Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-newspaper-o" aria-hidden="true"></i>
                                <span>Menu Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-pencil-square" aria-hidden="true"></i>
                                <span>User Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-truck" aria-hidden="true"></i>
                                <span>Module Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-picture-o" aria-hidden="true"></i>
                                <span>Extension Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-pie-chart" aria-hidden="true"></i>
                                <span>Language Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-sitemap" aria-hidden="true"></i>
                                <span>Global Configuration</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-tags" aria-hidden="true"></i>
                                <span>Template Manager</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-file-text" aria-hidden="true"></i>
                                <span>Edit Profile</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper" id="plg_quickicon_joomlaupdate">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-list-alt" aria-hidden="true"></i>
                                <span>Joomla! is up-to-date</span>
                            </a>
                        </div>
                    </div>
                    <div class="icon-wrapper" id="plg_quickicon_extensionupdate">
                        <div class="icon">
                            <a href="">
                                <i class="fa fa-language" aria-hidden="true"></i>
                                <span>Language setting</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cpanel-right col-md-12 col-lg-5">
                <div id="panel-sliders" class="pane-sliders">
                    <div class="panel">
                        <div class="ibox">
                            <IboxHeader>
                                <template v-slot:iboxTitle>
                                    Last 5 Logged-in Users
                                </template>
                            </IboxHeader>
                            <div class="ibox-content">
                                <div class="row">
                                    <table class="table table-hover margin bottom">
                                        <thead>
                                        <tr>
                                            <th style="width: 1%" class="text-center">No.</th>
                                            <th>Transaction</th>
                                            <th class="text-center">Date</th>
                                            <th class="text-center">Amount</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td> Security doors
                                            </td>
                                            <td class="text-center small">16 Jun 2014</td>
                                            <td class="text-center"><span class="label label-primary">$483.00</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td> Wardrobes
                                            </td>
                                            <td class="text-center small">10 Jun 2014</td>
                                            <td class="text-center"><span class="label label-primary">$327.00</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-center">3</td>
                                            <td> Set of tools
                                            </td>
                                            <td class="text-center small">12 Jun 2014</td>
                                            <td class="text-center"><span class="label label-warning">$125.00</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-center">4</td>
                                            <td> Panoramic pictures</td>
                                            <td class="text-center small">22 Jun 2013</td>
                                            <td class="text-center"><span class="label label-primary">$344.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">5</td>
                                            <td>Phones</td>
                                            <td class="text-center small">24 Jun 2013</td>
                                            <td class="text-center"><span class="label label-primary">$235.00</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="panel">
                        <div class="ibox ">
                            <IboxHeader>
                                <template v-slot:iboxTitle>
                                    Last 5 Added Articles
                                </template>
                            </IboxHeader>
                            <div class="ibox-content">
                                <div class="row">
                                    <table class="table table-hover margin bottom">
                                        <thead>
                                        <tr>
                                            <th style="width: 1%" class="text-center">No.</th>
                                            <th>Transaction</th>
                                            <th class="text-center">Date</th>
                                            <th class="text-center">Amount</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="text-center">1</td>
                                            <td> Security doors
                                            </td>
                                            <td class="text-center small">16 Jun 2014</td>
                                            <td class="text-center"><span class="label label-primary">$483.00</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-center">2</td>
                                            <td> Wardrobes
                                            </td>
                                            <td class="text-center small">10 Jun 2014</td>
                                            <td class="text-center"><span class="label label-primary">$327.00</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-center">3</td>
                                            <td> Set of tools
                                            </td>
                                            <td class="text-center small">12 Jun 2014</td>
                                            <td class="text-center"><span class="label label-warning">$125.00</span>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td class="text-center">4</td>
                                            <td> Panoramic pictures</td>
                                            <td class="text-center small">22 Jun 2013</td>
                                            <td class="text-center"><span class="label label-primary">$344.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">5</td>
                                            <td>Phones</td>
                                            <td class="text-center small">24 Jun 2013</td>
                                            <td class="text-center"><span class="label label-primary">$235.00</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="text-center">6</td>
                                            <td>Monitors</td>
                                            <td class="text-center small">26 Jun 2013</td>
                                            <td class="text-center"><span class="label label-primary">$100.00</span>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loading></loading>
    </div>
</template>
<script>

    export default {
        name: 'Dash',
        components: {},
        props: {},
        data() {
            return {}
        },
        methods: {}
    }
</script>
<style>
    /* -- CONTROL PANEL STYLES ----------------------------- */
    .cpanel div.icon, #cpanel div.icon {
        text-align: center;
        margin-right: 15px;
        float: left;
        margin-bottom: 15px;

    }

    .cpanel div.icon i {
        padding: 10px 0;
        margin: 0 auto;
        font-size: 35px;
        color: #1ab394;
    }

    .cpanel div.icon a, #cpanel div.icon a {
        background-color: #fff;
        background-position: -30px;
        display: block;
        float: left;
        height: 97px;
        width: 200px;
        color: #565656;
        vertical-align: middle;
        text-decoration: none;
        border: 1px solid #CCC;

        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        -webkit-transition-property: background-position,
        -webkit-border-bottom-left-radius,
        -webkit-box-shadow;
        -moz-transition-property: background-position,
        -moz-border-radius-bottomleft,
        -moz-box-shadow;
        -webkit-transition-duration: 0.8s;
        -moz-transition-duration: 0.8s;
    }

    .cpanel div.icon a:hover {
        background-color: #1ab394;
        color: #FFFFFF;
        border-top: 5px solid #f26c61;
    }

    .cpanel div.icon a:hover i {
        color: #FFFFFF;
    }

    .cpanel div.icon a:hover i {
        font-size: 35px;
    }

    #cpanel div.icon a:hover,
    #cpanel div.icon a:focus,
    #cpanel div.icon a:active,
    .cpanel div.icon a:hover,
    .cpanel div.icon a:focus,
    .cpanel div.icon a:active {
        background-position: 0;
        -webkit-border-bottom-left-radius: 50% 20px;
        -moz-border-radius-bottomleft: 50% 20px;
        border-bottom-left-radius: 50% 20px;
        -webkit-box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.25);
        -moz-box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.25);
        box-shadow: -5px 10px 15px rgba(0, 0, 0, 0.25);
        position: relative;
        z-index: 10;
    }

    #cpanel img,
    .cpanel img {
        padding: 10px 0;
        margin: 0 auto;
    }

    #cpanel span,
    .cpanel span {
        display: block;
        text-align: center;
    }
</style>