<?php

namespace App\Http\Controllers;

use App\Http\Requests\MateriaRequest;
use App\Models\Materia;
use App\Services\MateriaService;
use Illuminate\Http\Request;

class MateriaController extends Controller
{
    protected $materiaService;

    public function __construct(MateriaService $materiaService)
    {
        $this->materiaService = $materiaService;
    }

    public function index()
    {
        $materias = $this->materiaService->listarMaterias();

        return response()->json([
            'matérias' => $materias
        ], 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MateriaRequest $request)
    {
        $materias = $request->validated();

        try {

            $materiaStore = $this->materiaService->criarMateria($materias);

            return response()->json([
                'message' => 'Matéria criada com sucesso!',
                'matéria' => $materiaStore
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao criar o matéria.',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
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
