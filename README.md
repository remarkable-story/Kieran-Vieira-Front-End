# Kieran-Vieira-Front-End
Front end for Remarkable Story project.

# Tech Used:

* [React 16.7.0](https://reactjs.org/docs/getting-started.html)
* [React Redux 6.0.0](https://redux.js.org/basics/usage-with-react)
* [React Router 4.3.1](https://reacttraining.com/react-router/core/guides/philosophy)
* [Redux 4.0.1](https://redux.js.org/)
* [Redux Logger 3.0.6](https://redux.js.org/advanced/middleware)
* [Redux Thunk 2.3.0"](https://redux.js.org/advanced/middleware)
* [Styled Components 4.1.3](https://www.styled-components.com/)

# File Structure:

### Front end

App.js contains all major routes for our project which link to each individual views.

The Views folder contains all views of different pages such as Home Page, Login page, etc.

The Views are all in the Views folder and get imported with the specific components they need which can be found in the components folder.

Inside the components folder are sub folders containing reusable components related to the folder name.

Views are the container components whereas each component is a presentational component.

### Back End

All calls to the back end are made using redux and can be found in the src/store/actions folder. 

Most of the calls send dispatch actions to their respective reducer file which can be found in src/store/reducers.

State is then passed down into components by using react-redux connect HOC which maps state to props etc.

Backend is hosted [here](https://remarkable-story-backend.herokuapp.com)

# About me and contact info

I am a Full Stack Web Developer and Graphic designer looking to improve user experience and interfaces on many levels. 

### You can contact me here:

* Email: kieranvieira@live.com
* Website: http://kieranvieira.com/
* Instagram: [@VieiraIllustration](https://www.instagram.com/vieiraillustration/)

## The website is hosted [here](https://5c5ccb2904bd58e197f3056f--sharp-tereshkova-a037b6.netlify.com/)
