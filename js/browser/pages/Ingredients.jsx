// @flow
import React from 'react';
import CategorizedRecipesList from 'Browser/components/Recipe/CategorizedList';

const categorizedByIngredient = (recipes: Recipe[]) => {
  const categorized: {[key: string]: Recipe[]} = {};
  recipes.forEach(recipe => {
    const {ingredients} = recipe;
    if (ingredients) {
      Object.keys(ingredients)
        .sort()
        .forEach(ingredient => {
          if (categorized[ingredient] === undefined)
            categorized[ingredient] = [];

          categorized[ingredient].push(recipe);
        });
    }
  });

  return categorized;
};

const Ingredients = ({data}: {data: Recipe[]}) => (
  <CategorizedRecipesList data={categorizedByIngredient(data)} />
);

export default Ingredients;
