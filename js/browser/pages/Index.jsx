// @flow
import React from 'react';
import RecipesList from 'Browser/components/Recipe/List';

const Index = ({data}: {data: Recipe[]}) => (
  <div>
    <h1>Recipes</h1>
    <RecipesList data={data} />
  </div>
);

export default Index;
