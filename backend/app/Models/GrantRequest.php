<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrantRequest extends Model
{
    protected $guarded = [];  
    public function student()
    {
        return $this->belongsTo(User::class);
    }
    use HasFactory;
}
