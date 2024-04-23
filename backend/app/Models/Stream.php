<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stream extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","faculty_id", "faculty_id"];

    public function groups()
    {
        return $this->hasMany(Group::class);
    }

    public function faculty()
    {
        return $this->belongsTo(Faculty::class);
    }

    use HasFactory;
}
