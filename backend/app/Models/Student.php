<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","name", "facnum", "egn", "mail", "eqd","eqd_type", "state", "group_id"];

    use HasFactory;
}
