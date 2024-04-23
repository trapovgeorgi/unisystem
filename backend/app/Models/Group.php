<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $guarded = [];
    protected $fillable = ["id","specialty_id", "stream_id", "specialty_id"];

    public function specialty()
    {
        return $this->belongsTo(Specialty::class);
    }

    public function stream()
    {
        return $this->belongsTo(Stream::class);
    }
    use HasFactory;
}
