<template>
    <div class="ibox-title">
        <h5>
            <slot name="iboxTitle"></slot>
        </h5>
		<div class="ibox-box">
			<div class="ibox-action">
				<slot name="iboxAction"></slot>
			</div>
			<div class="ibox-filter">
				<slot name="iboxFilter"></slot>
			</div>
		</div>
        <div class="ibox-tools">
            <a class="collapse-link" @click="collapseLink">
                <i class="fa fa-chevron-up"></i>
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'iboxHeader',
        methods: {
            collapseLink(event) {
                event.preventDefault();
                var ibox = $(event.target).closest('div.ibox');
                var button = $(event.target);
                var content = ibox.children('.ibox-content');
                content.slideToggle(200);
                button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
                ibox.toggleClass('').toggleClass('border-bottom');
                setTimeout(function () {
                    ibox.resize();
                    ibox.find('[id^=map-]').resize();
                }, 50);
            }
        }
    }
</script>
<style>
	.ibox-title{
	    background-repeat: repeat-x;
		border-bottom: 1px solid #d4d4d4;
		-webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);
		background-image: linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%);
		position: sticky;
		top: 0;
		display:flex;
		z-index:99;
	}
	.ibox-box{
		display:flex;
		justify-content: space-between;
		width:100%;
	}
	
	.ibox-box .ibox-filter label{
		display:flex;
		align-items: center;
	}
	.ibox-box .ibox-filter label select{
		margin:0px 5px;
	}
	
</style>