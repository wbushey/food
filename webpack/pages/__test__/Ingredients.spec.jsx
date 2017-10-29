// @flow
import React from 'react';
import {shallow} from 'enzyme';
import Ingredients from '../Ingredients';
import CategorizedRecipesList from '../../components/Recipe/CategorizedList';

const aRecipe = {
  id: 'a-recipe',
  title: 'A Recipe',
  isGlutenFree: false,
  ingredients: {
    salt: 'some',
    chicken: 'some',
  },
  links: {
    self: '/api/a-address',
  },
};
const bRecipe = {
  id: 'b-recipe',
  title: 'B Recipe',
  isGlutenFree: false,
  ingredients: {
    salt: 'lots',
    fish: 'some',
    rice: 'optional',
  },
  links: {
    self: '/api/b-address',
  },
};
const cRecipe = {
  id: 'c-recipe',
  title: 'C Recipe',
  isGlutenFree: false,
  ingredients: {
    salt: 'lots',
    pepper: 'lots',
    rice: 'optional',
  },
  links: {
    self: '/api/b-address',
  },
};
const recipes = [aRecipe, bRecipe, cRecipe];

describe('Ingredients', () => {
  test('it creates a CategorizedRecipesList, categorized by ingredients', () => {
    const component = shallow(<Ingredients data={recipes} />);
    const list = component.find(CategorizedRecipesList);
    expect(list).toHaveLength(1);
    expect(list.props().data).toEqual({
      chicken: [aRecipe],
      fish: [bRecipe],
      pepper: [cRecipe],
      rice: [bRecipe, cRecipe],
      salt: [aRecipe, bRecipe, cRecipe],
    });
  });
});
