import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';

interface IProps {}

const App: React.FC<IProps> = (props) => {
  const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 !important;
    background-color: white;
    font-family: 'Fredoka One', cursive;
  }
`;

  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          {routes.map((prop) => {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={prop.path}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
