<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Category extends Model
{
    use HasFactory, HasTranslations, Sluggable;

    protected $fillable = [
        'name',
        'slug',
        'meta_title',
        'meta_keyword',
        'meta_description'
    ];

    public $translatable = ['name'];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name->en'
            ]
        ];
    }
}
