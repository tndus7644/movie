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
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 15px;
  div.image-container{
    margin: 15px;
    max-width: 300px;
    img{
      max-width: 100%;
    }
  }
`;

export default MovieList;