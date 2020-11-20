import React, {useState,useEffect} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
const App = (props) => {
  //   const SignUp = () => {
  //     props.navigation.navigate('insuranceSignup');
  //   };

  const [carPolicy, setCarPolicy] = useState(false);

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
  useEffect(() => {
    let getState = props.route.params ? props.route.params.carInsurance : false;
    setCarPolicy(getState);
  }, []);
  const _NextPage=()=>{
    props.navigation.navigate('orderconfirmed',{
      carInsurance:carPolicy ? true:false

    })
  }
  return carPolicy? (
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
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                textAlign: 'center',

                fontFamily: 'Montserrat-Regular',
              }}>
              Thank you for your order. we will contact you soon
            </Text>
          </View>

          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Text
              style={{
                color: '#ff396b',

                fontFamily: 'Montserrat-Bold',

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
               
                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Order ID:{' '}
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,

                      // fontFamily: 'Montserrat-Regular',
                    }}>
                    {item.name}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Car owner Name:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.gender}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Contact number:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.contactNumber}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  CNIC:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.cnic}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Passport number:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.passportNumber}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Email:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.email}
                  </Text>
                </Text>
                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Car Registeration :{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                2211212
                  </Text>
                </Text>
                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Date of Inspecton :{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    12 Mar 2020
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,

                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Address:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.address}
                  </Text>
                </Text>
              </TouchableOpacity>
            );
          })}

          {/* ==========Benificiary Details========== */}

        </View>
      </ScrollView>
    </SafeAreaView>
  ):(
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
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                textAlign: 'center',

                fontFamily: 'Montserrat-Regular',
              }}>
              Thank you for your order. we will contact you soon
            </Text>
          </View>

          <View style={{alignItems: 'center', marginVertical: 5}}>
            <Text
              style={{
                color: '#ff396b',

                fontFamily: 'Montserrat-Bold',

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
                <Text
                  style={{
                    fontSize: 13,
                    marginBottom: 5,
                    color: 'black',
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Personal Details
                </Text>
                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Name:{' '}
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 12,

                      // fontFamily: 'Montserrat-Regular',
                    }}>
                    {item.name}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Gender:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.gender}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Contact number:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.contactNumber}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  CNIC:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.cnic}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Passport number:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.passportNumber}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Email:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.email}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,

                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Address:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.address}
                  </Text>
                </Text>
              </TouchableOpacity>
            );
          })}

          {/* ==========Benificiary Details========== */}

          {benificiary.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('visitwebsite')}
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
                <Text
                  style={{
                    color: 'black',
                    fontSize: 13,
                    marginBottom: 5,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Benificiary Details
                </Text>
                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Benificiary Name:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.benificiaryName}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Contact number:{' '}
                  <Text style={{color: 'black', fontSize: 1}}>
                    {item.contactNbr}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  RelationShip:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.relationship}
                  </Text>
                </Text>
              </TouchableOpacity>
            );
          })}

          {/* ==========Travel Details========== */}

          {travel.map((item, i) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('visitwebsite')}
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
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 13,
                    marginBottom: 5,
                  }}>
                  Travel Details
                </Text>
                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,

                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Travel from:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.travelFrom}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,

                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Travel to:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.travelTo}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,

                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Departure City:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.departureCity}
                  </Text>
                </Text>

                <Text
                  style={{
                    color: '#ff396b',
                    fontSize: 12,

                    fontFamily: 'Montserrat-Regular',
                  }}>
                  Arrival Country:{' '}
                  <Text style={{color: 'black', fontSize: 12}}>
                    {item.arrivalCountry}
                  </Text>
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
