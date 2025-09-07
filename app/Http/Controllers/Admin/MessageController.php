<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Messages/Index', [
            'messages' => Message::latest()->get()
        ]);
    }

    // --- ADD THIS 'destroy' METHOD ---
    public function destroy(Message $message)
    {
        $message->delete();

        return to_route('admin.messages.index')->with('success', 'Message deleted successfully.');
    }

    // --- ADD THIS 'destroyAll' METHOD ---
    public function destroyAll()
    {
        // This is more efficient for deleting all records
        Message::truncate();

        return to_route('admin.messages.index')->with('success', 'All messages have been deleted.');
    }
}