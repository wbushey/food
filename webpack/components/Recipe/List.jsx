// @flow
import React from 'react';
import RecipeLink from './Link';

const RecipesList = ({data}: {data: Recipe[]}) => (
  <ul>
    {data.map(recipe => (
      <li key={recipe.title}>
        <RecipeLink {...recipe} />
      </li>
    ))}
  </ul>
);

export default RecipesList;
