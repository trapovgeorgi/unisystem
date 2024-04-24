<?php

namespace App\Http\Controllers;

use App\Models\Dorm;
use App\Models\Sport;
use Illuminate\Http\Request;

class SportController extends Controller
{
    public function sports(Request $request)
    {
        return Sport::all();
    }
}
