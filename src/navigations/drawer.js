import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
const DrawerContent = (props) => {
  let activeName = props?.state?.history[1]?.key?.split('-')[0];
  let array;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#e82e53',
      }}>
      <View style={{flex: 1, paddingTop: 10, marginTop: 60}}>
        {
          (array = [
            {
              title: 'Home',
              name: 'HomeScreen',
              type: 'FontAwesome',
              icon: require('../assets/icons/71.png'),
            },
            {
              title: 'Products',
              name: 'OurProducts',
              type: 'Entypo',
              icon: require('../assets/icons/70.png'),
            },
            {
              title: 'My orders',
              name: 'Home',

              type: 'Fontisto',
              icon: require('../assets/icons/69.png'),
            },
            {
              title: 'Notification',
              name: 'Home',
              type: 'FontAwesome5',
              icon: require('../assets/icons/68.png'),
            },

            {
              title: 'About us ',
              name: 'visitwebsite',

              type: 'FontAwesome',
              icon: require('../assets/icons/67.png'),
            },
            {
              title: 'Blogs',
              name: 'Home',
              type: 'Entypo',
              icon: require('../assets/icons/66.png'),
            },
            {
              title: 'Articals',
              name: 'Home',
              icon: require('../assets/icons/65.png'),
            },
            {
              title: 'Videos',
              name: 'Home',
              icon: require('../assets/icons/64.png'),
            },
            {
              title: 'LOGOUT',
              name: 'login',
            },
          ].map(
            (val, i) => (
              console.log('loop', val),
              (
                <TouchableOpacity
                  onPress={() =>
                    props.navigation.navigate(val.name ? val.name : '')
                  }
                  style={{
                    flexDirection: 'row',
                    backgroundColor: i == 8 ? 'white' : 'e82e53',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    // borderColor: 'blue',
                    marginTop: i == 8 ? 100 : 5,
                    borderBottomWidth: 1,
                    borderColor: 'black',
                    // elevation: 0.5,
                    borderTopColor: 'rgba(255,255,255, 0.4)',
                    // paddingTop: 10,
                    paddingVertical: i == 8 ? 15 : 10,
                    // backgroundColor: 'blue',
                    width: i == 8 ? '89%' : '96%',
                    borderRadius: i == 8 ? 5 : 0,
                    alignSelf: 'center',
                    borderBottomWidth: 0.25,
                    borderColor: '#dc92a2',

                    // borderBottomColor: 'transparent',
                  }}>
                  {i == 8 ? null : (
                    // <Icon
                    //   style={{
                    //     flex: 0.2,

                    //     color: 'white',
                    //     // activeName == val.name
                    //     //   ? props.activeTintColor
                    //     //   : 'white',
                    //     marginRight: 7,
                    //   }}
                    //   type={val.type ? val.type : 'AntDesign'}
                    //   name={val.icon}
                    //   size={9}
                    // />
                    <Image
                      source={val.icon}
                      style={{height: 15, width: 15, marginRight: 10}}
                      resizeMode="contain"
                    />
                  )}

                  <Text
                    style={{
                      fontSize: i == 8 ? 18 : 13,

                      letterSpacing: 1,

                      flex: 1,
                      fontWeight: i == 8 ? 'bold' : '100',
                      textAlign: i == 8 ? 'center' : 'left',
                      color: i == 8 ? '#e82e53' : 'white',
                      fontFamily: 'Montserrat-Regular',
                    }}>
                    {val.title}
                  </Text>
                </TouchableOpacity>
              )
            ),
          ))
        }
      </View>
    </View>
  );
};
export default DrawerContent;
