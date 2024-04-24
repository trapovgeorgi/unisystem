<?php

use App\Http\Controllers\DisciplineController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\InsuranceController;
use App\Http\Controllers\OfficeController;
use App\Http\Controllers\SportController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::post('/login', [UserController::class, "login"]);
Route::get('/authlogin/{token}', [UserController::class, "authlogin"]);

//AUTH MIDDLEWARE
Route::middleware('auth:api')->group(function () {

    Route::get('/events', [EventController::class, "events"]);
    Route::get('/insurances', [InsuranceController::class, "insurances"]);
    Route::get('/sports', [SportController::class, "sports"]);
    Route::get('/disciplines', [DisciplineController::class, "disciplines"]);

    Route::get('/student/grant', [StudentController::class, "getGrant"]);
    Route::post('/student/grant', [StudentController::class, "setGrant"]);

    Route::get('/student/dorms', [StudentController::class, "getDorms"]);
    Route::get('/student/dorm', [StudentController::class, "getDorm"]);
    Route::post('/student/dorm', [StudentController::class, "setDorm"]);

    Route::get('/student/sport', [StudentController::class, "getSport"]);
    Route::post('/student/sport', [StudentController::class, "setSport"]);

    Route::get('/student/grades', [StudentController::class, "grades"]);

    Route::post('/teacher/sport', [TeacherController::class, "sport"]);
    Route::get('/teacher/students', [TeacherController::class, "students"]);
    Route::post('/teacher/grade', [TeacherController::class, "grade"]);

    Route::post('/office/event', [OfficeController::class, "event"]);
    Route::delete('/office/event/{id}', [OfficeController::class, "deleteEvent"]);

    Route::get('/profile', [UserController::class, "profile"]);
});
