<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\PostController;
use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('posts', [PostController::class, 'index']);
Route::post('posts/create', [PostController::class, 'store']);
Route::get('posts/edit/{post}', [PostController::class, 'show']);
Route::put('posts/update/{post}', [PostController::class, 'update']);
Route::delete('posts/delete/{post}', [PostController::class, 'destroy']);

Route::get('categories', [CategoryController::class, 'index']);
