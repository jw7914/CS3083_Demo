#Setup Enviornment
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
