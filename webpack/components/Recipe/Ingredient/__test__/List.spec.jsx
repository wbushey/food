// @flow
import React from 'react';
import {shallow} from 'enzyme';
import IngredientDisplay from '../Display';
import IngredientList from '../List';

let component;

const ingredients = {
  salt: 'pinch',
  pepper: '1 cup',
};

describe('IngredientList', () => {
  beforeEach(() => {
    component = shallow(<IngredientList ingredients={ingredients} />);
  });

  test('displays a header', () => {
    expect(component.text()).toContain('Ingredients');
  });

  test('creates an unordered list', () => {
    expect(component.find('ul').exists()).toBe(true);
  });

  test('renders a list item an Ingredient for every ingredient', () => {
    const lis = component.find('li');
    expect(lis).toHaveLength(Object.keys(ingredients).length);
    lis.forEach(li => {
      expect(li.find(IngredientDisplay).exists()).toBe(true);
    });
  });

  test('defines a key for every list item', () => {
    const lis = component.find('li');
    const keys = Array.from(new Set(lis.map(li => li.key())));
    expect(keys).toHaveLength(lis.length);
  });
});
