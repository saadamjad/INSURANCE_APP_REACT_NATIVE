import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

const HomeIcon = require('../assets/icons/38.png');
export default ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
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

            tintColor:
              focusedOptions.tabBarLabel == 'Home' ? '#ff235d' : '#bcbcbc',
          }}
        />
      ),
      // (
      //   <HomeIcon
      //     style={{
      //       fontSize: 17,
      //       color: focusedOptions.tabBarLabel == 'Home' ? 'red' : 'black',
      //     }}
      //   />
      // ),
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
      name: '',
      icon: (
        <Image
          style={{width: 70, height: 70, marginTop: -40}}
          source={require('../assets/icons/42.png')}
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

            flex:
              i == 0
                ? 0.2
                : i == 1
                ? 0.2
                : i == 2
                ? 0.2
                : i == 3
                ? 0.2
                : i == 4
                ? 0.2
                : null,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'blue',
          }}>
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: val.name,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) navigation.navigate(val.name);
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
                // backgroundColor: 'red',
                color:
                  focusedOptions.tabBarLabel == val.name
                    ? '#ff235d'
                    : '#bcbcbc',
                textAlign: 'center',
                fontSize: 9,
                fontFamily: 'FredokaOne-Regular',
              }}>
              {val.name}
              {/* {val.name.length <= 6
                ? val.name
                : val.name.substring(0, 6).concat('...')} */}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
