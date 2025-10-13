<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Active_player extends Model
{
    protected $fillable = [
        'user_id',
        'user_name',
        'icon',
        'stake',
        'is_guest'
    ];
}
