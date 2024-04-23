<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sport extends Model
{
    protected $guarded = [];  
    public function teacher()
    {
        return $this->belongsTo(User::class);
    }
    use HasFactory;
}
