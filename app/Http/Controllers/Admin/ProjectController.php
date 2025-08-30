<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage; // Import Storage
use Illuminate\Validation\Rule;          // Import Rule
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the projects.
     */
    public function index()
    {
        // Fetches all projects (newest first) and passes them to the view.
        return Inertia::render('Admin/Projects/Index', [
            'projects' => Project::latest()->get()
        ]);
    }

    /**
     * Show the form for creating a new project.
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    /**
     * Store a newly created project in the database.
     */
    public function store(Request $request)
    {
        // Added 'unique:projects' to ensure no duplicate titles are created.
        $validated = $request->validate([
            'title' => 'required|string|max:255|unique:projects',
            'description' => 'required|string',
            'link' => 'nullable|url',
            'technologies' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        // Handle the file upload
        $imagePath = $request->file('image')->store('projects', 'public');
        $validated['image'] = $imagePath;

        Project::create($validated);

        return to_route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    /**
     * Show the form for editing the specified project.
     *
     * @param \App\Models\Project $project
     * @return \Inertia\Response
     */
    public function edit(Project $project)
    {
        // Pass the specific project data to the Edit view.
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project
        ]);
    }

    /**
     * Update the specified project in the database.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Project $project
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255', Rule::unique('projects')->ignore($project->id)],
            'description' => 'required|string',
            'link' => 'nullable|url',
            'technologies' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
        ]);

        // Unset the image from the validated data by default
        unset($validated['image']);

        if ($request->hasFile('image')) {
            // If a new image is uploaded, delete the old one
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            // Store the new image and add the path back to our validated data
            $imagePath = $request->file('image')->store('projects', 'public');
            $validated['image'] = $imagePath;
        }

        $project->update($validated);

        return to_route('admin.projects.index')->with('success', 'Project updated successfully.');
    }
}