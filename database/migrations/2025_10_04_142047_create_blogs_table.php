<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link to the author
            $table->string('title');
            $table->string('slug')->unique(); // For clean, SEO-friendly URLs
            $table->string('image'); // Path to the featured image
            $table->longText('content'); // The main body of the blog post
            $table->string('seo_title')->nullable(); // For overriding the main title in search results
            $table->text('seo_description')->nullable(); // The meta description for search results
            $table->timestamp('published_at')->nullable(); // To allow for scheduled posts
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
