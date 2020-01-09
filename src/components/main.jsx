import React from 'react';
import ReactDOM from 'react-dom';
import Application from 'components/Application';
import Configuration from 'components/Configuration';

import 'styles/main.scss';

ReactDOM.render(
  <Application configuration={() => ({ ...new Configuration() })} />,
  document.getElementById('root'),
);
