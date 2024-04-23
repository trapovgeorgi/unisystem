<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Discipline extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","name", "semester", "specialty_id"];

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }
    
    use HasFactory;
}
