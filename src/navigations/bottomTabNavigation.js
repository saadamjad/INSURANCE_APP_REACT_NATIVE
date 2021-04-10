import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const HomeIcon = require('../assets/icons/38.png');
export default ({state, descriptors, navigation}) => {
  // const focusedOptions = descriptors[state.routes[state.index]?.key]?.options;
  const focusedOptions = 1;
  console.log('BHAIYAA', focusedOptions);

  const navs = [
    {
      name: 'Home',
      icon: (
        <Image
          source={require('../assets/icons/38.png')}
          style={{
            height: 18,
            width: 18,

            tintColor: focusedOptions.tabBarLabel == 'Home',
          }}
        />
      ),
    },
    {
      name: 'Find Plans',
      icon: (
        <Image
          source={require('../assets/icons/41.png')}
          style={{
            height: 18,
            width: 18,

            tintColor:
              focusedOptions.tabBarLabel == 'Find Plans'
                ? '#ff235d'
                : '#bcbcbc',
          }}
        />
      ),
    },

    {
      name: 'Contact',
      icon: (
        <Image
          source={require('../assets/icons/43.png')}
          style={{
            height: 18,
            width: 18,
            tintColor:
              focusedOptions.tabBarLabel == 'Contact' ? '#ff235d' : '#bcbcbc',
          }}
        />
      ),
    },
    {
      name: 'Account',
      icon: (
        <Image
          source={require('../assets/icons/45.png')}
          style={{
            height: 18,
            width: 18,
            tintColor:
              focusedOptions.tabBarLabel == 'Account' ? '#ff235d' : '#bcbcbc',
          }}
        />
      ),
    },
  ];
  return (
    <View
      style={{
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      {navs.map((val, i) => (
        <View
          style={{
            height: '100%',
            paddingHorizontal: 10,
            alignItems: 'center',
            backgroundColor: 'white',

            flex: i == 0 ? 0.2 : null,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home');
              // const event = navigation.emit({
              //   type: 'tabPress',
              //   target: val.name,
              //   canPreventDefault: true,
              // });
              // if (!event.defaultPrevented) navigation.navigate(val.name);
            }}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor:
                focusedOptions.tabBarLabel == val.name ? '#ff235d' : '',
              borderTopWidth: focusedOptions.tabBarLabel == val.name ? 2 : 0,
            }}>
            {val.icon}
            <Text
              style={{
                width: '100%',
                color:
                  focusedOptions.tabBarLabel == val.name
                    ? '#ff235d'
                    : '#bcbcbc',
                textAlign: 'center',
                fontSize: 9,
                fontFamily: 'FredokaOne-Regular',
              }}>
              {val.name}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
