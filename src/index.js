import React from 'react';
import ReactDOM from 'react-dom';

// Create a new Component.  
// This Component should produce some HTML
// https://jsx.github.io/
const App = () => {
    return <div>Hi!</div>
}


// Take this Component generated HTML and put it on the page (in the DOM)]

ReactDOM.render(<App />, document.querySelector('.container'));