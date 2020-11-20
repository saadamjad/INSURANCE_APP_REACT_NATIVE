import React, {useState,useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Button} from 'react-native-elements';

const App = (props) => {
  const SignupB = () => {
    props.navigation.navigate('revieworder');
  };

  const [genders, setGender] = useState([
    {
      type: 'Male',
    },
    {
      type: 'Female',
    },
  ]);
  const [travels, setTravels] = useState([
    {
      type: 'place 1',
    },
    {
      type: 'place 2',
    },
  ]);
  const [Benificiary, setBenificiary] = useState([
    {
      type: 'family',
    },
    {
      type: 'neighbours',
    },
  ]);

  const [selectGender, setGendertype] = useState('Select Gender');
  const [selectTravel, setselectTravel] = useState('Select Destination');
  const [selectBenificiary, setBenificiary22] = useState('Select Benificiary');

  const [show, setShow] = useState(false);
  const [carPolicy, setCarPolicy] = useState(false);


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
  <ScrollView
  contentContainerStyle={{flexGrow: 1}}
  style={{backgroundColor: 'white'}}
  showsVerticalScrollIndicator={false}>
  <View style={{flex: 1, backgroundColor: 'white', marginBottom: 50}}>
    <View
      style={{
        alignItems: 'center',
        paddingVertical: 15,
      }}>
      <Text
        style={{
          fontSize: 20,

          fontFamily: 'FredokaOne-Regular',

          color: '#ff235d',
        }}>
        Order Detail
      </Text>
      <View
        style={{
          backgroundColor: '#fff3f6',
          width: '50%',
          alignSelf: 'center',
          borderRadius: 5,
          marginTop: 10,
          marginBottom: 25,
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

    <View
      style={{
        // borderWidth: 1,
        // flex: 1,
        paddingBottom: 100,
        borderRadius: 5,
        paddingTop: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 10,
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: 'black',
          marginLeft: 5,

          fontFamily: 'Montserrat-Regular',
        }}>
        {' '}
        Personal Details{' '}
      </Text>

      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
        Car Owner Name{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
          }}>
          <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
        </View>
      </View>
     

      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
          CNIC{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
          }}>
          <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
        </View>
      </View>

      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
          Contact Number{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
          }}>
          <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
        </View>
      </View>

      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
          Email
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
          }}>
          <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
        </View>
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
          Address{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
          }}>
          <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
        </View>
      </View>

      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
        Car Registeration No
        </Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
          }}>
          <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
        </View>
      </View>

      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
        Date for inspection{' '}
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
            paddingHorizontal: 7,
          }}
          onPress={() => setShow(!show)}>
          <Text
            style={{
              width: '90%',
              fontSize: 15,
            }}>
            {/* {selectGender} */}
          </Text>
          <Image
            source={require('../../assets/icons/52.png')}
            style={{height: 15, width: 15}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: '80%',
          alignSelf: 'center',
          height: 50,
          marginTop: 20,
        }}>
        <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
          {' '}
        Preffered time{' '}
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderWidth: 2,
            borderColor: '#ff2760',
            borderRadius: 8,
            width: '100%',
            height: 45,
            alignItems: 'center',
            paddingHorizontal: 7,
          }}
          onPress={() => setShow(!show)}>
          <Text
            style={{
              width: '90%',
              fontSize: 15,
            }}>
            {/* {selectGender} */}
          </Text>
          <Image
            source={require('../../assets/icons/52.png')}
            style={{height: 15, width: 15}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>

    
    <Button
      title="SUBMIT & REVIEW"
      onPress={() => _NextPage()}
      buttonStyle={{
        backgroundColor: '#ff235d',
        width: '74%',
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
  </View>
</ScrollView>

  : (
    <ScrollView
      contentContainerStyle={{flexGrow: 1}}
      style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={{flex: 1, backgroundColor: 'white', marginBottom: 50}}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <Text
            style={{
              fontSize: 20,

              fontFamily: 'FredokaOne-Regular',

              color: '#ff235d',
            }}>
            Order Detail
          </Text>
          <View
            style={{
              backgroundColor: '#fff3f6',
              width: '50%',
              alignSelf: 'center',
              borderRadius: 5,
              marginTop: 10,
              marginBottom: 25,
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

        <View
          style={{
            // borderWidth: 1,
            // flex: 1,
            paddingBottom: 100,
            borderRadius: 5,
            paddingTop: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 10,
            backgroundColor: 'white',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              marginLeft: 5,

              fontFamily: 'Montserrat-Regular',
            }}>
            {' '}
            Personal Details{' '}
          </Text>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Name{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Gender{' '}
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
                paddingHorizontal: 7,
              }}
              onPress={() => setShow(!show)}>
              <Text
                style={{
                  width: '90%',
                  fontSize: 15,
                }}>
                {selectGender}
              </Text>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {show ? (
              <View
                style={{
                  width: '100%',

                  elevation: 2,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  zIndex: 1000,
                }}
                onPress={() => {
                  setShow(!show);
                }}>
                {genders.map((item, i) => {
                  return (
                    <Text
                      style={{
                        paddingVertical: 10,
                        borderBottomWidth: 0.1,
                        fontSize: 15,
                      }}
                      onPress={() => {
                        setGendertype(item.type);
                        setShow(false);
                      }}>
                      {item.type}
                    </Text>
                  );
                })}
              </View>
            ) : null}
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              City{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Contact Number{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              CNIC
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Passport Number{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Email{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Address{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 85,
                // alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>
        </View>

        <View
          style={{
            // borderWidth: 1,
            // flex: 1,
            marginTop: 25,
            paddingBottom: 80,
            borderRadius: 5,
            paddingTop: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 10,
            backgroundColor: 'white',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              marginLeft: 5,

              fontFamily: 'Montserrat-Regular',
            }}>
            {' '}
            Travel Details{' '}
          </Text>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Destination{' '}
            </Text>
            <TextInput
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}
            />
            {/* {show ? (
              <View
                style={{
                  width: '100%',

                  elevation: 2,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  zIndex: 1000,
                }}
                onPress={() => {
                  setShow(!show);
                }}>
                {travels.map((item, i) => {
                  return (
                    <Text
                      style={{
                        paddingVertical: 10,
                        borderBottomWidth: 0.1,
                      }}
                      onPress={() => {
                        setGendertype(item.type);
                        setShow(false);
                      }}>
                      {item.type}
                    </Text>
                  );
                })}
              </View>
            ) : null} */}
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Destination{' '}
            </Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
                paddingHorizontal: 7,
              }}
              onPress={() => {
                setShow(!show);
              }}>
              <Text style={{width: '90%', borderWidth: 0, fontSize: 15}}>
                {selectTravel}
              </Text>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {show ? (
              <View
                style={{
                  width: '100%',

                  elevation: 2,
                  paddingVertical: 6,
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  zIndex: 1000,
                }}
                onPress={() => {
                  setShow(!show);
                }}>
                {travels.map((item, i) => {
                  return (
                    <Text
                      style={{
                        paddingVertical: 10,
                        borderBottomWidth: 0.1,
                        fontSize: 15,
                      }}
                      onPress={() => {
                        setGendertype(item.type);
                        setShow(false);
                      }}>
                      {item.type}
                    </Text>
                  );
                })}
              </View>
            ) : null}
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Travel Purpose{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Start Date{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              End Date
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>
        </View>
        <View
          style={{
            // borderWidth: 1,
            // flex: 1,
            marginTop: 25,
            paddingBottom: 80,
            marginBottom: 40,
            borderRadius: 5,
            paddingTop: 10,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 10,
            backgroundColor: 'white',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              color: 'black',
              marginLeft: 5,
              fontFamily: 'Montserrat-Regular',
            }}>
            {' '}
            Benificiary Details{' '}
          </Text>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Benificiary Name{' '}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>
          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Benificiary Contact{' '}
            </Text>
            <TextInput
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}
            />
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Relationship with you
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              height: 50,
              marginTop: 20,
            }}>
            <Text style={{color: '#858585', fontSize: 12, marginBottom: 3}}>
              {' '}
              Benificiary Email
            </Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 2,
                borderColor: '#ff2760',
                borderRadius: 8,
                width: '100%',
                height: 45,
                alignItems: 'center',
              }}>
              <TextInput style={{width: '88%', marginLeft: 5, fontSize: 15}} />
            </View>
          </View>
        </View>
        {/* <Button
          title="SUBMIT & REVIEW"
          // onPress={() => ()}
          onPress={() => props.navigation.navigate('MakeaPayment')}
          buttonStyle={{
            backgroundColor: '#ff235d',
            width: '80%',
            alignSelf: 'center',
            height: 50,
            borderRadius: 10,
          }}
          titleStyle={{fontSize: 12, letterSpacing: 1}}
          containerStyle={{
            marginVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        /> */}
        <Button
          title="SUBMIT & REVIEW"
          onPress={() => _NextPage()}
          buttonStyle={{
            backgroundColor: '#ff235d',
            width: '74%',
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
      </View>
    </ScrollView>


);
};
export default App;
