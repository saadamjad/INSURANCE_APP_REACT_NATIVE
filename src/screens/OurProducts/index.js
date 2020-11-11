import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const App = (props) => {
  const Drawer = createDrawerNavigator();
  const [Array, setArray] = useState([
    {
      image: require('../../assets/icons/travel.png'),
    },
    {
      image: require('../../assets/icons/life.png'),
    },
    {
      image: require('../../assets/icons/car.png'),
    },
    {
      image: require('../../assets/icons/health.png'),
    },
  ]);
  const callingfunction = () => {
    props.navigation.navigate('MakeaPayment');
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        automaticallyAdjustContentInsets={false}
        style={{}}>
        <View style={{flexDirection: 'row', borderWidth: 0, height: 50}}>
          <View
            style={{
              alignItems: 'center',

              flex: 1,
              // borderWidth: 1,
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#ff3c6c',
                fontFamily: 'FredokaOne-Regular',
                fontSize: 20,
                // textAlignVertical: 'bottom',
              }}>
              Our Products
            </Text>
          </View>
        </View>
        {/* ==========Image========== */}
        {Array.map((item, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={{
                height: 190,
                width: '90%',
                alignSelf: 'center',
                // // backgroundColor: 'red',
                // borderWidth: 1,
                backgroundColor: 'white',
                // marginVertical: 10,
                borderRadius: 10,
                shadowColor: '#000',
                // shadowOffset: {
                //   width: 0,
                //   height: 2,
                // },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,

                // elevation: 5,
              }}
              // onPress={() => callingfunction()}
              onPress={() => props.navigation.navigate('TravelInsurance')}>
              <Image
                source={item.image}
                style={{height: '100%', width: '100%', resizeMode: 'stretch'}}
              />
            </TouchableOpacity>
          );
        })}
        <View style={{height: 60}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default App;
