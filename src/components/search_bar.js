import React, { Component } from 'react'; // ', { Component }' - it avoids you writing 'extends React.Component', so you just need to write 'extends Component'

// ES6 - Class-Based component
// Only Class-Based components have state

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
    }
    
    render() {
        return (
            <div className="search-bar">
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div> 
        );
    }
    
    onInputChange(term) {
        this.setState({term})
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;