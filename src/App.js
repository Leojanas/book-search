import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search';
import Results from './Results/Results';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      'print-type': 'all',
      'book-type': 'all',
    }
  }
  handleSearch(term){
    const search = encodeURI(term);
    const printType = encodeURI(this.state["print-type"]);
    let filterUrl = ''
    if(this.state["book-type"] === 'all'){

    }else{
      filterUrl = `&filter=` + this.state["book-type"];
    }
    const url = `https://www.googleapis.com/books/v1/volumes?q=` + search + 
    `&printType=` + printType + filterUrl + `&key=AIzaSyA2pDUFwVJzco_WWRTmC79Axs7HSEqoZB4`;
   
    fetch(url)
    .then(raw => raw.json())
    .then(results => {
      this.updateResults(results)}
    )
    .catch(e => console.log('Error!' + e));
  }
  changePrintTypeFilter(option){
    this.setState({
      'print-type': option
    })
  }
  changeBookTypeFilter(option){
    this.setState({
      'book-type': option
    })
  }
  updateResults(results){
    if(results.totalItems > 0){
      this.setState({
        results
      })
    }else{
      this.setState({
        results: []
      })
    }
  }
 
  componentDidMount(){

  }
  render(){
    return (
      <main className='App'>
        <Header />
        <Search 
          handleSearch={term => this.handleSearch(term)}
          changePrintTypeFilter={option => this.changePrintTypeFilter(option)}
          changeBookTypeFilter={option => this.changeBookTypeFilter(option)}
        />
        <Results results={this.state.results}/>
        {/* content goes here */}
      </main>
    );
  }

}

export default App;
