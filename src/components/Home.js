import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Home from '@components/Home';

const render = (Home) => {
  const App = hot(Home);
  ReactDOM.render(<App />, document.getElementById('root'));
};
render(Home);
