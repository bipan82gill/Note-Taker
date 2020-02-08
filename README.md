# Express Note Taker

This express application that uses a json file to save a user's todo notes.The user can input their notes as Title and Text field and it allows them to create ,delete and save notes in JSON object in database.
This application follows the following folder structure:

```
db/             // contains json file that stores notes
public/         // front end
  assets/       //Folder contains css and client-side JavaScript
    css/
    js/
  index.html
  notes.html
routes/         // API and HTML routes
  apiRoutes.js  
  htmlRoutes.js
server.js       // Runs the application
```
# User Stories:
```
AS A user

I WANT a note taker application

SO THAT I can create and refer to notes
```
# Demo 

Refer to the [design mockup](./Assets/noteTaker.gif).
Refer to the [design mockup](./Assets/noteTaker1.png)
Refer to the [design mockup](./Assets/noteTaker2.png)
Refer to the [design mockup](./Assets/noteTaker3.png)

## Business Context

When organizing your day, it is important to have a way of tracking the work that we're getting done. Rather than writing this information down,So this  application will save everything you need to do in a file that can be create, save, edit and delete the note which you have done .

## Minimum Requirements

* This application  deployed on GitHub and Heroku , follow this link.
  https://github.com/bipan82gill/Note-Taker

* The application allows the user to create a note with a title and description.

* A user has the ability to delete a note.

* The application uses a `json` file to store notes.

* The application uses an Express server to serve all API routes.

* The application uses an Express server to serve all client-side routes.

- - -

# Packages are required by this application 

  * npm install express
  * npm install path
  * npm install  fs