<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PreencheTipoMateriaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tipo_materias')->insert([
            [
                'tipo_materia_codigo' => '1',
                'tipo_materia_nome' => 'Faculdade',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo_materia_codigo' => '2',
                'tipo_materia_nome' => 'Programação',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'tipo_materia_codigo' => '3',
                'tipo_materia_nome' => 'Vestibular',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
