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

# Setup Environment

- Vite will be used as the JavaScript build tool (`npx create-react-app` can be used too).

  - Create a project using:
    ```bash
    npm create vite@latest
    ```
  - Follow the prompted steps:

    - Enter a project name (or press Enter for default).
    - Set the package name (or press Enter for default).
    - Select a framework: **React**.
    - Select a variant: **JavaScript**.
    - cd (project name)
    - npm install
    - npm run dev (to see default vite provided website)

  - Extra packages to install:
    - React router dom (used for route handling)
    ```bash
    npm install react-router-dom
    ```
    - mysql2 (used to query the database with Javascript)
    ```bash
    npm install mysql2
    ```
    - express (used to create a server for frontend to make database queries)
    ```bash
    npm install express
    ```
    - cors (used to allow CORS (cross origin resource sharing) from server to frontend)
    ```bash
    npm install cors
    ```
    - axios - optional (simplifies making requests to your backend)
    ```bash
    npm install axios
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
