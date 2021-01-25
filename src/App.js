import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import {GlobalStyle} from "./Styled/Common.Styled";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.Search) {
            setMovies(responseJson.Search);
        }
    };

    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
    };

    useEffect(() => {
        getMovieRequest(searchValue);
    }, [searchValue]);

    return (
        <Container>
            <GlobalStyle/>
            <div className='container-fluid movie-app'>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Movies' />
                    <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
                </div>
                <div className='row'>
                    <MovieList
                        movies={movies}
                        favouriteComponent={AddFavourites}
                        handleFavouritesClick={addFavouriteMovie}
                    />
                </div>
                <div className='row d-flex align-items-center mt-4 mb-4'>
                    <MovieListHeading heading='Favourites' />
                </div>
                <div className='row'>
                    <MovieList movies={favourites} favouriteComponent={AddFavourites} />
                </div>
            </div>
        </Container>
    );
};

const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #333;
  padding: 10px 30px;
  margin: 0 auto;
`;

export default App;