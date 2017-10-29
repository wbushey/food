// @flow
import React from 'react';
import {shallow} from 'enzyme';
import SiteMenu from '../SiteMenu';

describe('SiteMenu', () => {
  test('toggles the dropdown menu', () => {
    const component = shallow(<SiteMenu />);

    expect(component.instance().state.expanded).toBe(false);
    expect(component.find('nav.top-bar.expanded')).toHaveLength(0);

    component.find('.menu-icon button').simulate('click');
    expect(component.instance().state.expanded).toBe(true);
    expect(component.find('nav.top-bar.expanded')).toHaveLength(1);

    component.find('.menu-icon button').simulate('click');
    expect(component.instance().state.expanded).toBe(false);
    expect(component.find('nav.top-bar.expanded')).toHaveLength(0);
  });
});
