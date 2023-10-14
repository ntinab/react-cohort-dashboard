## React Cohort Dashboard Challenge


### Learning Objectives

- Use ReactJS to build an implementation of a provided application design
- Use HTTP requests to interact with a RESTful API
- Use routing to allow navigation between pages in a React app

In this challenge, you'll create a social media style post feed. There is no boilerplate code provided - you'll be building this from scratch using the designs and specifications provided.


### Instructions

Fork and clone this repository to your machine.

Implement this design using, as a minimum, the below listed technologies. Note: you may need to open the file directly on your machine to view it properly.

- ReactJS
- React Router DOM version 6.4 or above
- A RESTful API

Use this REST API as your data source. In particular, you'll need the /posts, /comments and /users routes provided. Each of these routes has GET, POST, PUT and DELETE methods available. Scroll down to the Resources and Routes sections to see example usage.

You can use the command npx create-react-app . to create a new React application in the root directory of this project.


### Core Requirements

- Everything that can be its own component, should be its own component. You must provide evidence of planning what components you are going to create - this could be a component tree diagram, a bullet point list, a wireframe, whatever you like. Include your plan as a file in this repository.
- Users should be able to create a new post. The new post should be displayed at the top of the post feed.
- Users should be able to comment on existing posts.
- Posts and comments should show the initials of the author in a coloured circle.
- Clicking a posts title (under the author name) should take the user to a separate route that shows only that post and all of its comments. You must use a route for this, not an array filter.
- You must use this style guide to implement the colour scheme.
- The layout does not need to be mobile responsive, nor does it need to be pixel perfect. Get as close as you can, but your main focus should be on React - not CSS.


### Extension Requirements

- Only 3 comments should be visible on a post; if a post has more than 3 comments, the See previous comments link should expand the list of comments to display all of them.
- Clicking on a post / comment authors name or initials, the user initials in the top right of the app, or the Profile link in the left navigation menu should take the user to this Profile screen.
  --- Use the user with an ID of 1 as the currently logged in user. This is the user you should use when clicking the top right initials or the Profile menu item directly.
  --- The fields should be automatically populated with the correct data when loading any user profile.
- You should be able to update all of the users information.
- Posts and comments should be able to be updated and deleted.


### Advice

Break this project down into smaller, individual tasks. You could use a simple todo list, a project management board like Trello, anything you like. Not only will this reduce overwhelm and provide you with a clear path forward, it'll also ensure you have understood and accounted for every requirement.
