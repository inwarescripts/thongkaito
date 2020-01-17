<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public function getList($input)
    {
        $perPage = 10;
        $user = User::paginate($perPage);
        return $user;
    }
}
