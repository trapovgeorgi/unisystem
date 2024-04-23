<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Specialty extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","name", "faculty_id"];

    public function disciplines()
    {
        return $this->hasMany(Discipline::class);
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }
    use HasFactory;
}
