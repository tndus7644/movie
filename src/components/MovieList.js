import React from 'react';
import styled from 'styled-components';

const MovieList = (props) => {

    return(
        <Container>
            <>
                {props.movies.map((movie,index) => (
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.Poster} alt='movie'></img>
                    </div>
                ))}
            </>
        </Container>
    )
}

const Container = styled.div`
  
`;

export default MovieList;