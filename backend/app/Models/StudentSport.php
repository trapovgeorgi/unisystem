<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentSport extends Model
{
    protected $guarded = [];
    protected $table = 'student_sport';

    public function student()
    {
        return $this->hasOne(User::class);
    }

    public function sport()
    {
        return $this->hasOne(Sport::class);
    }

    use HasFactory;
}
