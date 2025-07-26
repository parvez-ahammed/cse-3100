<?php

namespace App\Services;
use Request;

class UserService
{

    public function getUser(): array
    {
        return [
            'id' => '1234',
            'name' => 'John Doe',
        ];
    }

    public function createUser(array $data): array
    {
        return [
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $data['password'],
        ];
    }
}
