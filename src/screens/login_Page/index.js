import React from 'react';
import {Button} from 'react-native-elements';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const App = (props) => {
  const SignUp = () => {
    props.navigation.navigate('signup');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.3, width: '100%'}}>
        <Image
          source={require('../../assets/icons/10.png')}
          resizeMode={'stretch'}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 0.7}}>
        {/* ==========Description========== */}
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            width: '50%',
            alignSelf: 'center',
          }}>
          <Text style={{fontSize: 20, fontFamily: 'FredokaOne-Regular'}}>
            Welcome!
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              textAlign: 'center',
              marginTop: 5,
              fontFamily: 'Montserrat-Medium',
            }}>
            Log to see the insurance plans.
          </Text>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
          }}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 5}}>
            {' '}
            Email{' '}
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
            }}>
            <Zocial
              name="email"
              size={16}
              color="#d23957"
              style={{
                alignItems: 'flex-end',
                marginLeft: 10,
              }}
            />
            <TextInput
              keyboardType=""
              placeholder=""
              style={{width: '88%', marginLeft: 5, fontSize: 10}}
            />
          </View>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            marginTop: 30,
          }}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 5}}>
            {' '}
            Password{' '}
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
            }}>
            <FontAwesome
              name="lock"
              size={18}
              color="#d23957"
              style={{
                alignItems: 'flex-end',
                marginLeft: 10,
              }}
            />
            <TextInput
              keyboardType=""
              placeholder=""
              style={{width: '88%', marginLeft: 5, fontSize: 10}}
            />
          </View>
        </View>

        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
            marginTop: 30,
          }}>
          <Button
            title="LOG IN"
            onPress={() => props.navigation.navigate('mydrawer')}
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

        <Text
          style={{
            textAlign: 'center',
            marginVertical: 15,
            color: 'black',
            fontFamily: 'Montserrat-Regular',
          }}>
          or connect using
        </Text>

        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'space-evenly',
            width: '90%',
            marginBottom: 10,
            marginTop: 10,
            // paddingHorizontal: 10,
            // marginVertical: 80,
            // borderWidth: 1,
            // justifyContent: 'space-between',
            alignSelf: 'center',
          }}>
          <View style={{flex: 0.5}}>
            <Button
              title="GUEST LOGIN"
              onPress={() => SignUp()}
              buttonStyle={{
                width: '90%',

                height: 50,
                borderWidth: 2,
                borderRadius: 8,
                borderColor: '#fe4270',
                backgroundColor: 'white',
              }}
              titleStyle={{
                fontSize: 15,
                color: '#fe4270',
                fontFamily: 'Montserrat-Regular',
              }}
              containerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <View style={{flex: 0.5}}>
            <Button
              icon={<FontAwesome name="facebook" size={15} color="white" />}
              title="Facebook"
              onPress={() => SignUp()}
              buttonStyle={{
                width: '90%',
                height: 50,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#394cb8',
                backgroundColor: '#3145b6',
              }}
              titleStyle={{
                fontSize: 15,
                color: 'white',
                // fontWeight: 'bold',
                fontFamily: 'Montserrat-Regular',
                marginLeft: 20,
              }}
              containerStyle={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
        </View>

        <Text
          style={{
            textAlign: 'center',
            marginVertical: 13,
            fontSize: 10,
            color: 'black',
            fontFamily: 'Montserrat-Regular',
          }}>
          {' '}
          Don't have an account?{' '}
          <Text style={{color: '#ec2f57', fontFamily: 'Montserrat-Regular'}}>
            {' '}
            Sign Up
          </Text>{' '}
        </Text>
      </View>
    </View>
  );
};

export default App;
