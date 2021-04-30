import React, {Component} from 'react';
import MainStackNavigator from './app/navigation/mainStackNavigator';
import {store} from './app/redux/store';
import {Provider} from 'react-redux';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <MainStackNavigator/>
        </Provider>
    );
  }
}

export default App;
