<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        // Check if the user is authenticated and if they are an admin.
        if (auth()->check() && auth()->user()->is_admin) {
            return $next($request);
        }

        // If not, redirect them to the home page.
        abort(403, 'Unauthorized action.');
    }
}