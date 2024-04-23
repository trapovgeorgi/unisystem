<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Faculty extends Model
{
    protected $guarded = [];
    protected $fillable = ["id", "name"];

    public function specialties()
    {
        return $this->hasMany(Specialty::class);
    }

    public function streams()
    {
        return $this->hasMany(Stream::class);
    }

    use HasFactory;
}
