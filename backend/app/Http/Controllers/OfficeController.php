<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Dorm;
use App\Models\User;
use App\Models\Event;
use App\Models\Grade;
use App\Models\Sport;
use App\Models\Discipline;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Services\NotificationService;

class OfficeController extends Controller
{
    public function event(Request $request)
    {
        Event::create([
            "title" => $request->eventName,
            "start" => Carbon::create($request->year, $request->month, $request->day, $request->sh, $request->sm),
            "end" => Carbon::create($request->year, $request->month, $request->day, $request->eh, $request->em),
        ]);
    }

    public function deleteEvent(Request $request, $id)
    {
        Event::destroy($id);
    }
}
