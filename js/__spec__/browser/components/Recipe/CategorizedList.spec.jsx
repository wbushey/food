// @flow
import React from 'react';
import {shallow} from 'enzyme';
import RecipesList from 'Browser/components/Recipe/List';
import CategorizedRecipesList from 'Browser/components/Recipe/CategorizedList';
import mockRecipe from 'Mock/Recipe';

const mockData = {
  'cat a': [mockRecipe()],
  'cat b': [mockRecipe(), mockRecipe()],
};

const component = shallow(<CategorizedRecipesList data={mockData} />);

describe('CategorizedRecipesList', () => {
  test('it creates a header for each category', () => {
    expect(
      component.containsAllMatchingElements([<h2>cat a</h2>, <h2>cat b</h2>]),
    ).toBe(true);
  });

  test('it creates a RecipeList for each category', () => {
    expect(
      component.containsAllMatchingElements([
        <RecipesList data={mockData['cat a']} />,
        <RecipesList data={mockData['cat b']} />,
      ]),
    ).toBe(true);
  });
});
