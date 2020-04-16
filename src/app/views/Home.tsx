import * as React from 'react';
import styled from 'styled-components';
import Header from './templates/Header';

interface IProps {}

const Home: React.FC<IProps> = (props) => {
  return (
    <Wrapper>
      <Banner>
        Hi, my name is <Name>Tony Ndichu</Name> and I am all about great
        products.
      </Banner>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Name = styled.div`
  color: #00ff42;
`;

const Banner = styled.div`
  color: white;
  font-size: 40px;
  text-align: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding-top: 10%;
  }
`;

export default Home;
