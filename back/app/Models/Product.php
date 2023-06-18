<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Translatable\HasTranslations;

class Product extends Model
{
    use HasFactory, HasApiTokens, HasTranslations, Sluggable;

    protected $fillable = [
        'category_id',
        'slug',
        'name',
        'description',
        'price',
        'discount',
        'sizes',
        'color',
        'group_code',
        'sleeve',
        'fit',
        'meta_title',
        'meta_keyword',
        'meta_description',
        'is_featured',
        'status'
    ];

    public $translatable = ['name', 'description'];

    public $casts = [
        'sizes' => 'array',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name->en'
            ]
        ];
    }
}
