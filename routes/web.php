<?php

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
    // You'll need to create a Work.jsx page
    return Inertia::render('Work');
})->name('work');

Route::get('/contact', function (Request $request) { // <-- 3. Inject the Request
    return Inertia::render('Contact', [
        // 4. Get 'subject' from the URL and pass it as a prop.
        // If it doesn't exist, it will default to an empty string.
        'subject' => $request->query('subject', ''),
    ]);
})->name('contact');


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
});

require __DIR__.'/auth.php';
