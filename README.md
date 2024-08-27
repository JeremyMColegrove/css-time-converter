# Getting Started with Your Node TypeScript NPM Package

Follow these steps to customize and set up your package:

1. **Update Package Name**  
   - Modify _your-package-name_ in _package.json_ and other relevant files to reflect your package's name.

2. **Update Command Line Interface (CLI) Command**  
   - Update the _bin/*_ files to define the CLI command you want to use.
   - Reflect these changes in the _package.json_ under the _bin_ section.

3. **Setup Git Repository**  
   - Initialize your Git repository.
   - Add GitHub Actions as _coverall-github-action-workflow_ (copy and paste is fine, but feel free to modify if needed).

4. **Fill in the README**  
   - Provide detailed information about your package in the README file.

5. **Add Your Code**  
   - Add your package files to the _src/*_ directory.

6. **Use .js Extensions**  
   - Ensure that all imports use _.js_ extensions, since this package outputs both ESM and CJS formats.

7. **Modify .gitignore**  
   - The _.gitignore_ file is already set up, but feel free to add any other files you want to ignore.

8. **Configure TypeScript**  
   - Modify the TypeScript configuration in _config/*_ to suit your needs.
   - _esModuleInterop_ is turned off in _tsconfig_ because this is a package. If you turn it on, any other package using this will need to have it enabled too.
# css-time-converter
