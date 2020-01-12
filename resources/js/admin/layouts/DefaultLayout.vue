<template>
    <div class="wrap-admin">
        <router-view></router-view>
    </div>
</template>

<script>
	export default {
		mounted() {
			console.log('admin');
		}
	}
</script>