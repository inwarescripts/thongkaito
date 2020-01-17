<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HttpCode;
use App\Helpers\ResponseHelper;
use App\Helpers\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AuthRequest;
use Illuminate\Support\Carbon;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }

    public function loginForm()
    {
        //TODO
    }

    /**
     * Get a JWT via given credentials.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return mixed
     */
    public function login(AuthRequest $request)
    {
        try {
            $errors = [];
            $credentials = $request->only(['email', 'password']);

            if (!$token = auth('api-admin')->attempt($credentials)) {
                $errors['auth'] = __('admin/auth.failed');
                return ResponseHelper::send([], Status::NG, HttpCode::UNAUTHORIZED, $errors);
            }

            if (auth('api-admin')->user()->status != 'active') {
                $errors['auth'] = __('admin/auth.account_is_deactivated');
                auth()->logout();
                return ResponseHelper::send([], Status::NG, HttpCode::UNAUTHORIZED, $errors);
            }

            auth('api-admin')->user()->last_logged_at = Carbon::now();
            auth('api-admin')->user()->save();

            return ResponseHelper::send(['token' => $token], Status::OK, HttpCode::OK, $errors);
        } catch (\Exception $e) {
            return ResponseHelper::send([], Status::NG, HttpCode::UNAUTHORIZED, [__('admin/auth.server_error')]);
        }
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return ResponseHelper::send([], Status::OK, HttpCode::OK);
    }
}
