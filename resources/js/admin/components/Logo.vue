<template>
    <div class="login-form" id="login-form">
        <loading></loading>
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img :src="'../images/kireilign.svg'"
                                 class="brand_logo" alt="Logo" height="160">
                        </div>
                    </div>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import loading from './Loading'
    export default {
        components: {
            loading
        }
    }
</script>
