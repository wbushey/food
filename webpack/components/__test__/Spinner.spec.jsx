// @flow
import React from 'react';
import {shallow} from 'enzyme';
import Spinner from '../Spinner';

describe('Spinner', () => {
  test('displays a loading indicator', () => {
    const component = shallow(<Spinner />);
    const img = component.find('img');

    expect(img.exists()).toBe(true);
    expect(img.prop('src')).toEqual('/assets/images/loading.png');
    expect(img.prop('alt')).toEqual('loading');
  });
});
