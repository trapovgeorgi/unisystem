<?php

use App\Models\Discipline;
use App\Models\Faculty;
use App\Models\Grade;
use App\Models\Group;
use App\Models\Specialty;
use App\Models\User;
use App\Services\NotificationService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;



Route::post('/login', function (Request $request) {
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
});

Route::get('/authlogin/{token}', function (Request $request, $token) {
    return User::where("api_token", $token)->first();
});

//AUTH MIDDLEWARE
Route::middleware('auth:api')->group(function () {
    Route::get("/student/grades", function (Request $request) {
        $semesters = [];
        for ($i = 1; $i < $request->user()->semester + 1; $i++) {
            $grades = Grade::where("student_id", $request->user()->id)->get();
            $grades_f = [];
            foreach ($grades as $grade) {
                $grade->teacher;
                if ($grade->discipline->semester == $i) {
                    $grades_f[] = $grade;
                }
            }
            $semesters[] = $grades_f;
        }
        return $semesters;
    });

    Route::get("/disciplines", function (Request $request) {
        return Discipline::all();
    });
    Route::get("/teacher/students", function (Request $request) {
        return User::where("role", "student")->get();
    });

    Route::post("/teacher/grade", function (Request $request) {
        $grade = Grade::create([
            "grade" => $request->grade,
            "verified" => $request->verified,
            "student_id" => $request->student_id,
            "teacher_id" => $request->user()->id,
            "discipline_id" => $request->discipline_id
        ]);

        $discipline = Discipline::where("id", $grade->discipline_id)->first();

        $title = "Нова Оценка по " . $discipline->name;
        $body = "Oценка: " . $grade->grade;
        NotificationService::sendPushNotification($grade->student->push_token, $title, $body);
    });

    Route::get('/profile', function (Request $request) {
        $user = $request->user();

        if ($user->role == "student") {
            $user->group = Group::where("id", $user->group_id)->first();
            $user->group->specialty = Specialty::where("id", $user->group->specialty_id)->first();
            $user->group->specialty->faculty = Faculty::where("id", $user->group->specialty->faculty_id)->first();
        }

        return $user;
    });
});
