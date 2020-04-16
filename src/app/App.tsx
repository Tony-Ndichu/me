import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './views/Home';

declare let module: any;

ReactDOM.render(
  <Home compiler="typescript" framework="react" bundler="webpac" />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
