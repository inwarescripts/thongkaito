<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//ADMIN API

Route::post('/login', 'AuthController@login')->name('api.login');
Route::get('/logout', 'AuthController@logout')->name('api.logout');


Route::group(['middleware' => 'auth.jwt'], function () {
    Route::group(['prefix' => 'users'], function () {
        Route::get('/', 'UserController@listUser')->name('user.list');
    });
});
