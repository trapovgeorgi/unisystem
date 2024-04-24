<?php

namespace App\Http\Controllers;

use App\Models\Discipline;
use App\Models\Dorm;
use App\Models\Sport;
use Illuminate\Http\Request;

class DisciplineController extends Controller
{
    public function disciplines(Request $request)
    {
        return Discipline::all();
    }
}
