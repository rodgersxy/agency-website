<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\Storage; // <-- 1. IMPORT THE STORAGE FACADE

class Blog extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'image',
        'content',
        'seo_title',
        'seo_description',
        'published_at',
    ];

    // --- 2. ADD THIS PROPERTY ---
    // This tells Laravel to always include our new 'image_url' attribute
    // whenever the model is converted to an array or JSON for the frontend.
    protected $appends = ['image_url'];

    // Define the relationship to the User model (the author)
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    // --- 3. ADD THIS ACCESSOR METHOD ---
    // This method generates the full, public URL to the image.
    // The name is important: get{AttributeNameInSnakeCase}Attribute
    public function getImageUrlAttribute(): string
    {
        // This checks if an image path exists and if so, returns the full public URL
        // to the image in the 'storage' disk. Otherwise, it returns an empty string.
        return $this->image ? Storage::url($this->image) : '';
    }
}