<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
// use App\Models\Message; // <-- Import Message model
use App\Models\Project; // <-- Import Project model
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // Fetch the counts from the database
        $projectCount = Project::count();
        // $unreadMessagesCount = Message::whereNull('read_at')->count();
        // We'll add a blog count later when we create the blog feature
        $blogCount = 0; // Placeholder for now

        // Pass the data as props to the React component
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'projects' => $projectCount,
                // 'messages' => $unreadMessagesCount,
                'blogs' => $blogCount,
            ]
        ]);
    }
}