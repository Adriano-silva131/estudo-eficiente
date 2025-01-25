<?php

namespace App\Services;

use App\Models\Materia;
use App\Models\TipoMateria;

class MateriaService
{
    public function criarMateria($dados)
    {
        $tipoMateria = TipoMateria::where('tipo_materia_codigo', $dados['tipo_materia_codigo'])->first();

        if (!$tipoMateria) {
            throw new \Exception('Tipo de matéria não encontrado.');
        }

        try {
            $materia = Materia::firstOrCreate ([
                'codigo_materia' => $dados['codigo_materia'],
                'nome_materia' => $dados['nome_materia'],
                'tipo_materia_id' => $tipoMateria->id
            ]);

            return $materia;
            
        } catch (\Exception $e) {
            throw new \Exception("Erro ao criar matéria: " . $e->getMessage());
        }
    }

    public function listarMaterias () {
        $materias = Materia::with('tipo_materia')->get();

        return $materias;
    }
}
