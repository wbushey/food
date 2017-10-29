// @flow
import React from 'react';
import {shallow} from 'enzyme';
import IngredientDisplay from '../Display';

describe('Ingredient', () => {
  test('renders correctly', () => {
    const component = shallow(<IngredientDisplay name="salt" amount="pinch" />);
    expect(component.find('.ingredient .name').text()).toEqual('salt');
    expect(component.find('.ingredient .amount').text()).toEqual('pinch');
  });
});
