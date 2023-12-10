<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return inertia('Welcome');
});

Route::get('register', function () {
    return inertia('Register');
});

Route::get('/user-register-complete', function () {
    return Inertia::render('UserRegisterComplete');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware('auth');
