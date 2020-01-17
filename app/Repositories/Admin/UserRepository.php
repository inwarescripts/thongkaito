<?php

namespace App\Repositories\Admin;

use App\Repositories\UserRepository as UserParent;

class UserRepository extends UserParent
{
    public function getList($input)
    {
        return parent::getList($input);
    }
}

