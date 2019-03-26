// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react Component
const App = () => {
  return(
    <div>
    <strong> Hi! </strong> there 🙂
    </div>
  );
};

//Take a react Component and show it on the screen.
ReactDOM.render(
  <App />,
  document.querySelector('#root')

);