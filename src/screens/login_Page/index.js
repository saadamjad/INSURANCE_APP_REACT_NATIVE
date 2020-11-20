import React, {useState, useEffect} from 'react';
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
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
const App = (props) => {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');

  const SignUp = () => {
    props.navigation.navigate('signup');
  };
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: 'white'}}>
      <View style={{height: '30%', width: '100%', borderWidth: 0}}>
        <Image
          source={require('../../assets/icons/10.png')}
          resizeMode={'stretch'}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{height: '60%'}}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 20,
            // width: '50%',
            // alignSelf: 'center',
            // borderWidth: 1,
          }}>
          <Text style={{fontSize: 20, fontFamily: 'FredokaOne-Regular'}}>
            Welcome!
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              textAlign: 'center',
              marginTop: 5,
              lineHeight: 15,
              fontFamily: 'Montserrat-Medium',
            }}>
            Log in to see the latest {'\n'} insurance plans.
          </Text>
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 50,
          }}>
          <Text style={{color: 'black', marginBottom: 5, fontSize: 12}}>
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
              keyboardType="email-address"
              style={{
                flex: 1,
                marginLeft: 5,
                fontSize: 15,
              }}
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
            Password
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
              keyboardType="default"
              secureTextEntry={showPassword}
              style={{
                flex: 1,
                marginLeft: 5,
                fontSize: 15,
              }}
              onChangeText={(password) => setPassword(password)}
            />
            {password !== '' ? (
              <TouchableOpacity
                style={{
                  width: '15%',
                  // borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => setShowPassword(!showPassword)}>
                <Entypo
                  name={showPassword ? 'eye' : 'eye-with-line'}
                  size={20}
                  color="gray"
                />
              </TouchableOpacity>
            ) : null}
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
            fontSize: 12,
            fontFamily: 'Montserrat-Medium',

            // fontFamily: 'Montserrat-Regular',
          }}>
          or connect using
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginBottom: 10,
            marginTop: 10,

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              marginVertical: 12,
              fontSize: 12,
              color: 'black',
              fontFamily: 'Montserrat-Regular',
            }}>
            Don't have an account?
          </Text>
          <Text
            style={{
              color: '#ec2f57',
              fontFamily: 'Montserrat-Regular',
              // borderWidth: 1,
              padding: 10,
              // height: 50,
              // width: 100,
              // backgroundColor: 'red',
            }}
            onPress={() => props.navigation.navigate('signup')}>
            Sign Up
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
