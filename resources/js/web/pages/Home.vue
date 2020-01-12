<template>
    <div class="wrap">
        HOME
        <loading></loading>
    </div>
</template>
<script>

    export default {
        components: {
        },
        props: {
            shape: {
                type: String,
                default: 'tab'
            },
        },
        data() {
            return {
                step: 0,
            }
        },
        methods: {
        }
    }
</script>