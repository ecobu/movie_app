import React, { Component } from 'react';
import axios from 'axios';
import Movies from './Movies';

class App extends Component{
  state = {
    isLoading : true
    ,movies : []
  };

  getMovies = async () => {
    const {data : {data : {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json');
    this.setState({movies, isLoading : false});
  }

  componentDidMount(){
    this.getMovies();
  }

  renderMovies = () => {
    const {movies} = this.state;
    return (
      <ul>
        {movies.map(list => {
          console.log(list.id);
          return (<Movies id={list.id} year={list.year} summary={list.summary} title={list.title} poster={list.medium_cover_image}/>)
        })}
      </ul>
    );
  };

  render(){
    const {isLoading} = this.state; 
    return (
      <div>{isLoading ? 'Loading' : this.renderMovies()}</div>
    );
  }
}

export default App;
