import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            term: ''
        }
    }
    changeSearch(term){
        this.setState({
            term
        })
    }
    render(){
        return(
            <div>
                <label htmlFor='search'>Search: </label>
                <input type='text' name='search' value={this.state.term} onChange={e => this.changeSearch(e.target.value)} />
                <button onClick={e => this.props.handleSearch(this.state.term)}>Search</button>
            </div>
        )
    }

}

export default SearchBar;