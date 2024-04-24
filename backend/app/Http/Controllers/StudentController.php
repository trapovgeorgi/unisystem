<?php

namespace App\Http\Controllers;

use App\Models\Dorm;
use App\Models\Grade;
use App\Models\GrantRequest;
use App\Models\StudentSport;
use App\Services\NotificationService;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function getGrant(Request $request)
    {
        return GrantRequest::where("student_id", $request->user()->id)->first();
    }
    public function setGrant(Request $request)
    {
        NotificationService::sendPushNotification($request->user()->push_token, "Стипендия", "Успешно кандидатстване");
        return GrantRequest::create([
            "point" => $request->point,
            "student_id" => $request->user()->id
        ]);
    }

    public function getDorms(Request $request)
    {
        return Dorm::whereNull("student_id")->get();
    }
    public function getDorm(Request $request)
    {
        NotificationService::sendPushNotification($request->user()->push_token, "Общежития", "Успешно кандидатстване");
        return Dorm::where("student_id", $request->user()->id)->first();
    }
    public function setDorm(Request $request)
    {
        $dorm = Dorm::where("id", $request->dorm_id)->first();
        $dorm->student_id = $request->user()->id;
        return $dorm->save();;
    }

    public function getSport(Request $request)
    {
        $sport = $request->user()->sport->first();
        if ($sport != null) {
            $sport->teacher;
        }
        return $sport;
    }
    public function setSport(Request $request)
    {
        NotificationService::sendPushNotification($request->user()->push_token, "Спорт", "Успешно записване");
        return StudentSport::create([
            "student_id" => $request->user()->id,
            "sport_id" => $request->sport["id"]
        ]);
    }

    public function grades(Request $request)
    {
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
    }
}
