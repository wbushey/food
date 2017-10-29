// @flow
import React from 'react';
import {shallow} from 'enzyme';
import Index from '../Index';
import RecipesList from '../../components/Recipe/List';
import mockRecipe from '../../__mocks__/Recipe';

const mockData = [mockRecipe()];

describe('Index', () => {
  test('it renders a RecipesList with provided data', () => {
    const component = shallow(<Index data={mockData} />);
    const recipesList = component.find(RecipesList);
    expect(recipesList).toHaveLength(1);
    expect(recipesList.props().data).toEqual(mockData);
  });
});
