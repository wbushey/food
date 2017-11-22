// @flow
import React from 'react';
import {Route} from 'react-router-dom';
import Index from 'Browser/pages/Index';
import Ingredients from 'Browser/pages/Ingredients';
import RecipePage from 'Browser/pages/RecipePage';
import SiteMenu from 'Browser/components/SiteMenu';
import WithLoader from 'Browser/hoc/WithLoader';

const App = (props: {data: Recipe[]}) => (
  <div className="app">
    <SiteMenu />
    <div>
      <Route exact path="/" component={() => <Index {...props} />} />
      <Route
        exact
        path="/ingredients"
        component={() => <Ingredients {...props} />}
      />
      <Route path="/recipes/:id" component={RecipePage} />
    </div>
  </div>
);

export const AppWithLoader = () => (
  <WithLoader component={App} uri="/api/recipes.json" />
);

export default App;
