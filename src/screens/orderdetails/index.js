import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = (props) => {
  //   const SignUp = () => {
  //     props.navigation.navigate('insuranceSignup');
  //   };
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        style={{width: '90%', alignSelf: 'center'}}>
        {/* ==========About Us Row========== */}

        <View
          style={{flexDirection: 'row', borderWidth: 0, paddingVertical: 5}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              width: '40%',
            }}
            onPress={() => props.navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={22}
              color="#ff4271"
              style={{
                alignItems: 'flex-end',
              }}
            />
          </TouchableOpacity>
          <View
            style={{alignItems: 'center', marginVertical: 10, borderWidth: 0}}>
            <Text
              style={{
                color: '#ff4271',
                fontSize: 17,
                fontFamily: 'FredokaOne-Regular',
              }}>
              About Us
            </Text>
          </View>
        </View>
        {/* ==========Image============ */}

        <View style={{width: '100%', height: 220, marginVertical: 10}}>
          <Image
            source={require('../../assets/icons/aboutUs.png')}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </View>
        {/* ============Discriptions============ */}

        <View style={{alignItems: 'center', marginVertical: 5}}>
          <Text
            style={{
              color: '#ff4271',
              fontSize: 25,
              fontFamily: 'FredokaOne-Regular',

              letterSpacing: 1,
            }}>
            Apki Insurance
          </Text>
        </View>

        <View style={{alignItems: 'center', marginVertical: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 13,
              textAlign: 'center',
              lineHeight: 16,
            }}>
            Bsuiness Insurance Tailored {'\n'} to Your Needs
          </Text>
        </View>

        <View style={{alignItems: 'center', marginVertical: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 11,
              textAlign: 'center',
              // lineHeight: 15,
              // letterSpacing: 0.5,
            }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </Text>
        </View>

        <View style={{alignItems: 'center', marginVertical: 5}}>
          <Text
            style={{
              color: 'black',
              fontSize: 11,
              textAlign: 'center',
              lineHeight: 17,
              letterSpacing: 0.5,
            }}>
            Various versions have evolved over the years, sometimes by accident,
            sometimes on purpose (injected humour and the like). If you are
            going to use a passage of Lorem Ipsum, you need to be sure there is
            anything.
          </Text>
        </View>
        {/* ==========Button========== */}

        <Button
          title="VISIT WEBSITE"
          onPress={() => props.navigation.navigate('HomeScreen')}
          buttonStyle={{
            backgroundColor: '#ff235d',
            width: '85%',
            height: 50,
            borderRadius: 10,
            marginBottom: 24,
          }}
          titleStyle={{
            fontSize: 12,

            fontFamily: 'Montserrat-Regular',
          }}
          containerStyle={{
            marginVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
