<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HttpCode;
use App\Helpers\ResponseHelper;
use App\Helpers\Status;
use App\Http\Controllers\Controller;
use App\Repositories\Admin\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function listUser(Request $request, UserRepository $userRepo)
    {
        try {
            $data = $userRepo->getList($request);
            return ResponseHelper::send($data, Status::OK, HttpCode::OK);
        } catch (Exception $e) {
            return ResponseHelper::sendException($e->getMessage());
        }
    }
}
