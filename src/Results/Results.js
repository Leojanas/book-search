import React from 'react';
import './Results.css';
import ResultItem from '../ResultItem/ResultItem';

function Results(props) {
    if (props.results.length === 0){
        return(
            <div>
                <h2>Results</h2>
                <p>No results, enter a new search to see results.</p>
            </div>
        )
    }else{
    const resultItems = props.results.items.map((item, idx) =>{
        return(
                <ResultItem item={item} key={idx} /> 
        )
    })
    return(
        <div>
            {resultItems}
        </div>
    )
    }
}

export default Results;