<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\ValidationException;
class UserController extends Controller
{
    protected $userService;

    // Inject UserService via constructor
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function getUser()
    {
        $data = $this->userService->getUser();

        return response()->json($data, 200)
            ->header('Content-Type', 'application/json');
    }
    public function create(Request $request): JsonResponse
    {
        // Validate incoming request data
        try {
            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|unique:users,email',
                'password' => 'required|string|min:6|confirmed',
            ]);
        } catch (ValidationException $e) {
            return response()->json([
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);
        }

        // Delegate user creation to the service
        $user = $this->userService->createUser($validatedData);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ], 201);
    }
}