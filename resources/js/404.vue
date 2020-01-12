<template>
    <div>
        <div class="d-flex justify-content-center error-page">
            <p>
                WEB NOT FOUND
            </p>
        </div>
        <div class="d-flex justify-content-center mt-3 mb-4 login_container">
            <router-link :to="{name: ''}" class="btn login_btn">
                LOGIN
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        components: {}
    }
</script>
