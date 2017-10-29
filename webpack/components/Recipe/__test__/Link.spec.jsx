// @flow
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {shallow, render} from 'enzyme';
import RecipeLink from '../Link';
import mockRecipe from '../../../__mocks__/Recipe';

const recipe = mockRecipe();

describe('RecipeLink', () => {
  test('renders a link with the correct text and URL ', () => {
    const component = render(
      <MemoryRouter>
        <RecipeLink {...recipe} />
      </MemoryRouter>,
    );
    const link = component.find('a');
    expect(link.text()).toEqual('A Recipe');
    expect(link.prop('href')).toEqual('/a-recipe');
  });

  test('renders an appropriate image for a gluten free recipe', () => {
    recipe.isGlutenFree = true;
    const component = shallow(<RecipeLink {...recipe} />);
    const img = component.find('img');
    expect(img.exists()).toBe(true);
    expect(img.prop('src')).toEqual('/assets/images/gluten-free.svg');
  });

  test('does not render an image for a glutenous recipe', () => {
    recipe.isGlutenFree = false;
    const component = shallow(<RecipeLink {...recipe} />);
    const img = component.find('img');
    expect(img.exists()).toBe(false);
  });
});
