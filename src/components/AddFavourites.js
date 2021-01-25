import React from 'react';
import styled from 'styled-components';

const AddFavourites = () => {

    return(
        <Container>
            <>
                <Span>Add to Favourites</Span>
                <svg
                    width='0.8em'
                    height='0.8em'
                    viewBox='0 0 16 16'
                    className='bi bi-heart-fill'
                    fill='red'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        fill-rule='evenodd'
                        d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                    />
                </svg>
            </>
        </Container>
    )
}

const Container = styled.div`
`;

const Span = styled.span`
    margin-right: 5px;
`;

export default AddFavourites;