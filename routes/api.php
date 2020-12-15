<?php

use App\Http\Controllers\Admins\AdminsController;
use App\Http\Controllers\Admins\ItemsController;
use Illuminate\Support\Facades\Route;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

// login and getAuthAdmin
Route::group(['prefix' => 'admins', 'namespace' => 'Admins'], function () {
    Route::post('login', [AdminsController::class, 'adminsLogin']);
    Route::get('authAdmin', [AdminsController::class, 'getAuthenticatedAdmin']);
});

//items
Route::group(['prefix' => 'admins', 'namespace' => 'Admins', 'middleware' => ['adminsRoutes', 'jwt.auth']], function () {
    Route::post('add/items/{id}', [ItemsController::class, 'addItem']);
});
