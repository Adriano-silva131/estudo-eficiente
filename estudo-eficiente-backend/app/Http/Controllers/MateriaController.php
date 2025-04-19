<?php

namespace App\Http\Controllers;

use App\Http\Requests\MateriaRequest;
use App\Models\Materia;
use App\Services\MateriaService;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MateriaController extends Controller
{
    protected $materiaService;

    public function __construct(MateriaService $materiaService)
    {
        $this->materiaService = $materiaService;
    }

    public function index()
    {
        return response()->json($this->materiaService->listarMaterias(), Response::HTTP_OK);
    }

    public function store(MateriaRequest $request)
    {
        try {
            $materias = $request->validated();
            $materiaStore = $this->materiaService->criarMateria($materias);

            return response()->json([
                'message' => 'Matéria criada com sucesso!',
                'matéria' => $materiaStore
            ], Response::HTTP_CREATED);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'message' => 'Erro: Tipo de matéria não encontrado',
                'error' => $e->getMessage()
            ], Response::HTTP_NOT_FOUND);

        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao criar o matéria.',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
