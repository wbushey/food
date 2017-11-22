// @flow
import React from 'react';
import IngredientDisplay from './Display';

const IngredientList = ({
  ingredients,
}: {
  ingredients: {[key: string]: string},
}) => (
  <div className="ingredients">
    <p>
      <strong>Ingredients</strong>
    </p>
    <ul>
      {Object.keys(ingredients).map(ingredient => (
        <li key={ingredient}>
          <IngredientDisplay
            name={ingredient}
            amount={ingredients[ingredient]}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default IngredientList;
