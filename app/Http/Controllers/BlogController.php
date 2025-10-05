<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BlogController extends Controller
{
    // Display a list of all published blog posts
    public function index()
    {
        $blogs = Blog::whereNotNull('published_at')
                     ->where('published_at', '<=', now())
                     ->latest('published_at')
                     ->get();

        return Inertia::render('Blog/Index', [
            'blogs' => $blogs
        ]);
    }

    // Display a single blog post by its slug
    public function show(Blog $blog)
    {
        // Ensure only published blogs can be viewed publicly
        if (!$blog->published_at || $blog->published_at > now()) {
            abort(404);
        }

        return Inertia::render('Blog/Show', [
            'blog' => $blog
        ]);
    }
}