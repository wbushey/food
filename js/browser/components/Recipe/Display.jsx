import React from 'react';
import {Parser} from 'html-to-react';
import IngredientList from './Ingredient/List';

const RecipeDisplay = ({data}: {data: Recipe}) => (
  <div className="recipe">
    <h1>{data.title}</h1>
    <div className="meta">
      {data.isGlutenFree && (
        <div className="gluten-free">
          <img
            src="/assets/images/gluten-free.svg"
            alt="Gluten Free"
            className="gluten-free"
          />
          <p>
            <em>Gluten Free</em>
          </p>
        </div>
      )}
      {data.time && (
        <p>
          <strong>Time to Prepare</strong>: {data.time}
        </p>
      )}
      {data.servings && (
        <p>
          <strong>Number of Servings</strong>: {data.servings}
        </p>
      )}
      {data.ingredients && <IngredientList ingredients={data.ingredients} />}
    </div>
    <div className="body">{new Parser().parse(data.content)} </div>
  </div>
);

export default RecipeDisplay;
