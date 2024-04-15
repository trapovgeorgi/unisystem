<?php

use App\Models\Faculty;
use App\Models\Group;
use App\Models\Specialty;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

use function Psy\debug;

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
    Log::debug("Facnum: " . $request->facnum);
    Log::debug("Egn: " . $request->egn);

    $student = Student::where("facnum", $request->facnum)->where("egn", $request->egn)->first();

    if ($student != null) {
        Log::debug("Student Found");
    } else {
        Log::debug("! Student NOT Found !");
        return false;
    }

    Log::debug("LOGGED IN");
    return $student->api_token;
});

Route::middleware('auth:api')->group(function () {
    Route::get('/kur', function (Request $request) {
        return "kur1";
    });

    Route::get('/profile', function (Request $request) {
        $user = $request->user();
        $user->group = Group::where("id", $user->group_id)->first();
        $user->group->specialty = Specialty::where("id", $user->group->specialty_id)->first();
        $user->group->specialty->faculty = Faculty::where("id", $user->group->specialty->faculty_id)->first();
        
        return $user;
    });
});
