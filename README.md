# Monsters Rolodex

This is the "Monsters Rolodex" project created as part of the **Zero to Mastery** course on Udemy, taught by Andrei Neagoie. The main objective of this project is to build a React application where users can view, search, and filter a list of monsters.

## Project Description

**Monsters Rolodex** is a web application that allows users to view a list of monsters in a Rolodex-style card display. Each monster is an object that contains information such as name, email, and an avatar image. The application also allows users to search and filter monsters interactively.

## Features

- **Display a list of monsters**: Each monster has a name, email, and image.
- **Real-time search**: Allows users to search for monsters by name.
- **Interactive filtering**: The list of monsters automatically filters as users type in the search bar.
- **Responsive design**: The app is designed to adapt to different screen sizes (mobile, tablet, desktop).

## Technologies Used

- **React.js**: The main framework used to build the user interface.
- **CSS**: For styling the application.
- **create-react-app**: A tool for bootstrapping and configuring the React project.

## Project Structure

The project folder structure looks like this:

Monsters-Rolodex/ ├── public/ │ └── index.html ├── src/ │ ├── components/ │ │ ├── CardList.js │ │ ├── Card.js │ │ └── SearchBox.js │ ├── App.js │ ├── App.css │ └── index.js ├── package.json └── README.md


- `src/`: Contains the source code for the project, including components and application logic.
- `public/`: Contains static files, such as `index.html`.
- `package.json`: Contains project dependencies and configurations.

## Installation

To get the project running locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/bquirosa/2024-monsters-rolodex

2. Navigate to the project directory:

   ```bash
   cd monsters-rolodex

3. Install the dependencies:

   ```bash
   npm install

4. Start the application in your browser:

   ```bash
   npm start

## Conclusion
This project is a perfect example for learning React from scratch and covers a lot of essential concepts, such as functional components, event handling, state management, and communication between components. It’s also a great way to start building larger projects with React.
