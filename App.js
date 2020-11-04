// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';

// const App = (props) => {

//   return <Stack navigation={props.navigation} />;
// };

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {ImageBackground, Text, View, Image} from 'react-native';

import Stack from './src/navigations/stacknavigation';

import Home from './src/screens/Home';

import GlobalFont from 'react-native-global-font';
export default class App extends React.PureComponent {
  state = {
    show: false,
  };

  componentDidMount() {
    // let fontName = 'FredokaOne-Regular';
    let fontName = 'Montserrat-Light';
    GlobalFont.applyGlobal(fontName);

    this.setState({
      show: true,
    });
    this.ShowStack();
  }
  ShowStack = () => {
    setTimeout(() => {
      this.setState({
        show: false,
      });
    }, 4000);
  };
  render() {
    if (this.state.show) {
      return (
        <ImageBackground
          source={require('./src/assets/assets/first.jpg')}
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '100%',
              height: 215,
              // borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./src/assets/icons/1.png')}
              style={{height: '90%', width: '85%'}}
              resizeMode="contain"
            />
          </View>
        </ImageBackground>
      );
    }
    return <Stack navigation={this.props.navigation} />;
  }
}

//saad pushed
