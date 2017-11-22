// @flow
import React from 'react';
import {Link} from 'react-router-dom';

const RecipeLink = ({id, title, isGlutenFree}: Recipe) => (
  <span className="recipe-link">
    <Link to={`/${id}`}>{title}</Link>
    {isGlutenFree && (
      <img
        src="/assets/images/gluten-free.svg"
        alt="Gluten Free"
        className="gluten-free"
      />
    )}
  </span>
);

export default RecipeLink;
