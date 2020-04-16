import * as React from 'react';
import styled from 'styled-components';
import Header from './templates/Header';
import Button from '../components/Button';
import recordPlayer from './assets/record_player.jpg';
import recordPlayerVideo from './assets/record_video.mp4';
import Works from '../containers/Works';
// import Iframe from 'react-iframe';

interface IProps { }

const Home: React.FC<IProps> = (props) => {
  // const hideImage = () => {
  //   console.log('wow');
  // };
  return (
    <>
      <Background bgImage={recordPlayer} />
      <Video>
        <video
          height="100%"
          width="100%"
          muted
          poster={recordPlayer}
          loop={true}
          autoPlay={true}
        >
          <source src={recordPlayerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Video>
      <Hue />
      <Wrapper>
        <Header />
        <Banner>
          Hi, my name is <Name>Tony</Name> and I am a
          <Title>Front-End Engineer</Title>
          {/* and I <Heart role="img" aria-label="love">
            ❤️
          </Heart>
          to build awesome products. */}
        </Banner>

        <Button label="Let me explain" />
      </Wrapper>
      <Works />
    </>
  );
};

// const Heart = styled.span`
//   padding: 0px 10px 0px 10px;
// `;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 4;
`;

const Title = styled.div`
  color: #00e1d9;
`;
const Video = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
`;

const Background = styled.div<{ bgImage: string }>`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-repeat: repeat;
  background-size: cover;
  z-index: 1;
`;

const Hue = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 3;
  background-color: #00008b;
  opacity: 0.7;
`;

const Name = styled.div`
  color: #00ff42;
`;

const Banner = styled.div`
  color: white;
  font-size: 40px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  margin-top: 50vw;
  margin-bottom: 15vw;
  word-spacing: normal;
  font-family: 'Bangers', cursive;

  @media (min-width: 768px) {
    font-size: 60px;
    margin-top: 20vw;
    margin-bottom: 10vw;
  }
`;

export default Home;
