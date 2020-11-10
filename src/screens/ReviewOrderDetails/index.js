import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {Text, View, SafeAreaView} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const App = (props) => {
  const [personal, setPersonal] = useState([
    {
      name: 'Abdul Samad',
      gender: 'Male',
      contactNumber: '+92 3103844268',
      cnic: '43103 7189947 9',
      passportNumber: '656565 59862',
      email: 'samadsoomro999@gmail.com',
      address: 'A-21, Clifton, block 2, near BHT Hospital, Karachi.',
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
        style={{}}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            alignItems: 'center',
            height: 70,
            // borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#ff396b',
              fontSize: 18,

              fontFamily: 'FredokaOne-Regular',
            }}>
            Review Order Details
          </Text>
        </View>

        {/* ==========Personal Details========== */}

        {personal.map((item, i) => {
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
                shadowColor: '#000',
                width: '90%',
                alignSelf: 'center',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 8,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 5,
                  fontFamily: 'Montserrat-Medium',
                  color: 'black',
                }}>
                Personal Details
              </Text>
              <Text style={{color: '#ff235d', fontSize: 12}}>
                Name:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.name}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Gender:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.gender}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Contact number:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.contactNumber}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                CNIC:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.cnic}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Passport number:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.passportNumber}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Email:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.email}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Address:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.address}
                </Text>
              </Text>
            </View>
          );
        })}

        {/* ==========Benificiary Details========== */}

        {benificiary.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                width: '90%',
                alignSelf: 'center',
                padding: 10,

                borderWidth: 0.025,
                borderColor: '#FFFFFF',
                borderRadius: 5,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 8,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 5,
                  fontFamily: 'Montserrat-Medium',
                }}>
                Benificiary Details
              </Text>
              <Text style={{color: '#ff235d', fontSize: 12}}>
                Benificiary Name:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.benificiaryName}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Contact number:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.contactNbr}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                RelationShip:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
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
                width: '90%',
                alignSelf: 'center',
                padding: 10,
                borderWidth: 0.025,
                borderColor: '#FFFFFF',
                borderRadius: 5,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 8,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  fontSize: 13,
                  marginBottom: 5,

                  fontFamily: 'Montserrat-Medium',
                }}>
                Travel Details
              </Text>
              <Text style={{color: '#ff235d', fontSize: 12}}>
                Travel from:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.travelFrom}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Travel to:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.travelTo}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Departure City:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.departureCity}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Arrival Country:{' '}
                <Text style={{color: '#909090', fontSize: 12}}>
                  {item.arrivalCountry}
                </Text>
              </Text>
            </View>
          );
        })}

        {/* ==========Buttons========== */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '80%',
            alignSelf: 'center',
            // marginVertical: 80,
            // borderWidth: 1,
            paddingVertical: 50,
          }}>
          <TouchableOpacity
            style={{
              width: 120,
              height: 45,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#ff4270',
                // fontWeight: 'bold',
                textAlign: 'center',
                // letterSpacing: 1,
                // fontFamily: 'FredokaOne-Regular',
                fontFamily: 'Montserrat-Regular',
              }}>
              EDIT INFO
            </Text>
          </TouchableOpacity>
          <Button
            title="PAYMENT"
            onPress={() => props.navigation.navigate('orderconfirmed')}
            buttonStyle={{
              backgroundColor: '#ff235d',
              width: 140,
              height: 50,
              borderRadius: 8,
            }}
            titleStyle={{
              fontSize: 12,
            }}
            containerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
