<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class EventController extends Controller
{
    public function events(Request $request)
    {
        $events = Event::all()->sortBy("start")->values()->all();
        return $events;
    }
}
