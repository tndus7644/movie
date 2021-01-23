import React from 'react';
import styled from 'styled-components';

const SearchBox = (props) => {

    return(
        <Container>
            <Form className={'col4'}>
                <input type="text"
                       className={'form-control'}
                       value={props.value}
                       onChange={(e) => props.setSearchValue(e.target.value)}
                       placeholder={'검색하세요'}
                />
                <Button>검색</Button>
            </Form>
        </Container>
    )
}
const Container = styled.div`

`;

const Form = styled.form`
  height: 40px;
    input{
      width: 300px;
      padding: 8px;
      border: none;
    }
`;

const Button = styled.button`
  background: #88dbc3;
  width: 60px;
  user-select: none;
  cursor: pointer;
  border: none;
  padding: 8px;
`;



export default SearchBox;