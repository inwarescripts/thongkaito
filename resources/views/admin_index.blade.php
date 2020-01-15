<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link type="text/css" rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans">
    <title>Medusa</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="locale" content="{{ App::getLocale() }}"/>

    <link rel="stylesheet" href="{{asset('css/admin/app.css')}}">
    <link href="{{asset('font-awesome/css/font-awesome.css')}}" rel="stylesheet">
</head>
<body>

<div id="app"></div>
<script src="{{asset('js/admin/app.js')}}"></script>
<script src="{{asset('js/admin/plugins/metisMenu/jquery.metisMenu.js')}}"></script>
<script src="{{asset('js/admin/plugins/slimscroll/jquery.slimscroll.min.js')}}"></script>
<script src="{{asset('js/admin/plugins/inspinia.js')}}"></script>
</body>
</html>
