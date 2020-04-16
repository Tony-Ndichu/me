import * as React from 'react';
import styled from 'styled-components';
import Collage from '../containers/Collage';

interface IProps { }
const Spincity: React.FC<IProps> = () => {
  return <Container>
    <CollageContainer>
      <Collage />
    </CollageContainer>

    <Description>This is one of them</Description>
  </Container >
};

const Container = styled.div`
  display: block;
  height: 100vh;
  width: 100%;
  background-color: black;
  opacity: 1;
  z-index: 1;
`;


const CollageContainer = styled.div`
width: calc(100% - 60px);
padding: 30px;
`;

const Description = styled.div`
font-size: 40px;
font-weight:  bold;
color: white;
text-transform: uppercase;
font-family: 'Bangers', cursive;
`;

export default Spincity;
