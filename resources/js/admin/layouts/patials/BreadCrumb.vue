<template>
    <div class="breadcrumb-menu">
        <section class="row content-header" style="box-shadow: 0 2px 2px #CCC;padding:12px 15px">
            <div class="breadcrumb-header">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="">
                            <i class="fa fa-home"></i> {{$t('home')}}</a>
                    </li>
                    <li class="breadcrumb-item active">{{$t($route.name)}}</li>
                </ol>
                <div class="menu-header-action">
                    <portal-target name="destination"></portal-target>
                </div>
            </div>
        </section>
    </div>
</template>
<style>
    .breadcrumb-menu{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1010;
        width: auto;
        background: #f3f3f4;
    }
    .breadcrumb-header {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .breadcrumb {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding: .75rem 1rem;
        margin-bottom: 1rem;
        list-style: none;
        background-color: #e9ecef;
        border-radius: .25rem;
    }

    .breadcrumb-item.active {
        color: #6c757d;
    }

    .breadcrumb-item + .breadcrumb-item::before {
        display: inline-block;
        padding-right: .5rem;
        padding-left: .5rem;
        color: #6c757d;
        content: "/";
    }

    .menu-header-action .btn {
        min-width: 150px;
        border-radius: 10px;
        height: 45px;
    }
</style>