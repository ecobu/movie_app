import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

class Home extends Component{

    state = {
        movies : []
        ,isLoading : false
    };

    setMovies = async () => {
        const {data : {data: {movies}}} = await axios.get('https://yts.mx/api/v2/list_movies.json');
        this.setState(movie => ({movies}));
        this.setState({isLoading : true});
    }

    componentDidMount(){
        this.setMovies();
    }

    LodingPage = () => {
        return <div>
            <span>
                Loading....
            </span>
        </div>
    };

    RenderMovie = () => {
        const {movies} = this.state;
        return (
            movies.map(list => {
                return <Movie key={list.id} title={list.title} summary={list.summary} poster={list.medium_cover_image} year={list.year} rating={list.rating}/>
            })
        );
    };

    render(){
        const {isLoading} = this.state;
        return(
            <section className="container">
                {!isLoading ? this.LodingPage() : this.RenderMovie()}
            </section>
        );
    }
}

export default Home;