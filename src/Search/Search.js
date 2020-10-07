import React from 'react';
import './Search.css';
import SearchBar from '../SearchBar/SearchBar';
import Filter from '../Filter/Filter';

function Search(props) {
    return(
        <div>
            <SearchBar handleSearch={props.handleSearch}/>
            <Filter changePrintTypeFilter={props.changePrintTypeFilter}
            changeBookTypeFilter={props.changeBookTypeFilter}/>
        </div>
    )
}

export default Search;