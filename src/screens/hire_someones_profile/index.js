import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {Text, View, SafeAreaView, TextInput, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const App = (props) => {
  const hireNowFunction = () => {
    props.navigation.navigate('orderconfirmed');
  };

  const [payment, setPayment] = useState([
    {
      order: 'UIC Silver Plan',
      premium: 'Rs.1950',
      tax: 'Rs.585',
      serviceFee: 'Rs.975',
      totalPayment: 'Rs.3510',
    },
  ]);

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{width: '90%', alignSelf: 'center', marginBottom: 40}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text
            style={{
              color: '#ff4170',

              fontFamily: 'FredokaOne-Regular',

              fontSize: 16,
            }}>
            Make a Payment
          </Text>
        </View>

        {/* ==========Payment Details========== */}

        {payment.map((item, i) => {
          return (
            <View
              key={i}
              style={{
                width: '100%',
                padding: 10,
                borderWidth: 0.025,
                borderColor: '#FFFFFF',
                borderRadius: 5,
                marginVertical: 10,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
                backgroundColor: 'white',
              }}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 13,
                  marginBottom: 5,
                  color: 'black',
                }}>
                Payment Details
              </Text>
              <Text style={{color: '#ff235d', fontSize: 12}}>
                Order:{' '}
                <Text style={{color: 'black', fontSize: 12}}>{item.order}</Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Premium:{' '}
                <Text style={{color: 'black', fontSize: 12}}>
                  {item.premium}
                </Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Tax(13%):{' '}
                <Text style={{color: 'black', fontSize: 12}}>{item.tax}</Text>
              </Text>

              <Text style={{color: '#ff235d', fontSize: 12}}>
                Service Fee (5%):{' '}
                <Text style={{color: 'black', fontSize: 12}}>
                  {item.serviceFee}
                </Text>
              </Text>

              <View
                style={{
                  marginVertical: 5,
                  // justifyContent: 'center',
                  alignItems: 'center',
                  borderTopWidth: 1,
                  borderColor: '#f3f3f3',
                  flexDirection: 'row',
                  paddingVertical: 5,
                }}>
                <Text
                  style={{
                    color: '#ff235d',
                    fontSize: 13,
                    fontWeight: 'bold',
                  }}>
                  Total Payment:{' '}
                </Text>
                <Text
                  style={{
                    color: 'black',

                    fontFamily: 'Montserrat-Medium',
                    fontSize: 12,
                  }}>
                  {item.totalPayment}
                </Text>
              </View>
            </View>
          );
        })}

        {/* ==========Card Details========== */}
        <View
          style={{
            width: '100%',
            padding: 10,
            borderWidth: 0.025,
            borderColor: '#FFFFFF',
            borderRadius: 5,
            marginVertical: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            backgroundColor: 'white',

            backgroundColor: 'white',
          }}>
          <Text
            style={{
              fontSize: 13,
              marginBottom: 5,
              fontFamily: 'Montserrat-Regular',
              color: 'black',
            }}>
            Enter your card details
          </Text>
          <View style={{width: '90%', alignSelf: 'center'}}>
            {/* ============Card Name============ */}

            <Text
              style={{
                color: '#9a9a9a',
                fontSize: 12,
                marginTop: 20,
                marginBottom: 3,
              }}>
              {' '}
              Card Name
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
              }}>
              <TextInput
                style={{
                  flex: 1,
                  marginLeft: 5,
                  fontSize: 10,
                }}
              />
            </View>

            <Text
              style={{
                color: '#9a9a9a',
                fontSize: 12,
                marginTop: 20,
                marginBottom: 3,
              }}>
              {' '}
              Card Number
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
              }}>
              <TextInput
                style={{
                  flex: 1,
                  marginLeft: 5,
                  fontSize: 10,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                // borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/icons/card1.png')}
                style={{height: 20, width: 20, marginRight: 5}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card2.png')}
                style={{height: 20, width: 20, marginRight: 5}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card3.png')}
                style={{height: 20, width: 20, marginRight: 5}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card4.png')}
                style={{height: 20, width: 20, marginRight: 5}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '45%'}}>
                <Text
                  style={{
                    color: '#9a9a9a',
                    fontSize: 12,
                    marginTop: 10,
                    marginBottom: 3,
                  }}>
                  Expiration Date
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 2,
                    borderColor: '#fe4270',
                    // justifyContent: 'space-between',
                    borderRadius: 8,
                    width: '100%',
                    height: 45,
                    alignItems: 'center',
                  }}>
                  <TextInput
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      fontSize: 10,
                    }}
                    placeholder="MM/YY"
                    con
                  />
                </View>
              </View>

              <View style={{width: '45%'}}>
                <Text
                  style={{
                    color: '#9a9a9a',
                    marginBottom: 3,
                    fontSize: 12,
                    marginTop: 10,
                  }}>
                  CVV
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
                  }}>
                  <TextInput
                    style={{
                      flex: 1,
                      marginLeft: 5,
                      fontSize: 10,
                    }}
                    placeholder="XXXX"
                  />
                </View>
              </View>
            </View>
            {/* ==========Button========== */}

            <Button
              title="MAKE PAYMENT"
              // onPress={() => ()}
              onPress={() => hireNowFunction()}
              buttonStyle={{
                backgroundColor: '#ff235d',
                width: 245,
                height: 50,
                borderRadius: 5,
              }}
              titleStyle={{fontSize: 12, letterSpacing: 1}}
              containerStyle={{
                marginVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />

            {/* ==========Data is Secured Row========== */}
            <View
              style={{
                backgroundColor: '#fff3f6',
                width: '65%',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop: 10,
                marginBottom: 50,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}>
                <View style={{width: 10, height: 10}}>
                  <Image
                    source={require('../../assets/icons/lock.png')}
                    style={{
                      height: '100%',
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </View>

                <Text
                  style={{
                    color: '#4cb77a',
                    fontSize: 11,
                    // letterSpacing: 0.25,
                    marginLeft: 3,
                    // fontWeight: 'bold',
                  }}>
                  YOUR DATA IS SECURED
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default App;
