# Folders and Files Organizers

## Description:
1. There are two applications- Folder-Wizard and Folder-File-Creator.
2. Folder-File-Creator:
   1. This is a web component which allows user to create folders and file.
   2. Upon selection of folder and file, different details will be asked to fill and after that folder or file will create successfully.
3. Folder-Wizard:
   1. This is application will show all created folders and files.
   2. User can login and signup on this application.
   3. Using this application, user can use folder-file-creator web-component to create folders and files.
   4. Application display created folders and files in tabular form.
4. Existing username- kritikasingh@gmail.com and Password- 12345678
5. For backend of this application Json-Server is used.
6. Git Url-https://github.com/kritika-singh-sengar/folders-files-organizer

## Technologies Used:
1. Svelte v3.57.0
2. ag-grid-community v29.3.5,
3. ag-grid-svelte v0.2.0,
4. bootstrap v5.2.3,
5. svelte-routing v1.8.9
6. node.js
7. json-server

# Project Setup:
1. Clone project : git clone https://github.com/kritika-singh-sengar/folders-files-organizer.git
2. On terminal run following commands:
   - For json server:
      1. npm install -g json-server
      2. cd db
      3. json-server --watch db.json
   - For Folder-file-creator:
      4. cd folder-file-creator
      5. npm install
      6. npm run dev
   - For Folder-wizard:
      7. cd folder-wizard
      8. npm install
      9. npm run dev

## Deployment:
1. Json-server is used as backend application. It is not deployed on any site. 
**So make sure to run json-server locally before running any application.**
2. Folder-File-Creator: 
   - deployment link: https://benevolent-buttercream-2b54a5.netlify.app/

## Images:  
1. Login Screen: 
   ![Login Screen](/images/login.png)

2. After Login:
   ![Main Screen](/images/main%20screen.png)

3. Create Folders and Files:
   ![Creator](/images/folder-file-creator.png)

4. After Folder Creation:
   ![After Folder Creation](/images/after%20adding%20data.png)

5. Random Url:
   ![Random Url](/images/random%20url%20click.png)