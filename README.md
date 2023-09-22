#Parallax Demo
This project demonstrates a basic parallax scrolling effect using HTML, CSS (SCSS), and JavaScript. You can see different layers moving at different speeds when scrolling, which creates a depth effect.

##Features
- Multi-layered parallax effect
- Uses CSS transformations for layers
- Easily customizable styles and layers with SCSS
- No external libraries, all vanilla CSS and JS
- One very pointless button!

##Demo
![Demo GIF](./public/Parallax_Demo.gif)

##Tech Stack
- HTML
- CSS (SCSS)
- JavaScript (React)

##Prerequisites
Make sure you have Node.js and npm installed on your system. If not, you can download and install them from the official Node.js website.

##Installation
1. Clone the repository
```
git clone https://github.com/macleann/parallax-demo.git
```

2. Navigate to the project folder
```
cd parallax-demo
```

3. Install dependencies
```
npm install
```

4. Start the project
```
npm start
```

The application will open in your browser at http://localhost:3000/.

##How to Use
Scroll down the page to see the parallax effect in action. Each section represents a different "scene" with different layers. You can modify these scenes in App.js and App.scss or css, whichever you prefer.

##Structure
- `App.js`: Contains the main React component for the application. All sections and layers are defined here.
- `App.scss`: Contains the styles for the project, written in SCSS for maintainability and readability. It includes various mixins and variables.
- `App.css`: Just to make sure that one could, though it's a lot less DRY. Not recommended.

##Credits
Background images: [Lorem Picsum](https://picsum.photos/)
Fonts: [Google Fonts](https://fonts.google.com/)
Tutorials followed: [Simple Pure CSS Parallax Scroll Tutorial](https://www.youtube.com/watch?v=rLrLJQBG_qo) by [Developer Filip](https://www.youtube.com/@developerfilip) and [This Simple Trick Makes Your Website 83% Better Looking](https://www.youtube.com/watch?v=mxHoPYFsTuk) by [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)

##Author
Neil MacLean - LinkedIn