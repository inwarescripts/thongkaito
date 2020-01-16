<template>
    <div class="wrap-admin">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        mounted() {
            if (this.$store.state.auth.admin_token) {
                this.$router.push({name: 'dashboard'});
            }
        }
    }
</script>