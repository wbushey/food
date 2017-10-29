// @flow
import React from 'react';
import {shallow} from 'enzyme';
import RecipesList from '../List';

const recipes = [
  {
    id: 'soup',
    title: 'Soup',
    isGlutenFree: true,
    links: {
      self: 'api/soup',
    },
  },
  {
    id: 'bread',
    title: 'Bread',
    isGlutenFree: false,
    links: {
      self: 'api/bread',
    },
  },
];

let component;

describe('RecipesList', () => {
  beforeEach(() => {
    component = shallow(<RecipesList data={recipes} />);
  });

  test('creates an unordered list', () => {
    expect(component.find('ul').exists()).toBe(true);
  });

  test('renders a list item an RecipeLink for every Recipe', () => {
    const lis = component.find('li');
    expect(lis).toHaveLength(recipes.length);
    lis.forEach(li => {
      expect(li.find('RecipeLink').exists()).toBe(true);
    });
  });

  test('defines a key for every list item', () => {
    const lis = component.find('li');
    const keys = Array.from(new Set(lis.map(li => li.key())));
    expect(keys).toHaveLength(lis.length);
  });
});
