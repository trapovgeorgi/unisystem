<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $guarded = [];
    protected $fillable = ["id", "api_token", "name", "facnum", "egn", "mail", "eqd", "eqd_type", "state", "group_id"];

    public function student_grades()
    {
        return $this->hasMany(Grade::class, "student_id");
    }

    public function teacher_grades()
    {
        return $this->hasMany(Grade::class, "teacher_id");
    }

    public function dorm()
    {
        return $this->hasOne(Dorm::class);
    }

    public function group()
    {
        return $this->hasOne(Group::class);
    }

    public function sport()
    {
        return $this->belongsToMany(Sport::class, StudentSport::class, "student_id");
    }

    use HasFactory;
}
