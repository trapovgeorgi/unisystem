<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","name", "faculty_id"];


    use HasFactory;
}
