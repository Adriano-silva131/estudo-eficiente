<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Services\AuthService;
use Illuminate\Http\JsonResponse;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    protected $authService;
    
    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login (LoginRequest $request): JsonResponse
    {
        $credentials = $request->only('email', 'password');

        $result = $this->authService->login($credentials);

        if (!$result['success']) {
            return response()->json(['error' => $result['message']], 401);
        }
        
        return response()->json([
            'access_token' => $result['token'],
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
            'user' => [
                'id' => $result['user']->id,
                'name' => $result['user']->name,
                'email' => $result['user']->email,
            ],
        ]);
    }
}
