import React from 'react';
import './Filter.css';

class Filter extends React.Component {
    render(){
        return(
            <div>
                <label htmlFor='print-type'>Print Type: </label>
                <select name='print-type' onChange={e => this.props.changePrintTypeFilter(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='books'>Books</option>
                    <option value='magazines'>Magazines</option>
                </select>
                <label htmlFor='book-type'>Book Type: </label>
                <select name='book-type' onChange={e => this.props.changeBookTypeFilter(e.target.value)}>
                    <option value='all'>All</option>
                    <option value='free-ebooks'>Free E-Book</option>
                    <option value='ebooks'> All E-Books</option>
                </select>
            </div>
        )
    }
   
}

export default Filter;