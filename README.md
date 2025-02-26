# Prerequisites

- Node.js [Install Here](https://nodejs.org/en/download)
  - Verify by running in terminal
    ```bash
    node -v
    ```
- npm (preferred) or equivalent Javascript package manager
  - Verify by running in terminal
    ```bash
    npm -v
    ```

# Different Approaches

- React Approach:
- 
- Templating Approach:
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
    npm install mysql2
    ```

# Removing Default Files

- Delete `App.css` and update App.jsx to remove imports.
- Delete `index.css` and update Main.jsx to remove imports.
- Remove the contents inside the `App()` function.
- Customize `index.html`:

  - Update the favicon:

    ```html
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    ```

    - Change `href="/vite.svg"` to the path of your logo/image to appear in the browser.
      - Ex:
        ```html
        <link rel="icon" type="image/png" href="src/assets/databases.png" />
        ```

  - Update the page title:
    ```html
    <title>Vite + React</title>
    ```
    - Change the title to your preferred name.
      - Ex:
      ```html
      <title>CS3083 Demo</title>
      ```

# Running code

- Start both frontend and server at the same time in different terminals
  - npm run dev (to run vite for frontend)
  - node server.js (to start up backend)
