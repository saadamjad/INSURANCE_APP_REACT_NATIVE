import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = (props) => {
  const [openCountries, setopenCountries] = useState(false);
  const [selectContrysNamem, setSelectContrysName] = useState('Pakistan');
  const [allCountries, setAllCountries] = useState([
    {countryName: 'Pakistan'},
    {countryName: 'USA'},
  ]);
  const [selectDate, setDate] = useState('12/02/2021');
  const [openDate, setOpenDate] = useState(false);

  const [allDate, setAllDate] = useState([
    {countryName: '29 feb 2020'},
    {countryName: '28 july 2021'},
    {countryName: '29 feb 2020'},
    {countryName: '28 july 2021'},
  ]);

  const [carPolicy, setCarPolicy] = useState(false);
  useEffect(() => {
    // console.log('prrrr', props.route.params);
   
    let getState = props.route.params ? props.route.params.carInsurance : false;
    setCarPolicy(getState);
  }, []);
  const SignupB = () => {
    props.navigation.navigate('insurancepolicies', {
      carInsurance: true,
    });
  };
  const SignupB2 = () => {
    props.navigation.navigate('insurancepolicies', {
      carInsurance: false,
    });
  };
  return carPolicy ? (
    <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
    <ImageBackground
      source={require('../../assets/travel/carinsurance.png')}
      style={{height: '100%', width: '100%'}}
      resizeMode='stretch'
      // res
    >
      
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flex: 1,
            // borderWidth: 1,
            marginBottom: 20,
            // backgroundColor: 'red',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
              // borderWidth: 1,
              marginTop: 20,
              // marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
                fontFamily: 'FredokaOne-Regular',
                marginTop: 50,
              }}>
              Car Insurance
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                paddingTop: 5,
                marginBottom: 20,
              }}>
              Compare best quotes & buy your Car Insurance policy online
            </Text>
          </View>

          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginBottom: 3,
              marginTop: 0,
            }}>
            Car Brand
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setopenCountries(!openCountries);
              // setOpenDate(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/57.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}>
              <Text> {selectContrysNamem} </Text>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {openCountries ? (
            <TouchableOpacity
              style={{
                width: '98%',

                borderColor: 'red',
                elevation: 2,
                paddingVertical: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}>
              {allCountries.map((item, i) => {
                return (
                  <Text
                    style={{
                      paddingVertical: 10,
                      borderBottomWidth: 0.1,
                      borderColor: 'red',
                      paddingLeft: 10,
                      width: '100%',
                    }}
                    onPress={() => {
                      setSelectContrysName(item.countryName),
                        setopenCountries(false);
                      setOpenDate(false);
                    }}>
                    {item.countryName}
                  </Text>
                );
              })}
            </TouchableOpacity>
          ) : null}

          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginTop: 20,
              marginBottom: 3,
            }}>
            Car Model
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setOpenDate(!openDate);
              setopenCountries(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/55.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}>
              <Text> {selectDate} </Text>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {openDate ? (
            <TouchableOpacity
              style={{
                width: '98%',

                borderColor: 'red',
                elevation: 2,
                paddingVertical: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                // zIndex: '-1000',
              }}>
              {allDate.map((item, i) => {
                return (
                  <Text
                    style={{
                      paddingVertical: 10,
                      borderBottomWidth: 0.1,
                      borderColor: 'red',
                      paddingLeft: 10,
                      width: '100%',
                    }}
                    onPress={() => {
                      setDate(item.countryName), setOpenDate(!openDate);
                    }}>
                    {item.countryName}
                  </Text>
                );
              })}
            </TouchableOpacity>
          ) : null}

          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginTop: 20,
              marginBottom: 3,
            }}>
            Manufactured Year
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setOpenDate(!openDate);
              setopenCountries(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/51.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <TextInput
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}
            />

            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginTop: 20,
              marginBottom: 3,
            }}>
            Passenger Car Value
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setOpenDate(!openDate);
              setopenCountries(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/51.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <TextInput
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}
            />

            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>


          <Button
            title="Search"
            onPress={() => SignupB()}
            buttonStyle={{
              backgroundColor: '#ff235d',
              width: '100%',
              height: 50,
              borderRadius: 8,
            }}
            titleStyle={{fontSize: 15, letterSpacing: 1}}
            containerStyle={{
              marginVertical: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
     
     
    </ImageBackground>
      </ScrollView>

  ) : (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 250,
            // width: '100%',
            // borderWidth: 1,
          }}>
          <Image
            source={require('../../assets/icons/49.png')}
            resizeMode={'stretch'}
            style={{height: '100%', width: '100%'}}
          />
        </View>
        <View
          style={{
            width: '90%',
            alignSelf: 'center',
            flex: 1,
            marginBottom: 50,
            // backgroundColor: 'red',
          }}>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 20,
            }}>
            <Text
              style={{
                fontSize: 18,

                color: 'black',
                fontFamily: 'FredokaOne-Regular',
              }}>
              Travel Insurance
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                textAlign: 'center',
                paddingTop: 5,
                marginBottom: 20,
              }}>
              Compare best quotes & buy your Travel Insurance policy online
            </Text>
          </View>

          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginBottom: 3,
            }}>
            Countries travelling to
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setopenCountries(!openCountries);
              // setOpenDate(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/57.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}>
              <Text> {selectContrysNamem} </Text>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {openCountries ? (
            <TouchableOpacity
              style={{
                width: '98%',

                borderColor: 'red',
                elevation: 2,
                paddingVertical: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
              }}>
              {allCountries.map((item, i) => {
                return (
                  <Text
                    style={{
                      paddingVertical: 10,
                      borderBottomWidth: 0.1,
                      borderColor: 'red',
                      paddingLeft: 10,
                      width: '100%',
                    }}
                    onPress={() => {
                      setSelectContrysName(item.countryName),
                        setopenCountries(false);
                      setOpenDate(false);
                    }}>
                    {item.countryName}
                  </Text>
                );
              })}
            </TouchableOpacity>
          ) : null}

          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginTop: 20,
              marginBottom: 3,
            }}>
            Trip Start & End Date
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setOpenDate(!openDate);
              setopenCountries(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/55.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <View
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}>
              <Text> {selectDate} </Text>
            </View>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

          {openDate ? (
            <TouchableOpacity
              style={{
                width: '98%',

                borderColor: 'red',
                elevation: 2,
                paddingVertical: 10,
                backgroundColor: 'white',
                alignSelf: 'center',
                // zIndex: '-1000',
              }}>
              {allDate.map((item, i) => {
                return (
                  <Text
                    style={{
                      paddingVertical: 10,
                      borderBottomWidth: 0.1,
                      borderColor: 'red',
                      paddingLeft: 10,
                      width: '100%',
                    }}
                    onPress={() => {
                      setDate(item.countryName), setOpenDate(!openDate);
                    }}>
                    {item.countryName}
                  </Text>
                );
              })}
            </TouchableOpacity>
          ) : null}
          <Text
            style={{
              color: 'black',

              fontSize: 12,
              marginTop: 20,
              marginBottom: 3,
            }}>
            Passenger Travelling
          </Text>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              borderWidth: 2,
              borderColor: '#fe4270',
              borderRadius: 8,
              width: '100%',
              height: 45,
              alignItems: 'center',
            }}
            onPress={() => {
              setOpenDate(!openDate);
              setopenCountries(false);
            }}>
            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/51.png')}
                style={{height: 15, width: 15}}
              />
            </View>
            <TextInput
              style={{
                flex: 0.8,
                marginLeft: 5,
                fontSize: 10,
              }}
            />

            <View
              style={{
                flex: 0.1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/icons/52.png')}
                style={{height: 15, width: 15}}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>

        
          <Button
            title="Search"
            onPress={() => SignupB2()}
            buttonStyle={{
              backgroundColor: '#ff235d',
              width: '100%',
              height: 50,
              borderRadius: 8,
            }}
            titleStyle={{fontSize: 15, letterSpacing: 1}}
            containerStyle={{
              marginVertical: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default App;
