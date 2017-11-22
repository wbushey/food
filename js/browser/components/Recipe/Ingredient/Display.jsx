// @flow
import React from 'react';

const IngredientDisplay = ({name, amount}: {name: string, amount: string}) => (
  <div className="ingredient">
    <span className="amount">{amount}</span>{' '}
    <span className="name">{name}</span>
  </div>
);

export default IngredientDisplay;
