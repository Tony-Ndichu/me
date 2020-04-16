import * as React from 'react';
import Home from '../views/Home';
import Spincity from '../views/Spincity';

interface IProps { }

const FullPage: React.FC<IProps> = () => {
  return (
    <>
      <Home />
      <Spincity />
    </>
  );
};

export default FullPage;
