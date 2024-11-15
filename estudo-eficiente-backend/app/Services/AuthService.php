<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService 
{
    public function login (array $credentials)
    {
        if(!$token = Auth::attempt($credentials)) {
            return [
                'success' => false,
                'message' => 'Credenciais inválidas',
            ];
        }

        return [
            'success' => true,
            'token' => $token,
            'user' => Auth::user(),
        ];
    }
}