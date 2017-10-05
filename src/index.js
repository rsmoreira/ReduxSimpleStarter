import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearcBar from './components/search_bar';

// https://console.developers.google.com/apis/credentials
// npm install --save youtube-api-search
const API_KEY = 'AIzaSyBEoJMJHY_EvNt3l09kM4bKIlq-TR4WuL8';

YTSearch({key:API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});



// Create a new Component.  
// This Component should produce some HTML
// https://jsx.github.io/
const App = () => {
    return (
        <div>
            <SearcBar />
        </div>
    );
}


// Take this Component generated HTML and put it on the page (in the DOM)]

ReactDOM.render(<App />, document.querySelector('.container'));