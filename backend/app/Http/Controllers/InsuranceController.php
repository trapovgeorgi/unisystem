<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Insurance;
use Illuminate\Http\Request;

class InsuranceController extends Controller
{
    public function insurances(Request $request)
    {
        return Insurance::all();
    }
}
