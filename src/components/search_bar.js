import React, { Component } from 'react'; // ', { Component }' - it avoids you writing 'extends React.Component', so you just need to write 'extends Component'

// ES6 - React Class Based component

class SearchBar extends Component {
    render() {
        return <input onChange={ event => console.log(event.target.value) } />;

    }

}


export default SearchBar;