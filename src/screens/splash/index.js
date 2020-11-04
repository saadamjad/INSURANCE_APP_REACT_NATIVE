import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const image1 = (
  <Image
    source={require('../../assets/assets/three.png')}
    style={{height: '80%', width: '80%'}}
    resizeMode="contain"
  />
);
const image2 = (
  <Image
    source={require('../../assets/icons/5.png')}
    style={{height: '100%', width: '100%'}}
    resizeMode="contain"
  />
);
const image3 = (
  <Image
    source={require('../../assets/icons/6.png')}
    style={{height: '100%', width: '100%'}}
    resizeMode="contain"
  />
);
const image4 = (
  <Image
    source={require('../../assets/assets/second.png')}
    style={{height: '80%', width: '90%'}}
    resizeMode="contain"
  />
);
const image5 = (
  <Image
    source={require('../../assets/icons/8.png')}
    style={{height: '100%', width: '90%'}}
    resizeMode="contain"
  />
);
const _Splash1 = (count, props) => {
  console.log('coint', count);
  return (
    <View
      style={{
        flex: 0.6,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {count == 0
        ? image1
        : count == 1
        ? image2
        : count == 2
        ? image3
        : count == 3
        ? image4
        : count == 4
        ? image5
        : props.navigation.navigate('login')}
    </View>
  );
};
const _header = (count, props) => {
  console.log('coint', count);
  return (
    <View
      style={{
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Text style={{fontSize: 20, color: '#373737'}}>
        {count == 0 ? 'Welcome to' : null}
      </Text>
      <Text
        style={{
          fontSize: 28,
          color: '#ff265f',
          // fontFamily: 'FredokaOne',
          // fontWeight: 'bold',

          fontFamily: 'FredokaOne-Regular',
        }}>
        {count == 0
          ? 'Apki Insurance'
          : count == 1
          ? 'Travel Insurance'
          : count == 2
          ? 'Life Insurance'
          : count == 3
          ? 'Car Insurance'
          : count == 4
          ? 'Heath Insurance'
          : null}
      </Text>
      <Text
        style={{
          fontSize: 15,
          textAlign: 'center',
          paddingTop: 13,
          color: '#838383',

          // fontFamily: 'Montserrat-Regular',
          // fontFamily:''
        }}>
        {count == 0
          ? 'Apki insurance protects you, your loved ones and your valuable belongings'
          : count == 1
          ? 'We help you find any insurance coverages that are right for you, so you"re not paying for anything you don"t want! '
          : count == 2
          ? 'Care about your family future & well being? Be covered in case something happens to you.'
          : count == 3
          ? 'Car Insurance bears the cost of accidental damages that may occurs to your car.'
          : count == 4
          ? 'Heath insurance bears the cost of unforeseen medical costs that occurs if you are admitted in a hospital.'
          : null}
      </Text>
    </View>
  );
};

const _ArrowButton = (countsplash, setCount, props) => {
  console.log('countsplash,setCount', countsplash, setCount);
  return (
    <View
      style={{
        flex: 0.15,
        alignItems: 'center',

        backgroundColor: 'white',
        // borderWidth: 1,
        borderColor: 'red',
        // paddingTop: 20,
        paddingVertical: 20,
      }}>
      <TouchableOpacity
        onPress={() => setCount(countsplash + 1)}
        style={{
          marginTop: 20,
          //   borderWidth: 1,
          borderRadius: 40,
          overflow: 'hidden',
          // justifyContent: 'center',
          // alignItems: 'center',
          width: 40,
          height: 40,
        }}>
        <Image
          source={require('../../assets/icons/4.png')}
          style={{height: '100%', width: '100%'}}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        {countsplash == 0 ? null : (
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}>
            <View
              style={{
                height: 10,
                width: countsplash == 1 ? 30 : 10,
                borderRadius: 10,
                marginRight: 5,
                backgroundColor: countsplash == 1 ? '#ff3668' : 'black',
              }}></View>
            <View
              style={{
                height: 10,
                width: countsplash == 2 ? 30 : 10,

                marginRight: 5,
                borderRadius: 10,
                backgroundColor: countsplash == 2 ? '#ff3668' : 'black',
              }}></View>
            <View
              style={{
                height: 10,
                width: countsplash == 3 ? 30 : 10,
                marginRight: 5,

                borderRadius: 10,
                backgroundColor: countsplash == 3 ? '#ff3668' : 'black',
              }}></View>
            <View
              style={{
                height: 10,
                marginRight: 5,

                width: countsplash == 4 ? 30 : 10,

                borderRadius: 10,
                backgroundColor: countsplash == 4 ? '#ff3668' : 'black',
              }}></View>

            <View
              style={{
                position: 'absolute',
                right: 10,
                height: 40,
                width: 40,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 15,
                  // color: 'black',
                  color: 'black',
                  fontFamily: 'Montserrat-Regular',
                }}
                onPress={() => props.navigation.navigate('login')}>
                Skip
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const App = (props) => {
  const [countsplash, setCount] = useState(0);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: 'white'}}
      contentContainerStyle={{flexGrow: 1}}>
      {_header(countsplash, props)}
      {_Splash1(countsplash, props)}
      {_ArrowButton(countsplash, setCount, props)}
    </ScrollView>
  );
};
export default App;
