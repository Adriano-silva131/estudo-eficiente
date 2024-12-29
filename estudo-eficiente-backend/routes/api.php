<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MateriaController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [UserController::class, 'store']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:api')->group(function () {
    
    //Materias
    Route::post('/criar-materia', [MateriaController::class, 'store']);
    Route::get('/lista-materias', [MateriaController::class, 'index']);

    //users
    Route::post('/logout', [AuthController::class, 'logout']);
});
