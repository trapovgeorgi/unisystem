<?php

namespace App\Http\Controllers;

use App\Models\Dorm;
use App\Models\Faculty;
use App\Models\Group;
use App\Models\Specialty;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function login(Request $request)
    {
        Log::debug("Facnum: " . $request->facnum);
        Log::debug("Egn: " . $request->egn);

        $user = User::where("facnum", $request->facnum)->where("egn", $request->egn)->first();

        if ($user != null) {
            Log::debug("User Found");
        } else {
            Log::debug("! User NOT Found !");
            return false;
        }

        Log::debug("LOGGED IN");
        Log::debug("LOGGED IN WITH PUSH TOKEN: " . $request->pushToken);

        if (strlen($request->pushToken) != 0) {
            $user->push_token = $request->pushToken;
            $user->save();
        }

        return $user;
    }

    public function authlogin(Request $request, $token)
    {
        return User::where("api_token", $token)->first();
    }

    public function profile(Request $request)
    {
        $user = $request->user();

        if ($user->role == "student") {
            $user->group = Group::where("id", $user->group_id)->first();
            $user->group->specialty = Specialty::where("id", $user->group->specialty_id)->first();
            $user->group->specialty->faculty = Faculty::where("id", $user->group->specialty->faculty_id)->first();
        }

        return $user;
    }
}
