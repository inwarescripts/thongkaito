<template>
    <div id="wrapper">
        <SlideBarMenu></SlideBarMenu>
        <div id="page-wrapper" class="gray-bg">
            <Header></Header>
            <!-- Content Wrapper -->
            <BreadCrumb></BreadCrumb>
            <div class="wrapper wrapper-content">
                <router-view></router-view>
            </div>
            <!-- Main Footer -->
            <Footer></Footer>
        </div>
        <RightSlideBar></RightSlideBar>
    </div>
</template>

<script>
    import Header from './patials/Header'
    import BreadCrumb from './patials/BreadCrumb'
    import SlideBarMenu from './../components/SidebarMenu'
    import Footer from './patials/Footer'
    import RightSlideBar from './patials/RightSlideBar'

    export default {
        components: {
            Header,
            BreadCrumb,
            SlideBarMenu,
            Footer,
            RightSlideBar
        },
        mounted() {
            if (this.$route.path == '/admin/') {
                this.$router.push({name: 'dashboard'});
            }
        }
    }
</script>