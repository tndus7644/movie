import React from 'react';
import styled from 'styled-components';

const MovieList = (props) => {

    const FavouritesComponent = props.favouritesComponent;

    return(
        <Container>
            <>
                {props.movies.map((movie,index) => (
                    <div className='image-container d-flex justify-content-start m-3'>
                        <img src={movie.Poster} alt='movie'/>
                        <div
                            onClick={() => props.handleFavoruitesClick(movie)}
                            className={'overlay'}
                        >
                            <FavouritesComponent/>
                        </div>
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
    position: relative;
    transition: 0.3s;
    cursor: pointer;
    &:hover{
      transform: scale(1.02);
    }
    &:hover .overlay{
      opacity: 1;
    }
    img{
      max-width: 100%;
    }
  }
  
  div.overlay{
    position: absolute;
    width: 100%;
    transition: 0.3s;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default MovieList;