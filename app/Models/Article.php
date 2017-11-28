<?php

namespace App\Models;

use App\Models\User;

class Article extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'body',
    ];

    public function users()
    {
        return $this->belongsTo(User::class);
    }
}
