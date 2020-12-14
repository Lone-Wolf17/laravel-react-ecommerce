<?php



namespace App\Http\Controllers\Admins;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;


class AdminsController extends Controller
{
    public function adminsLogin(Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {

            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json('Invalid credentials');
            }
        } catch (JWTException $exception) {
            return response()->json('Cant Create Token');
        }

        return response()->json(compact('token'));
    }
}
