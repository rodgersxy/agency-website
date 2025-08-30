<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage; // <-- Import Storage

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'image',
        'description',
        'link',
        'technologies',
    ];

    // This tells Laravel to always include our new 'image_url' attribute
    // whenever the model is converted to an array or JSON.
    protected $appends = ['image_url'];

    // This is the accessor. The name is important:
    // get{AttributeName}Attribute
    public function getImageUrlAttribute(): string
    {
        // This returns the full public URL to the image in the 'storage' disk
        return Storage::url($this->image);
    }
}