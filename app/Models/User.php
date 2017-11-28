<?php

namespace App\Models;


class User extends Model
{
    protected $fillable = [
        'username',
        'name',
        'email',
        'username',
        'password',
    ];

    public function articles()
    {
        return $this->hasMany(Article::class);
    }
}
