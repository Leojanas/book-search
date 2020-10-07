import React from 'react';
import './ResultItem.css';

function ResultItem(props) {
    return(
        <div>
            <h2>{props.item.volumeInfo.title}</h2>
            <p>Author: {props.item.volumeInfo.authors}</p>
        </div>
    )
}

export default ResultItem;