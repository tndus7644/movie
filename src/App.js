import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./Styled/Common.Styled";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddToFavourites from "./components/AddToFavourites";

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async (searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fcce40d0`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
            setMovies(responseJson.Search);
        }
    }

    const addFavouritesMovie = (movie) => {
        const newFavouritesList = [...favourites, movie];
        setFavourites(newFavouritesList);
    }

    useEffect(() => {
        getMovieRequest(searchValue);
    },[searchValue]);

    return(
        <Container>
            <GlobalStyle/>
            <Movieapp>
                <MovieListHeading heading={'Movies'}/>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Row>
                    <MovieList
                        movies={movies}
                        favouritesComponent={AddToFavourites}
                        handleFavoruitesClick={addFavouritesMovie}
                    />
                </Row>
                <Row>
                    <h1>Favourites Movies</h1>
                    <Row>
                        <MovieList movies={favourites} favoruiteComponent={AddToFavourites}/>
                    </Row>
                </Row>
            </Movieapp>
        </Container>
    )
}

const Container = styled.div`
  background: #141414;
  color: #fff;
  padding: 20px;
`;

const Movieapp = styled.div`
`;

const Row = styled.div`
`;

export default App;