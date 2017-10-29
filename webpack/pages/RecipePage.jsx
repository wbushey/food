// @flow
import React from 'react';
import RecipeDisplay from '../components/Recipe/Display';
import WithLoader from '../hoc/WithLoader';

const RecipePage = ({location}: {location: {pathname: string}}) => (
  <WithLoader
    component={RecipeDisplay}
    uri={`/api/${location.pathname}.json`}
  />
);

export default RecipePage;
