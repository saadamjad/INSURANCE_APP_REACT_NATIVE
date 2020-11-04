import React from 'react';
import {Button} from 'react-native-elements';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TextInput,
} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import Zocial from 'react-native-vector-icons/Zocial';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const App = (props) => {
  const SignUp = () => {
    props.navigation.navigate('signup');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.3, width: '100%'}}>
        <Image
          source={require('../../assets/icons/10.png')}
          resizeMode={'cover'}
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
              fontFamily: 'Montserrat-Light',
            }}>
            Log to see the insurance plans.
          </Text>
        </View>

        {/* ==========Button========== */}

        {/* =====Login Form===== */}
        <View
          style={{
            width: '80%',
            alignSelf: 'center',
            height: 50,
          }}>
          <Text style={{color: '#858585', fontSize: 12}}> Email </Text>
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
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 30,
          }}>
          <Text style={{color: '#858585', fontSize: 12}}> Password </Text>
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
            width: '80%',
            alignSelf: 'center',
            height: 50,
            marginTop: 15,
          }}>
          <Button
            title="LOG IN"
            onPress={() => props.navigation.navigate('mydrawer')}
            buttonStyle={{
              backgroundColor: '#ff235d',
              width: '100%',

              height: 50,
              borderRadius: 5,
              borderColor: '#ff235d',
              borderWidth: 2,
            }}
            titleStyle={{fontSize: 12, color: 'white'}}
            containerStyle={{
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: '#ff235d',
              borderWidth: 2,
            }}
          />
        </View>

        <Text
          style={{textAlign: 'center', marginVertical: 15, color: '#8d8d8d'}}>
          or connect using
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            alignSelf: 'center',
            alignItems: 'center',
            // marginTop: 10,
          }}>
          <Button
            title="GUEST LOGIN"
            onPress={() => SignUp()}
            buttonStyle={{
              height: 45,
              borderWidth: 2,
              borderRadius: 6,
              borderColor: '#fe4270',
              backgroundColor: 'white',
              // paddingHorizontal: 30,
            }}
            titleStyle={{
              color: '#fe4270',
              fontSize: 14,
              fontFamily: 'Montserrat-Regular',
            }}
            containerStyle={{
              width: '47%',
            }}
          />
          <Button
            icon={<FontAwesome name="facebook" size={15} color="white" />}
            title="Facebook"
            onPress={() => SignUp()}
            buttonStyle={{
              height: 45,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#394cb8',
              backgroundColor: '#3145b6',
            }}
            titleStyle={{
              color: 'white',
              fontSize: 14,
              // fontWeight: 'bold',
              fontFamily: 'Montserrat-Regular',
              marginLeft: 20,
            }}
            containerStyle={{
              width: '47%',
            }}
          />
        </View>

        {/* <View
          style={{
            flexDirection: 'row',
            width: '80%',
            alignSelf: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Button
            title="GUEST LOGIN"
            onPress={() => SignUp()}
            buttonStyle={{
              height: 45,
              borderWidth: 2,
              borderRadius: 6,
              borderColor: '#fe4270',
              backgroundColor: 'white',
              // paddingHorizontal: 30,
            }}
            titleStyle={{
              color: '#fe4270',
              fontSize: 12,
              fontWeight: 'bold',
            }}
            containerStyle={{
              flex: 0.4,
            }}
          />
          <Button
            title="SIGN UP"
            onPress={() => SignUp()}
            buttonStyle={{
              height: 45,
              borderWidth: 1,
              borderRadius: 6,
              borderColor: '#fe4270',
              backgroundColor: '#ec2f57',
              // paddingHorizontal: 30,
            }}
            titleStyle={{
              color: 'white',
              fontSize: 12,
              fontWeight: 'bold',
            }}
            containerStyle={{
              flex: 0.4,
            }}
          />
        </View>
      
       */}
        <Text
          style={{
            textAlign: 'center',
            marginVertical: 10,
            fontSize: 10,
            color: '#8d8d8d',
          }}>
          {' '}
          Don't have an account?{' '}
          <Text style={{color: '#ec2f57'}}> Sign Up</Text>{' '}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
