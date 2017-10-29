// @flow
import React from 'react';
import {shallow} from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import sinon from 'sinon';
import Spinner from '../../components/Spinner';
import WithLoader from '../WithLoader';

const mockDataUri = '/api/data.json';
const mockDataResponse = {
  data: [
    {
      foo: 'bar',
    },
  ],
};
const mockAxios = new MockAdapter(axios);

let component;

describe('withLoader', () => {
  beforeEach(() => {
    component = shallow(<WithLoader component="div" uri={mockDataUri} />);
  });

  describe('no data retrieved', () => {
    beforeEach(() => {
      component.setState({apiData: null});
      component.update();
    });

    test('it renders the loading indicator', () => {
      expect(component.find(Spinner).exists()).toBe(true);
      expect(component.find('div').exists()).toBe(false);
    });
  });

  describe('data retrieved', () => {
    beforeEach(() => {
      component.setState({apiData: {data: []}});
      component.update();
    });

    test('it renders the wrapped component ', () => {
      expect(component.find('div').exists()).toBe(true);
      expect(component.find(Spinner).exists()).toBe(false);
    });
  });

  describe('fetchData', () => {
    beforeEach(() => {
      mockAxios.onGet(mockDataUri).reply(200, mockDataResponse);
    });

    test('retrieves data from the right endpoint and updates state', async () => {
      expect.assertions(1);
      await component.instance().fetchData();
      expect(component.state().apiData).toEqual(mockDataResponse);
    });
  });

  describe('componentDidMount', () => {
    let spy;
    beforeEach(() => {
      spy = sinon.stub(component.instance(), 'fetchData');
    });

    afterEach(() => {
      component.instance().fetchData.restore();
    });

    it('calls fetchData', () => {
      component.instance().componentDidMount();
      expect(spy.calledOnce).toBe(true);
    });
  });
});
