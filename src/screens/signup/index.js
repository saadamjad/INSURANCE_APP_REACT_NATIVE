import React from 'react';
import {Button} from 'react-native-elements';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const App = (props) => {
  const SignupB = () => {
    props.navigation.navigate('mydrawer');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            height: 120,
            width: '100%',
          }}>
          <Image
            source={require('../../assets/icons/16.png')}
            resizeMode={'cover'}
            style={{height: '100%', width: '100%'}}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            marginVertical: 10,
            width: '60%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'FredokaOne-Regular',
              color: 'black',
            }}>
            Sign up
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '100',
              color: 'black',
              textAlign: 'center',
              marginTop: 5,
            }}>
            We protect you, your loved ones & your valuable belongings.
          </Text>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 20,
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 12,
              marginBottom: 5,
            }}>
            {' '}
            Name{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              // borderColor: '#fe4270',
              borderColor: '#fe4270',

              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Image
              source={require('../../assets/icons/14.png')}
              style={{height: 15, width: 15}}
              resizeMode="contain"
            />
            <TextInput style={{width: '88%', marginLeft: 5, fontSize: 10}} />
          </View>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 5}}>
            {' '}
            Email{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Image
              source={require('../../assets/icons/12.png')}
              style={{height: 15, width: 15}}
              resizeMode="contain"
            />
            <TextInput style={{width: '88%', marginLeft: 5, fontSize: 10}} />
          </View>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 5}}>
            {' '}
            Contact Number{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Image
              source={require('../../assets/icons/44.png')}
              style={{height: 15, width: 15}}
              resizeMode="contain"
            />
            <TextInput style={{width: '88%', marginLeft: 5, fontSize: 10}} />
          </View>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 5}}>
            {' '}
            Password{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
              paddingLeft: 10,
            }}>
            <Image
              source={require('../../assets/icons/11.png')}
              style={{height: 15, width: 15}}
              resizeMode="contain"
            />
            <TextInput style={{width: '88%', marginLeft: 5, fontSize: 10}} />
          </View>
        </View>

        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 20,
          }}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 5}}>
            {' '}
            Confirm Password
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
              paddingLeft: 10,
              marginBottom: 20,
            }}>
            <Image
              source={require('../../assets/icons/11.png')}
              style={{height: 15, width: 15}}
              resizeMode="contain"
            />
            <TextInput style={{width: '88%', marginLeft: 5, fontSize: 10}} />
          </View>
          <Button
            title="SIGN UP"
            onPress={() => SignupB()}
            buttonStyle={{
              width: '100%',

              height: 50,
              borderWidth: 2,
              borderRadius: 6,
              borderColor: '#fe4270',
              backgroundColor: '#fe4270',
            }}
            titleStyle={{
              fontSize: 15,
              color: 'white',
              fontFamily: 'Montserrat-Regular',
            }}
            containerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default App;
