<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stream extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","faculty_id", "faculty_id"];

    use HasFactory;
}
