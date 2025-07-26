<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

Route::get('/user/{id}', [UserController::class, 'getUser']);
Route::post('/users', [UserController::class, 'create']);