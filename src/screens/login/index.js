import React from 'react';
import {Button} from 'react-native-elements';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
const App = (props) => {
  const Login = () => {
    props.navigation.navigate('loginpage');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.5, width: '100%', borderWidth: 0}}>
        {/* <View
          style={{
            flex: 1,
            borderBottomLeftRadius: 200,
            borderBottomRightRadius: 200,
            borderWidth: 1,
          }}></View> */}
        <Image
          source={require('../../assets/icons/9.png')}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 0.5, justifyContent: 'center'}}>
        {/* ==========Description========== */}
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'FredokaOne-Regular',
            }}>
            Join the Community
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'black',
              fontFamily: 'Montserrat-Light',
              textAlign: 'center',
              paddingVertical: 10,
              paddingHorizontal: 40,
            }}>
            Compare & buy insurance plans from the top companies of Pakistan.
          </Text>
        </View>

        {/* ==========Button========== */}
        <Button
          title="LOGIN"
          onPress={() => Login()}
          buttonStyle={{
            backgroundColor: 'white',
            width: '85%',
            height: 50,
            borderRadius: 8,
            borderColor: '#fe4270',
            borderWidth: 2,
          }}
          titleStyle={{
            fontSize: 17,
            letterSpacing: 1,
            color: '#ff235d',

            fontFamily: 'Montserrat-Regular',
          }}
          containerStyle={{
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />

        <Button
          title="SIGNUP"
          onPress={() => props.navigation.navigate('signup')}
          buttonStyle={{
            backgroundColor: '#ff235d',

            width: '85%',
            height: 50,
            borderRadius: 8,
          }}
          titleStyle={{
            fontSize: 17,
            letterSpacing: 1,

            fontFamily: 'Montserrat-Regular',
          }}
          containerStyle={{
            marginVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
