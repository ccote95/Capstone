### Magic the Gathering group finder

---

### Problem Solved

---

Magic the Gathering is a fun trading card game that requires 2 - 4 people to play depending on the format.
Thats where MtgConnect comes into play, with this application you will be able to create a profile and start looking for groups to play with.
Within each post you will see the type of format someone is looking to play and their deck that they are trying to use.
You will be able to interact with each post by leaving comments if you would like to play or not.

---

### Database

[Capstone Api](https://github.com/ccote95/Capstone-api) 

---

### Languages Used
---
1. React
2. JavaScript
3. Html
4. CSS

---

### Installation and Setup

---

You're going to have to clone down this repository. You will need node and npm installed globaly on your machine

### Install:
1. npm install

### Database:
1. Json-server database.json -p 8000

### Run Application:
1. npm run dev
2. Navigate to the login page
http://localhost:5173/login


---

### Essential structure

##### When you login
- As a user when you login you will be navigated to a welcome page

##### All Posts
- Users can view posts by all users
- Users can create a post and filter posts based on the format of the post
- A user can click on the title of a post and be navigated to the post details page.


##### Post Details
- A user can comment on a post if they so wish to
- If you are the author of a post you will see a game over button render
- When you click the game over button the post will be removed from the all posts page.


##### Profile
- A user can edit their profile and add new decks for them to use in posts
- When you edit your profile you can delete decks if you'd like.

##### My Posts
- When you navigate to the my posts page you will only see the posts you have made.


##### My Comments
- When you navigate to the my comments page you will only see the comments you have made
- When you click on the post title in one of your comments you will be navigate to that posts details

---

### Wireframe
[Wireframe](https://miro.com/app/board/uXjVNj8wUwk=/)

---

### ERD
[ERD](https://dbdiagram.io/d/Capstone-65ea289ab1f3d4062c6725d5)

