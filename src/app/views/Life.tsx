import * as React from 'react';
import styled from 'styled-components';

interface IProps {}
const Life: React.FC<IProps> = () => {
  return <Container>Second section</Container>;
};

const Container = styled.div`
  display: block;
  height: 100vh;
  background-color: black;
`;
export default Life;
