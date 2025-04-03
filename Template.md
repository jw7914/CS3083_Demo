# Setup Enviornment

- Packages to install:
  - express (used to create a server)
  ```bash
  npm install express
  ```
  - mysql2 (used to query the database with Javascript)
  ```bash
  npm install mysql2
  ```
  - hbs (used to template - can render page dynamically based on data sent from server)
  ```bash
  npm install hbs
  ```
# Create File Layout
- Within the root of your project create a directory named views
- Within views place all your hbs files which you will template off of
  - Layout.hbs is required (root hbs file) you can just insert boiler plate and insert any global scripts/link imports

# Rendering
- You can render a template by calling res.render("home", {name: name})
  - First argument is the name of the hbs file without the .hbs
  - Second argument is a object with all the key values to be passed into the arugment
  - Variables can be accessed from .hbs files with {{ variable_name }} or {{{ variable_name }}}
    - Triple brackers escapes the html (good to use on user input that can generate harmful html)

# Running Server
- Just run node (or nodemon to autostart server on change) server.js
- Navigate to your routes that you have to see/test
