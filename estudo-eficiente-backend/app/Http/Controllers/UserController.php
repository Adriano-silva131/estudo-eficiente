<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Services\UserService;
use Illuminate\Http\Request;

class UserController extends Controller
{

    protected $user;

    public function __construct(UserService $user)
    {
        $this->user = $user;
    }

    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(UserRequest $request)
    {
        $dados = $request->validated();

        try {
            // Chama o método do serviço passando os dados validados (array)
            $userStore = $this->user->criarUsuario($dados);

            return response()->json([
                'message' => 'Usuário criado com sucesso!',
                'usuario' => $userStore
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao criar o usuário.',
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
