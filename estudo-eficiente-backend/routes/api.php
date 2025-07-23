<?php

use App\Http\Controllers\MateriaController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {

    //Materias
    Route::post('/materias', [MateriaController::class, 'store']);
    Route::get('/materias', [MateriaController::class, 'index']);

});
