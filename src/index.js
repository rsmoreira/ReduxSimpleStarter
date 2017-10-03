import React from 'react';
import ReactDOM from 'react-dom';

// https://console.developers.google.com/apis/credentials
// npm install --save youtube-api-search
const API_KEY = 'AIzaSyD61-V3Wx6uu89eHCxDm-3-dCRXlhFQvD';

// Create a new Component.  
// This Component should produce some HTML
// https://jsx.github.io/
const App = () => {
    return <div>Hi!</div>
}


// Take this Component generated HTML and put it on the page (in the DOM)]

ReactDOM.render(<App />, document.querySelector('.container'));