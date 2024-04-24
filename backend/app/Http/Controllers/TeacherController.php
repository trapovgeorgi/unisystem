<?php

namespace App\Http\Controllers;

use App\Models\Discipline;
use App\Models\Dorm;
use App\Models\Grade;
use App\Models\Sport;
use App\Models\User;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class TeacherController extends Controller
{
    public function sport(Request $request)
    {
        return Sport::create([
            "name" => $request->name,
            "teacher_id" => $request->user()->id,
            "quantity" => 10
        ]);
    }
    public function students(Request $request)
    {
        return User::where("role", "student")->get();
    }
    public function grade(Request $request)
    {
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
    }
}
