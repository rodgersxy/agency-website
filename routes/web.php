<?php

use App\Models\Message;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('about');

Route::get('/services', function () {
    // You'll need to create a Services.jsx page
    return Inertia::render('Services');
})->name('services');

Route::get('/work', function () {
    return Inertia::render('Work', [
        // Fetch all projects, newest first, and pass them to the 'projects' prop
        'projects' => Project::latest()->get(),
    ]);
})->name('work');

Route::get('/contact', function (Request $request) {
    return Inertia::render('Contact', [
        'subject' => $request->query('subject', ''),
    ]);
})->name('contact');

Route::post('/contact', function () {
    $validated = request()->validate([
        'name' => 'required|string|max:255',
        'email' => 'required|email|max:255',
        'title' => 'required|string|max:255',
        'message' => 'required|string|max:2000',
    ]);

    // Create and save the new message to the database
    Message::create($validated);

    // Redirect back with the success flash message as before
    return back()->with('success', 'Your message has been sent successfully! We\'ll get back to you soon.');
})->name('contact.store');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ADMIN ROUTES
Route::middleware(['auth', 'is_admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [\App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
    Route::get('/projects', [\App\Http\Controllers\Admin\ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/create', [\App\Http\Controllers\Admin\ProjectController::class, 'create'])->name('projects.create');
    Route::post('/projects', [\App\Http\Controllers\Admin\ProjectController::class, 'store'])->name('projects.store');

    Route::get('/projects/{project}/edit', [\App\Http\Controllers\Admin\ProjectController::class, 'edit'])->name('projects.edit');
    // This route handles the form submission for updating the project
    Route::put('/projects/{project}', [\App\Http\Controllers\Admin\ProjectController::class, 'update'])->name('projects.update');

    Route::get('/messages', [\App\Http\Controllers\Admin\MessageController::class, 'index'])->name('messages.index');

    Route::delete('/messages/{message}', [\App\Http\Controllers\Admin\MessageController::class, 'destroy'])->name('messages.destroy');
    // Handles deleting all messages
    Route::delete('/messages', [\App\Http\Controllers\Admin\MessageController::class, 'destroyAll'])->name('messages.destroyAll');

});

require __DIR__.'/auth.php';
