<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('materias', function (Blueprint $table) {
            $table->id();
            $table->integer('codigo_materia');
            $table->string('nome_materia');
            $table->unsignedBigInteger('tipo_materia_id');
            $table->foreign('tipo_materia_id')->references('id')->on('tipo_materias');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('materias', function (Blueprint $table) {
            $table->dropForeign('tipo_materia_id');
            $table->dropColumn('tipo_materia_id');
        });
        
        Schema::dropIfExists('materias');
    }
};
