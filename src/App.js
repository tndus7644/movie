import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./Styled/Common.Styled";
import MovieList from "./components/MovieList";

const App = () => {

    const [movies, setMovies] = useState([]);

    const getMovieRequest = async () => {
        const url = `http://www.omdbapi.com/?s=harry potter&apikey=fcce40d0`;

        const response = await fetch(url);
        const responseJson = await response.json();

        if(responseJson.Search){
            setMovies(responseJson.Search);
        }
    }

    useEffect(() => {
        getMovieRequest();
    },[]);

    return(
        <Container>
            <GlobalStyle/>
            <Movieapp>
                <Row>
                    <MovieList movies={movies}/>
                </Row>
            </Movieapp>
        </Container>
    )
}

const Container = styled.div`
  background: #141414;
  color: #fff;
`;

const Movieapp = styled.div`
  background: #141414;
  color: #fff;
`;

const Row = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

export default App;