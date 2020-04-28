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

Route::middleware('auth:api')->get('/user', function (Request $request) {
   return $request->user();
});
Route::get('category','CategoryController@index');
Route::post('category/store','CategoryController@store');
Route::delete('category/delete/{id}','CategoryController@destroy');
Route::get('category/edit/{id}','CategoryController@edit');
Route::put('category/update/{id}','CategoryController@update');

Route::get('profile','UserController@getAuthenticatedUser');
Route::post('register','UserController@register');
Route::post('login','UserController@login');