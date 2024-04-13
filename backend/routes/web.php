<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/login', function (Request $request) {
    Log::debug($request);

    Log::debug($request->username);
    Log::debug($request->password);

    if ($request->username != "mitko") return false;
    if ($request->password != "mitko") return false;

    Log::debug("LOGGED IN");
    return true;
});