import * as React from 'react';

interface IProps {
  compiler: string;
  framework: string;
  bundler: string;
}

const Home: React.FC<IProps> = (props) => {
  return (
    <h1>
      This is home {props.compiler} {props.framework} {props.bundler}
    </h1>
  );
};

export default Home;
