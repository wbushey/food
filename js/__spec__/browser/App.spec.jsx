// @flow
import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount} from 'enzyme';
import App, {AppWithLoader} from 'Browser/App';
import SiteMenu from 'Browser/components/SiteMenu';
import Index from 'Browser/pages/Index';
import RecipePage from 'Browser/pages/RecipePage';
import Ingredients from 'Browser/pages/Ingredients';
import WithLoader from 'Browser/hoc/WithLoader';
import mockRecipe from 'Mock/Recipe';

const mockData = [mockRecipe()];

describe('App', () => {
  test('it renders the SiteMenu', () => {
    const wrapper = mount(
      <MemoryRouter>
        <App data={[]} />
      </MemoryRouter>,
    );

    expect(wrapper.find(SiteMenu)).toHaveLength(1);
  });

  test('it routes to root with provided data', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App data={mockData} />
      </MemoryRouter>,
    );

    const index = wrapper.find(Index);
    expect(index).toHaveLength(1);
    expect(index.props().data).toEqual(mockData);
  });

  test('it routes to Ingredients with provided data', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/ingredients']}>
        <App data={mockData} />
      </MemoryRouter>,
    );

    const ingredients = wrapper.find(Ingredients);
    expect(ingredients).toHaveLength(1);
    expect(ingredients.props().data).toEqual(mockData);
  });

  test('it routes to RecipePage', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/recipes/foo/bar']}>
        <App data={mockData} />
      </MemoryRouter>,
    );

    const recipePage = wrapper.find(RecipePage);
    expect(recipePage).toHaveLength(1);
    expect(recipePage.props().location.pathname).toEqual('/recipes/foo/bar');
  });
});

describe('AppWithLoader', () => {
  it('is App WithLoader with the correct uri', () => {
    expect(AppWithLoader()).toEqual(
      <WithLoader component={App} uri="/api/recipes.json" />,
    );
  });
});
