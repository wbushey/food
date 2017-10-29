import axios from 'axios';
import React, {Component} from 'react';
import type {ComponentType} from 'react';
import Spinner from '../components/Spinner';

type Props = {};
type wrappedComponent = ComponentType<{data: {}} & Props>;

export default class WithLoader extends Component<
  {uri: string, component: wrappedComponent} & Props,
  {apiData: ?{data: {}}},
> {
  state = {
    apiData: null,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    return axios.get(this.props.uri).then(response => {
      this.setState({apiData: response.data});
    });
  }

  render() {
    const WrappedComponent = this.props.component;
    return this.state.apiData ? (
      <WrappedComponent {...this.props} data={this.state.apiData.data} />
    ) : (
      <Spinner />
    );
  }
}
