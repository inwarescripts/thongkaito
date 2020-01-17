<?php

namespace App\Repositories\Site;

use App\Repositories\UserRepository as UserParent;

class UserRepository extends UserParent
{
    public function getList($input)
    {
        $perPage = 15;
        $show_withdrown_users = false;

    }
}
