// @flow
import React from 'react';
import RecipesList from './List';

const CategorizedRecipesList = ({data}: {data: {[key: string]: Recipe[]}}) => (
  <div>
    {Object.keys(data).map(ingredient => (
      <div key={ingredient}>
        <h2>{ingredient}</h2>
        <RecipesList data={data[ingredient]} />
      </div>
    ))}
  </div>
);

export default CategorizedRecipesList;
