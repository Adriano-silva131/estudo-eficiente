<?php

namespace App\Services;

use App\Http\Requests\UserRequest;
use App\Models\User;

class UserService
{
    public function criarUsuario($dados)
    {
        try {
            $user = User::create([
                'name' => $dados['nome'],
                'email' => $dados['email'],
                'password' => bcrypt($dados['password']),
            ]);

            return $user;
        } catch (\Exception $e) {
            throw new \Exception("Erro ao criar usuário: " . $e->getMessage());
        }
    }
}
