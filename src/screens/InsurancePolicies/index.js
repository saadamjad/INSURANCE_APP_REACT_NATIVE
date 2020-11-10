import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Button} from 'react-native-elements';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = (props) => {
  const [isData, setData] = useState([
    {
      image: require('../../assets/icons/adamjee.png'),
      coverageUpto: '21 Days',
      destination: 'Worldwide',
      medicalCover: '$10,000',
      plan: 'Individual',
      cardType: 'Premium',
    },
    {
      image: require('../../assets/icons/adamjee.png'),
      coverageUpto: '21 Days',
      destination: 'Worldwide',
      medicalCover: '$10,000',
      plan: 'Individual',
      cardType: 'Premium',
    },
    {
      image: require('../../assets/icons/adamjee.png'),
      coverageUpto: '21 Days',
      destination: 'Worldwide',
      medicalCover: '$10,000',
      plan: 'Individual',
      cardType: 'Premium',
    },
    {
      image: require('../../assets/icons/adamjee.png'),
      coverageUpto: '21 Days',
      destination: 'Worldwide',
      medicalCover: '$10,000',
      plan: 'Individual',
      cardType: 'Premium',
    },
  ]);
  const callfunction = () => {
    props.navigation.navigate('OrderDetailsRelatives');
  };
  return (
    <ImageBackground
      source={require('../../assets/icons/bg.jpg')}
      style={{
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
      }}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SafeAreaView
          style={{width: '90%', alignSelf: 'center', paddingBottom: 80}}>
          {/* ==========Header Row========== */}

          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              style={{width: '28%'}}
              onPress={() => props.navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={20}
                color="#FFFFFFFF"
                style={{
                  alignItems: 'flex-end',
                }}
              />
            </TouchableOpacity>
            <View style={{width: '65%'}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 18,

                  fontFamily: 'Montserrat-Medium',
                }}>
                Insurance Policies
              </Text>
            </View>
            <View>
              <Image
                source={require('../../assets/icons/58.png')}
                style={{height: 20, width: 20}}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* ==========Card========== */}

          {isData.map((item, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={{
                  paddingTop: 10,
                  // paddingBottom: 10,
                  paddingLeft: 10,
                  width: '100%',
                  backgroundColor: '#FFFF',
                  borderWidth: 0.25,
                  borderColor: '#ffff',
                  borderRadius: 5,
                  elevation: 10,
                  marginTop: 20,
                  // marginVertical: 40,
                }}
                onPress={() => callfunction()}>
                {/* ==========1st Row========== */}

                <View style={{flexDirection: 'row'}}>
                  <View style={{width: '30%'}}>
                    <View style={{width: 70, height: 65}}>
                      <Image
                        source={item.image}
                        style={{
                          height: '100%',
                          width: '100%',
                          resizeMode: 'contain',
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: '35%',
                      marginTop: 10,
                      alignItems: 'flex-end',
                      paddingRight: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 11,

                        fontFamily: 'FredokaOne-Regular',
                      }}>
                      Covid-19 Covered
                    </Text>
                  </View>
                  <View style={{width: '35%'}}>
                    <View
                      style={{
                        backgroundColor: '#ff235d',
                        height: 27,
                        width: '100%',
                        // marginTop: 10,
                        borderTopLeftRadius: 20,
                        borderBottomLeftRadius: 20,
                        justifyContent: 'center',
                      }}>
                      <Text
                        style={{
                          color: '#ffff',
                          textAlign: 'center',
                          // fontWeight: 'bold',
                        }}>
                        Rs. 2900
                      </Text>
                    </View>
                    <View
                      style={{
                        alignItems: 'flex-end',
                        paddingRight: 10,
                        marginTop: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 8,
                          color: '#727272',
                        }}>
                        {item.cardType}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* ==========1st Red & Gray Row========== */}

                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingLeft: 5, width: '50%'}}>
                    <Text
                      style={{
                        color: '#ff235d',
                        fontSize: 12.5,
                        // fontWeight: 'bold',
                        fontFamily: 'FredokaOne-Regular',

                        lineHeight: 19,
                      }}>
                      Coverage Upto:
                    </Text>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <Text
                      style={{
                        color: '#ff235d',
                        fontSize: 12.5,
                        lineHeight: 19,
                        // fontWeight: 'bold',
                        fontFamily: 'FredokaOne-Regular',
                      }}>
                      Destination:
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 10}}>
                  <View style={{paddingLeft: 5, width: '50%'}}>
                    <Text
                      style={{
                        color: '#727272',
                        fontSize: 11.5,
                        lineHeight: 19,
                      }}>
                      {item.coverageUpto}
                    </Text>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <Text
                      style={{
                        color: '#727272',
                        fontSize: 11.5,
                        lineHeight: 19,
                      }}>
                      {item.destination}
                    </Text>
                  </View>
                </View>
                {/* ==========2nd Red & Gray Row========== */}

                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingLeft: 5, width: '50%'}}>
                    <Text
                      style={{
                        color: '#ff235d',
                        fontSize: 12.5,
                        lineHeight: 19,
                        // fontWeight: 'bold',
                        fontFamily: 'FredokaOne-Regular',
                      }}>
                      Medical Cover:
                    </Text>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <Text
                      style={{
                        color: '#ff235d',
                        fontSize: 12.5,
                        lineHeight: 19,
                        // fontWeight: 'bold',
                        fontFamily: 'FredokaOne-Regular',
                      }}>
                      Plan:
                    </Text>
                  </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{paddingLeft: 5, width: '50%'}}>
                    <Text
                      style={{
                        color: '#727272',
                        fontSize: 11.5,
                        lineHeight: 19,
                      }}>
                      {item.medicalCover}
                    </Text>
                  </View>
                  <View style={{paddingLeft: 5}}>
                    <Text
                      style={{
                        color: '#727272',
                        fontSize: 11.5,
                        lineHeight: 19,
                      }}>
                      {item.plan}
                    </Text>
                  </View>
                </View>
                {/* ==========Silver Plan Row========== */}

                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 15,
                  }}>
                  <View
                    style={{
                      paddingLeft: 5,
                      width: '55%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'FredokaOne-Regular',
                      }}>
                      SILVER PLAN
                    </Text>
                  </View>
                  <View style={{justifyContent: 'center', width: '15%'}}>
                    <Text
                      style={{
                        color: '#ff235d',
                        fontSize: 11,
                        // fontWeight: 'bold',
                        fontFamily: 'FredokaOne-Regular',
                      }}>
                      Details
                    </Text>
                  </View>
                  <View>
                    <Button
                      title="GET NOW"
                      // onPress={() => function()}
                      buttonStyle={{
                        backgroundColor: '#ff235d',
                        width: 85,
                        height: 30,
                      }}
                      titleStyle={{
                        // fontWeight: 'bold',
                        fontFamily: 'Montserrat-Regular',

                        fontSize: 10,
                        letterSpacing: 0.5,
                      }}
                      containerStyle={{
                        borderRadius: 5,
                      }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
