<template>
    <section class="content-header" style="box-shadow: 0 2px 2px #CCC;padding:12px 15px">
        <h1>
            {{$t($route.name).toUpperCase() }}
            <small>{{ $route.meta.description }}</small>
        </h1>
        <ol class="breadcrumb">
            <li>
                <a href="javascript:;">
                    <i class="fa fa-home"></i>{{$t('home')}}</a>
            </li>
            <li class="active">{{$t($route.name)}}</li>
        </ol>
    </section>
</template>