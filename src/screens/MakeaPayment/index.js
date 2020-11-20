import React, {useState,useEffect} from 'react';
import {Button} from 'react-native-elements';
import {Text, View, SafeAreaView, TextInput, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const App = (props) => {
  const [carPolicy, setCarPolicy] = useState(false);

  const hireNowFunction = () => {
    props.navigation.navigate('revieworderdetails',{
      carInsurance:carPolicy ? true:false

    })
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
  useEffect(() => {
    let getState = props.route.params ? props.route.params.carInsurance : false;
    setCarPolicy(getState);
  }, []);
  const _NextPage=()=>{
    props.navigation.navigate('MakeaPayment',{
      carInsurance:carPolicy ? true:false

    })
  }

  return carPolicy?
  (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{width: '90%', alignSelf: 'center', marginBottom: 80}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text
            style={{
              color: '#ff4170',

              fontFamily: 'FredokaOne-Regular',

              fontSize: 19,
              marginVertical: 8,
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
              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Company:{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.order}
                </Text>
              </Text>

              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Tax:{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.premium}
                </Text>
              </Text>

              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Premium:{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.tax}
                </Text>
              </Text>

              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Advance WHT (0%):{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Medium',
                  }}>
                  {item.serviceFee}
                </Text>
              </Text>
              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Service Charges (0%):{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Medium',
                  }}>
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
                    fontFamily: 'Montserrat-Bold',
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
                <View style={{alignItems: 'center', marginVertical: 5,marginBottom:15}}>
          <Text
            style={{
              color: '#ff4170',

              fontFamily: 'FredokaOne-Regular',

              fontSize: 19,
              marginVertical: 3,
            }}>
            Select Payment Method
          </Text>
        </View>
        <View
              style={{
                flexDirection: 'row',
              
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/travel/bank.png')}
                style={{height: 45, width: 55, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/travel/cod.png')}
                style={{height: 45, width: 55, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/travel/paydc.png')}
                style={{height: 45, width: 55, marginRight: 10}}
                resizeMode="contain"
              />
             
            </View>
         
    
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
                color: 'black',
                fontSize: 12,
                marginTop: 10,
                marginBottom: 3,
                fontFamily: 'Montserrat-Regular',
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
                  fontSize: 15,
                }}
              />
            </View>

            <Text
              style={{
                color: 'black',
                fontSize: 12,
                marginTop: 20,
                fontFamily: 'Montserrat-Regular',
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
                  fontSize: 15,
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
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card2.png')}
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card3.png')}
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card4.png')}
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
            </View>
         
         
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '45%'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    marginTop: 10,
                    marginBottom: 3,
                    fontFamily: 'Montserrat-Regular',
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
                      fontSize: 15,
                    }}
                    placeholderTextColor="black"
                    placeholder="MM/YY"
                    con
                  />
                </View>
              </View>

              <View style={{width: '45%'}}>
                <Text
                  style={{
                    color: 'black',
                    marginBottom: 3,
                    fontSize: 12,
                    marginTop: 10,
                    fontFamily: 'Montserrat-Regular',
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
                      fontSize: 15,
                    }}
                    placeholderTextColor="black"
                    placeholder="XXXX"
                  />
                </View>
              </View>
            </View>
            {/* ==========Button========== */}

            <Button
              title="SUBMIT"
              onPress={() => hireNowFunction()}
              buttonStyle={{
                backgroundColor: '#ff235d',
                width: '100%',
                height: 50,
                borderRadius: 8,
              }}
              titleStyle={{fontSize: 12, letterSpacing: 1}}
              containerStyle={{
                marginVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />

            {/* ==========Data is Secured Row========== */}
       
          </View>
        </View>
      </View>
    </ScrollView>
  )
  : (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={{width: '90%', alignSelf: 'center', marginBottom: 80}}>
        <View style={{alignItems: 'center', marginVertical: 10}}>
          <Text
            style={{
              color: '#ff4170',

              fontFamily: 'FredokaOne-Regular',

              fontSize: 19,
              marginVertical: 8,
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
              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Order:{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.order}
                </Text>
              </Text>

              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Premium:{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.premium}
                </Text>
              </Text>

              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Tax(13%):{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Regular',
                  }}>
                  {item.tax}
                </Text>
              </Text>

              <Text
                style={{
                  color: '#ff235d',
                  fontSize: 12,

                  fontFamily: 'Montserrat-Regular',
                }}>
                Service Fee (5%):{' '}
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    fontFamily: 'Montserrat-Medium',
                  }}>
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
                    fontFamily: 'Montserrat-Bold',
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
                color: 'black',
                fontSize: 12,
                marginTop: 10,
                marginBottom: 3,
                fontFamily: 'Montserrat-Regular',
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
                  fontSize: 15,
                }}
              />
            </View>

            <Text
              style={{
                color: 'black',
                fontSize: 12,
                marginTop: 20,
                fontFamily: 'Montserrat-Regular',
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
                  fontSize: 15,
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
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card2.png')}
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card3.png')}
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
              <Image
                source={require('../../assets/icons/card4.png')}
                style={{height: 37, width: 40, marginRight: 10}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: '45%'}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 12,
                    marginTop: 10,
                    marginBottom: 3,
                    fontFamily: 'Montserrat-Regular',
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
                      fontSize: 15,
                    }}
                    placeholderTextColor="black"
                    placeholder="MM/YY"
                    con
                  />
                </View>
              </View>

              <View style={{width: '45%'}}>
                <Text
                  style={{
                    color: 'black',
                    marginBottom: 3,
                    fontSize: 12,
                    marginTop: 10,
                    fontFamily: 'Montserrat-Regular',
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
                      fontSize: 15,
                    }}
                    placeholderTextColor="black"
                    placeholder="XXXX"
                  />
                </View>
              </View>
            </View>
            {/* ==========Button========== */}

            <Button
              title="MAKE PAYMENT"
              onPress={() => hireNowFunction()}
              buttonStyle={{
                backgroundColor: '#ff235d',
                width: '100%',
                height: 50,
                borderRadius: 8,
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
                // width: '50%',
                paddingHorizontal: 5,
                alignSelf: 'center',
                borderRadius: 7,
                marginTop: 10,
                marginBottom: 35,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginVertical: 10,
                  paddingVertical: 5,
                }}>
                <View style={{width: 20, height: 15}}>
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
                    marginLeft: 3,
                    fontFamily: 'Montserrat-Bold',
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
