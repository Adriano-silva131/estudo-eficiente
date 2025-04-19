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
            throw new ModelNotFoundException('Tipo de matéria não encontrado.');
        }

            return Materia::firstOrCreate ([
                'codigo_materia' => $dados['codigo_materia'],
                'nome_materia' => $dados['nome_materia'],
                'tipo_materia_id' => $tipoMateria->id
            ]);
    }

    public function listarMaterias () {
        $materias = Materia::with('tipo_materia')->get();

        return $materias;
    }

    public function obterMateriaPorId(int $id): Materia 
    {
        return Materia::with('tipo_materia')->findOrFail($id);
    }

    public function deletarMateria(int $id) : void
    {
        $materia = Materia::findOrFail($id);
        $materia->delete();
    }
}
