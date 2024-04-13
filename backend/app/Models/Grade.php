<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
    protected $guarded = [];
    protected $fillable = ["id", "grade", "verified", "student_id", "teacher_id"];

    use HasFactory;
}
