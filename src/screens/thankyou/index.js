// import React from 'react';
// import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import Fontisto from 'react-native-vector-icons/Fontisto';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const App = (props) => {
//   const callingfunction = () => {
//     props.navigation.navigate('thankyou');
//   };
//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//       }}>
//       <Text onPress={() => callingfunction()}> THANKYOU </Text>
//     </SafeAreaView>
//   );
// };
// export default App;

import React, {useState} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = (props) => {
  //   const SignUp = () => {
  //     props.navigation.navigate('insuranceSignup');
  //   };

  const [personal, setPersonal] = useState([
    {
      name: 'Abdul Samad',
      gender: 'Male',
      contactNumber: '+92 3103844268',
      cnic: '43103 7189947 9',
      passportNumber: '656565 59862',
      email: 'samadsoomro999@gmail.com',
      address: 'A-21, Clifton, block 2, near BHY Hospital, Karachi.',
    },
  ]);

  const [benificiary, setBenificiary] = useState([
    {
      benificiaryName: 'Saad',
      contactNbr: '+92 3103844268',
      relationship: 'Friend',
    },
  ]);

  const [travel, setTravel] = useState([
    {
      travelFrom: '2020-9-15',
      travelTo: '2020-9-30',
      departureCity: 'Karachi',
      arrivalCountry: 'Pakistan',
    },
  ]);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{height: 50, backgroundColor: 'white', borderWidth: 0}}></View>

        <View style={{width: '90%', alignSelf: 'center'}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 2,
            }}>
            {/* <AntDesign
            name="checkcircle"
            size={25}
            color="#29a329"
            style={{
              alignItems: 'flex-end',
            }}
          /> */}
            <Image
              source={require('../../assets/icons/63.png')}
              style={{height: 50, width: 50}}
              resizeMode="contain"
            />
          </View>

          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Text
              style={{
                color: '#43c27b',
                fontSize: 17,
                fontFamily: 'FredokaOne-Regular',
              }}>
              Order confirmed!
            </Text>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text style={{color: '#a6a6a6', fontSize: 12, textAlign: 'center'}}>
              Thank you for your order. we will contact you soon
            </Text>
          </View>

          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Text
              style={{
                color: '#ff396b',

                // fontFamily: 'FredokaOne-Regular',

                fontSize: 15,
                marginVertical: 10,
              }}>
              Order Details:
            </Text>
          </View>

          {/* ==========Personal Details========== */}

          {personal.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{
                  width: '100%',
                  padding: 10,
                  borderWidth: 0.025,
                  borderColor: '#FFFFFF',
                  borderRadius: 5,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  marginVertical: 10,
                  backgroundColor: 'white',
                }}
                onPress={() => props.navigation.navigate('visitwebsite')}>
                <Text style={{fontSize: 13, marginBottom: 5, color: 'black'}}>
                  Personal Details
                </Text>
                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Name:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.name}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Gender:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.gender}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Contact number:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.contactNumber}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  CNIC:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.cnic}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Passport number:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.passportNumber}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Email:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.email}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Address:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.address}
                  </Text>
                </Text>
              </TouchableOpacity>
            );
          })}

          {/* ==========Benificiary Details========== */}

          {benificiary.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  width: '100%',
                  padding: 10,
                  borderWidth: 0.025,
                  borderColor: '#FFFFFF',
                  borderRadius: 5,
                  backgroundColor: 'white',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,

                  marginVertical: 10,
                }}>
                <Text style={{color: 'black', fontSize: 13, marginBottom: 5}}>
                  Benificiary Details
                </Text>
                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Benificiary Name:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.benificiaryName}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Contact number:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.contactNbr}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  RelationShip:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.relationship}
                  </Text>
                </Text>
              </View>
            );
          })}

          {/* ==========Travel Details========== */}

          {travel.map((item, i) => {
            return (
              <View
                key={i}
                style={{
                  width: '100%',
                  padding: 10,
                  borderWidth: 0.025,
                  marginBottom: 50,
                  borderColor: '#FFFFFF',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  marginVertical: 10,
                  borderRadius: 5,
                  backgroundColor: 'white',
                }}>
                <Text style={{color: 'black', fontSize: 13, marginBottom: 5}}>
                  Travel Details
                </Text>
                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Travel from:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.travelFrom}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Travel to:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.travelTo}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Departure City:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.departureCity}
                  </Text>
                </Text>

                <Text style={{color: '#ff396b', fontSize: 12}}>
                  Arrival Country:{' '}
                  <Text style={{color: '#989898', fontSize: 12}}>
                    {item.arrivalCountry}
                  </Text>
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
