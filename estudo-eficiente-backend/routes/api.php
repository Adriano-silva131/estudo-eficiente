<?php

use Illuminate\Http\Request;
use App\Http\Controllers\MateriaController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    //Materias
    Route::post('/materias', [MateriaController::class, 'store']);
    Route::get('/materias', [MateriaController::class, 'index']);

});
