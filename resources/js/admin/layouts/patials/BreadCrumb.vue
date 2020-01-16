<template>
    <section class="row content-header" style="box-shadow: 0 2px 2px #CCC;padding:12px 15px">
        <div class="breadcrumb-header">
            <h1>
                {{$t($route.name).toUpperCase() }}
                <small>{{ $route.meta.description }}</small>
            </h1>
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <a href="javascript:;">
                        <i class="fa fa-home"></i> {{$t('home')}}</a>
                </li>
                <li class="breadcrumb-item active">{{$t($route.name)}}</li>
            </ol>
        </div>
    </section>
</template>
<style>
    .breadcrumb-header{
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
    .breadcrumb-item+.breadcrumb-item::before {
        display: inline-block;
        padding-right: .5rem;
        padding-left: .5rem;
        color: #6c757d;
        content: "/";
    }
</style>