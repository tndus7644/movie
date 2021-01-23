import React from 'react';
import styled from 'styled-components';

const MovieListHeading = (props) => {

    return(
        <Container>
            <Col>
                <h1>{props.heading}</h1>
            </Col>
        </Container>
    )
}

const Container = styled.div`

`;

const Col = styled.div`
    h1{
      color: #fff;
    }
`;

export default MovieListHeading;