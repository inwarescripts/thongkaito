<template>
    <div v-if="this.$store.state.loading.loading" class="loader-wrapper" id="spinner-loading">
        <div class="loader"></div>
        <div class="loader-section section-left"></div>
        <div class="loader-section section-right"></div>
    </div>
</template>
<script>
    export default {
        name: 'loading'
    }
</script>