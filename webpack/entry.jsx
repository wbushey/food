// @flow
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {AppWithLoader} from './App';

const root = document.getElementById('root');
if (root) {
  render(
    <BrowserRouter>
      <AppWithLoader />
    </BrowserRouter>,
    root,
  );
}
