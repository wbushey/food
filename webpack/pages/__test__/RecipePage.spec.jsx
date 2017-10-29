// @flow
import React from 'react';
import {shallow} from 'enzyme';
import RecipePage from '../RecipePage';
import WithLoader from '../../hoc/WithLoader';
import RecipeDisplay from '../../components/Recipe/Display';

describe('RecipePage', () => {
  it('is a RecipeDisplay WithLoader with the correct uri', () => {
    const component = shallow(<RecipePage location={{pathname: 'foo/bar'}} />);
    const ExpectedWithLoader = shallow(
      <WithLoader component={RecipeDisplay} uri="/api/foo/bar.json" />,
    );
    expect(component.dive().instance()).toEqual(ExpectedWithLoader.instance());
  });
});
