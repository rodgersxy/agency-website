## Template 1: Full First-Time Deployment Guide for Laravel + Vite on Cpanel  

### Objective: Deploy a new Laravel project from scratch.   
### Phase A: Local Preparation  
```
    Build Assets: Run npm run build in your local project terminal.

    Clean Up: Delete the local node_modules and vendor folders.

    Zip Project: Compress the entire project folder into a single .zip file.
```

### Phase B: Cpanel Server Setup
```
    Database:

        Use the "MySQL® Database Wizard".

        Create a new database.

        Create a new database user and generate a strong password (save it).

        Assign "ALL PRIVILEGES" to the user for the database.

    File Upload:

        In "File Manager", go to your home directory (e.g., /home/username).

        Upload the project .zip file.

        Extract the zip file.

        Rename the extracted folder to your project's name (e.g., yourproject.com).

    Web Root Configuration:

        Navigate to public_html.

        Create a new .htaccess file.

        Paste in the "smart" redirect rule, updating the folder name:
        code Apache

            
        <IfModule mod_rewrite.c>
            RewriteEngine On
            RewriteCond %{REQUEST_FILENAME} -f [OR]
            RewriteCond %{REQUEST_FILENAME} -d
            RewriteRule ^ - [L]
            RewriteRule ^(.*)$ /yourproject.com/public/$1 [L]
        </IfModule>

 ```  

## Phase C: Application Configuration
```
    Create .env File:

        In your project folder (e.g., /home/username/yourproject.com), create a new file named .env.

        Copy the contents of .env.example into it.

        Fill in the following details exactly:

            APP_ENV=production

            APP_DEBUG=false

            APP_URL=https://yourproject.com

            DB_DATABASE, DB_USERNAME, DB_PASSWORD (use the full names from Cpanel and wrap the password in quotes if it has special characters).

            DB_HOST=localhost

    Bootstrap Path Fix (If needed for Laravel 11+ on Cpanel):

        Edit /yourproject.com/bootstrap/app.php.

        Add the usePublicPath() method to explicitly set the web root.
        code PHP

            
        $app = Application::configure(...)
            ->... // withRouting, withMiddleware, etc.
            ->create();

        $app->usePublicPath(dirname(__DIR__, 2) . '/public_html');

        return $app;
```
          

### Phase D: Final Terminal Commands
```
    Open the Cpanel "Terminal" and navigate to your project folder (cd yourproject.com).

    Run the commands in order:
    code Bash

        
    composer install --no-dev --optimize-autoloader
    php artisan key:generate
    php artisan migrate --force
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache

      

    Create any initial users (e.g., php artisan admin:create).

Template 2: Update Guide for an Existing Live Site

Objective: Deploy changes (new features, bug fixes) to your live application.

Choose the appropriate workflow based on your changes.
Workflow A: Minimal Changes (e.g., Text, simple HTML/Blade edit)

Use this when: You only edited text in a Blade file or a React component that has no new logic.

    Cpanel File Manager:

        Navigate to the specific file you changed (e.g., /cyberark.co.ke/resources/views/app.blade.php).

        Upload the single changed file, overwriting the old one.

    Cpanel Terminal:

        cd cyberark.co.ke

        Run the relevant clear command (e.g., php artisan view:clear for Blade files).

        Re-cache: php artisan view:cache

Workflow B: Frontend Changes (JS/CSS/React Components)

Use this when: You changed any file in resources/js, resources/css, added NPM packages, or changed tailwind.config.js.

    Local Preparation:

        Run npm run build on your local machine.

        Zip your local public/build folder into build.zip.

    Cpanel File Manager:

        Navigate to /home/gowieqaz/public_html/.

        Delete the existing build folder.

        Upload your new build.zip file.

        Extract build.zip.

        (Optional) Delete build.zip.

        If you changed any other source files (like a component in resources/js/), upload those individual files too.

    Cpanel Terminal:

        cd cyberark.co.ke

        Run a full clear and re-cache:
        code Bash

            
        php artisan optimize:clear
        php artisan config:cache
        php artisan route:cache
        php artisan view:cache
```
          

### Workflow C: Backend/Full-Stack Changes (The Safest Method)

Use this when: You changed backend logic (Controllers, Models), added Composer packages, changed routes, or made significant changes across the whole application.

    Local Preparation:

        Run npm run build.

        Delete local vendor and node_modules folders.

        Zip the entire project into update.zip.

    Cpanel File Manager:

        Go to your home directory (/home/gowieqaz).

        Rename your live project folder from cyberark.co.ke to cyberark.co.ke_old.

        Upload update.zip.

        Extract update.zip.

        Rename the extracted folder to cyberark.co.ke.

    Cpanel Configuration:

        Copy your .env file from the cyberark.co.ke_old folder into the new cyberark.co.ke folder.

    Cpanel Terminal:

        cd cyberark.co.ke

        Run the full command sequence:
        code Bash

        
    composer install --no-dev --optimize-autoloader
    php artisan migrate --force  # Only if you have new migrations
    php artisan optimize:clear
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache

      

Verification & Cleanup:

    Thoroughly test the live site.

    Once confirmed working, you can delete the cyberark.co.ke_old folder.