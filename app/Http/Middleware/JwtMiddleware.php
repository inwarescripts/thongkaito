<?php

namespace App\Http\Middleware;

use App\Helpers\HttpCode;
use App\Helpers\ResponseHelper;
use App\Helpers\Status;
use Closure;
use Exception;
use Illuminate\Support\Facades\App;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException;

class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $refreshed_token = '';
        try {
            if ($request->input('lang')) {
                App::setLocale($request->input('lang'));
            }
            $parsed_token = JWTAuth::parseToken();

            $user_type = $parsed_token->getPayload()->get('user_type');

            if ($user_type === 'admin') {
                auth()->shouldUse('api-admin');
            } else {
                auth()->shouldUse('api');
            }

            if (!auth()->check()) {
                return ResponseHelper::send(
                    [],
                    Status::NG,
                    HttpCode::FORBIDDEN
                );
            }

        } catch (Exception $e) {

            if ($e instanceof TokenInvalidException) {
                return ResponseHelper::send(
                    [],
                    Status::NG,
                    HttpCode::FORBIDDEN,
                    ['jwt_token_invalid' => 'jwt_token_invalid_message']
                );

            } else if ($e instanceof TokenExpiredException) {
                try {
                    $expired_token = JWTAuth::getToken()->get();
                    $parsed_token = JWTAuth::manager()->getJWTProvider()->decode($expired_token);
                    if (isset($parsed_token['user_type']) && $parsed_token['user_type'] === 'admin') {
                        auth()->shouldUse('api-admin');
                    } else {
                        auth()->shouldUse('api');
                    }
                    $refreshed_token = JWTAuth::refresh();
                    $user = auth()->setToken($refreshed_token)->user();
                    auth()->login((object)$user);

                } catch (JWTException $e) {
                    return ResponseHelper::send(
                        [],
                        Status::NG,
                        HttpCode::FORBIDDEN,
                        ['jwt_token_expired' => 'jwt_token_expired_message']
                    );
                }

            } else {
                return ResponseHelper::send(
                    [],
                    Status::NG,
                    HttpCode::FORBIDDEN,
                    ['jwt_mdlw_error' => $e->getMessage()]
                );
            }
        }

        if ($refreshed_token) {
            return $next($request)->header('Keirin-Refresh-Authorization', $refreshed_token);
        }
        return $next($request);
    }
}
