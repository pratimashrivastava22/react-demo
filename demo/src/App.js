import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routes from './routes';

export default class FriendO extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      store: null
    }
  }

  componentWillMount() {
		this.setState({ store: configureStore() });
  }

  render () {
    if(this.state.store) {
      return (
        <Provider store={this.state.store}>
          <Routes />
        </Provider>
      )
    }
  }
}

