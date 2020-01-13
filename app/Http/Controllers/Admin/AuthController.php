<?php

namespace App\Http\Controllers\Admin;

use App\Helpers\HttpCode;
use App\Helpers\ResponseHelper;
use App\Helpers\Status;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Validator;

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
    public function login(Request $request)
    {
        $errors = [];
        $credentials = $request->only(['email', 'password']);
        $validator = Validator::make(
            $credentials,
            [
                'email' => 'required',
                'password' => 'required',
            ],
            [
                'email.required' => __('validation.u1_1_blank_email'),
                'password.required' => __('validation.u1_1_blank_passwords'),
            ]
        );

        if ($validator->fails()) {
            if ($validator->errors()->has('email')) {
                $errors['email'] = $validator->errors()->first('email');
            }
            if ($validator->errors()->has('password')) {
                $errors['password'] = $validator->errors()->first('password');
            }
        }

        if ($errors) {
            return ResponseHelper::send([], Status::NG, HttpCode::BAD_REQUEST, $errors);
        }

        if (! $token = auth()->attempt($credentials)) {
            $errors['auth'] = __('auth.failed');

            return ResponseHelper::send([], Status::NG, HttpCode::UNAUTHORIZED, $errors);
        }

        if (auth()->user()->deleted_at) {
            $errors['auth'] = __('auth.account_is_deleted');
            auth()->logout();

            return ResponseHelper::send([], Status::NG, HttpCode::UNAUTHORIZED, $errors);
        }

        if (! auth()->user()->is_active) {
            $errors['auth'] = __('auth.account_is_deactivated');
            auth()->logout();

            return ResponseHelper::send([], Status::NG, HttpCode::UNAUTHORIZED, $errors);
        }


        return ResponseHelper::send(['token' => $token], Status::OK, HttpCode::OK, $errors);
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
