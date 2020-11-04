// // import React from 'react';
// // import {Button} from 'react-native-elements';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // import LinearGradient from 'react-native-linear-gradient';
// // import {View, Text, ImageBackground, Image} from 'react-native';
// // import styles from './styles';

// // const App = (props) => {
// //   const function1 = () => {
// //     // alert('Ruko Zara');
// //     props.navigation.navigate('loginpage');
// //   };

// //   const function2 = () => {
// //     alert('Sabar Karo');
// //   };

// //   const function3 = () => {
// //     alert('Aagaya Tou Jawan Hoke');
// //   };

// //   return (
// //     <ImageBackground
// //       source={require('../../assets/images/bg_image.png')}
// //       style={{
// //         height: '100%',
// //         width: '100%',
// //       }}>
// //       <View style={styles.imageView}>
// //         <Image
// //           source={require('../../assets/images/logo.png')}
// //           style={styles.imageStyle}
// //         />
// //       </View>

// //       {/* ==========Buttons========== */}

// //       <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.loginLG}>
// //         <Button
// //           title="Login"
// //           onPress={() => function1()}
// //           buttonStyle={{backgroundColor: 'transparent'}}
// //         />
// //       </LinearGradient>

// //       <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.signUpLG}>
// //         <Button
// //           title="Sign Up"
// //           onPress={() => function2()}
// //           buttonStyle={{
// //             backgroundColor: 'transparent',
// //           }}
// //         />
// //       </LinearGradient>

// //       <View style={styles.facebookView}>
// //         <Button
// //           icon={
// //             <FontAwesome
// //               name="facebook"
// //               size={15}
// //               color="white"
// //               style={{marginRight: 10}}
// //             />
// //           }
// //           title="Connect with facebook"
// //           buttonStyle={{backgroundColor: '#3B5998', height: 40}}
// //           onPress={() => function3()}
// //         />
// //       </View>

// //       {/* ==========Footer========== */}

// //       <View style={styles.footerView}>
// //         <Text style={styles.footerText}>
// //           By Proceeding you Agree to our {'\n'} Terms & Conditions {'\n'} and
// //           comfrom you are atleast 13 year old.
// //         </Text>
// //       </View>
// //     </ImageBackground>
// //   );
// // };

// // export default App;

// // import React from 'react';
// // import {Button} from 'react-native-elements';
// // import {Text, View, Image, SafeAreaView, TextInput} from 'react-native';
// // import Zocial from 'react-native-vector-icons/Zocial';
// // import FontAwesome from 'react-native-vector-icons/FontAwesome';
// // const App = (props) => {
// //  const SignUp=()=>{
// //    props.navigation.navigate('insuranceSignup')
// //  }
// //   return (
// //     <SafeAreaView style={{flex: 1}}>
// //       <View
// //         style={{
// //           //   flex: 0.67,
// //           height: 200,
// //           width: '100%',
// //         }}>
// //         <Image
// //           source={require('../../assets/Samad/2.png')}
// //           resizeMode={'cover'}
// //           style={{height: '100%', width: '100%'}}
// //         />
// //       </View>

// //       {/* ==========Description========== */}
// //       <View style={{alignItems: 'center', marginVertical: 40}}>
// //         <Text style={{fontSize: 15, fontWeight: 'bold'}}>Welcome!</Text>
// //         <Text
// //           style={{
// //             fontSize: 12,
// //             fontWeight: '100',
// //             color: '#727272',
// //             textAlign: 'center',
// //           }}>
// //           Login to see the insurance {'\n'} plans
// //         </Text>
// //       </View>

// //       {/* =====Login Form===== */}
// //       <View style={{width: '80%', alignSelf: 'center'}}>
// //         <Text style={{color: '#707070', marginLeft: 25, fontSize: 13}}>
// //           Email
// //         </Text>
// //         <View style={{alignItems: 'center'}}>
// //           <View
// //             style={{
// //               flexDirection: 'row',
// //               borderWidth: 1,
// //               borderColor: '#d23957',
// //               borderRadius: 10,
// //               width: '85%',
// //               height: 42,
// //               alignItems: 'center',
// //             }}>
// //             <Zocial
// //               name="email"
// //               size={16}
// //               color="#d23957"
// //               style={{
// //                 alignItems: 'flex-end',
// //                 marginLeft: 10,
// //               }}
// //             />
// //             <TextInput
// //               //   placeholder="@example.com"
// //               //   placeholderTextColor="#C0C0C0"
// //               keyboardType="email-address"
// //               style={{width: '88%', marginLeft: 5}}
// //             />
// //           </View>
// //         </View>
// //         {/* ==========Password========== */}
// //         <Text
// //           style={{
// //             color: '#707070',
// //             marginLeft: 25,
// //             marginTop: 10,
// //             fontSize: 13,
// //           }}>
// //           Password
// //         </Text>
// //         <View style={{alignItems: 'center'}}>
// //           <View
// //             style={{
// //               flexDirection: 'row',
// //               borderWidth: 1,
// //               borderColor: '#d23957',
// //               borderRadius: 10,
// //               width: '85%',
// //               height: 42,
// //               alignItems: 'center',
// //             }}>
// //             <FontAwesome
// //               name="lock"
// //               size={18}
// //               color="#d23957"
// //               style={{
// //                 alignItems: 'flex-end',
// //                 marginLeft: 10,
// //               }}
// //             />
// //             <TextInput
// //               //   placeholder="@example.com"
// //               //   placeholderTextColor="#C0C0C0"
// //               keyboardType="email-address"
// //               style={{width: '88%', marginLeft: 5}}
// //             />
// //           </View>
// //           {/* ==========Buttons========== */}

// //           <Button
// //             title="LOGIN"
// //             // onPress={() => function()}
// //             buttonStyle={{
// //               backgroundColor: '#d23957',
// //               width: 245,
// //               height: 45,
// //               borderRadius: 5,
// //             }}
// //             titleStyle={{fontWeight: 'bold', fontSize: 12, letterSpacing: 1}}
// //             containerStyle={{
// //               marginVertical: 10,
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //             }}
// //           />
// //           <View
// //             style={{
// //               flexDirection: 'row',
// //               width: '85%',
// //               justifyContent: 'space-between',
// //             }}>
// //             <Button
// //               title="LOGIN AS GUEST"
// //               // onPress={() => function()}
// //               buttonStyle={{
// //                 backgroundColor: 'transparent',
// //                 height: 45,
// //               }}
// //               titleStyle={{color: '#d23957', fontSize: 12, fontWeight: 'bold'}}
// //               containerStyle={{
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 borderWidth: 1,
// //                 borderColor: '#d23957',
// //                 borderRadius: 5,
// //                 height: 45,
// //               }}
// //             />
// //             <Button
// //               title="SIGN UP"
// //               onPress={() => SignUp()}
// //               buttonStyle={{
// //                 backgroundColor: '#d23957',
// //                 width: 120,
// //                 height: 45,
// //               }}
// //               titleStyle={{fontSize: 12, fontWeight: 'bold', letterSpacing: 1}}
// //               containerStyle={{
// //                 borderRadius: 5,
// //               }}
// //             />
// //           </View>
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };
// // export default App;

// import React from 'react';
// import {Button} from 'react-native-elements';
// import {Text, View, Image, SafeAreaView, TextInput} from 'react-native';
// import Zocial from 'react-native-vector-icons/Zocial';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// const App = (props) => {
//   const SignUp = () => {
//     props.navigation.navigate('insuranceSignup');
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View
//         style={{
//           //   flex: 0.67,
//           height: 200,
//           width: '100%',
//         }}>
//         <Image
//           // source={require('../../assets/Samad/2.png')}
//           resizeMode={'cover'}
//           style={{height: '100%', width: '100%'}}
//         />
//       </View>

//       {/* ==========Description========== */}
//       <View style={{alignItems: 'center', marginVertical: 40}}>
//         <Text style={{fontSize: 15, fontWeight: 'bold'}}>Welcome!</Text>
//         <Text
//           style={{
//             fontSize: 12,
//             fontWeight: '100',
//             color: '#727272',
//             textAlign: 'center',
//           }}>
//           Login to see the insurance {'\n'} plans
//         </Text>
//       </View>

//       {/* =====Login Form===== */}
//       <View style={{width: '80%', alignSelf: 'center'}}>
//         <Text style={{color: '#707070', marginLeft: 25, fontSize: 13}}>
//           Email
//         </Text>
//         <View style={{alignItems: 'center'}}>
//           <View
//             style={{
//               flexDirection: 'row',
//               borderWidth: 1,
//               borderColor: '#d23957',
//               borderRadius: 10,
//               width: '85%',
//               height: 42,
//               alignItems: 'center',
//             }}>
//             <Zocial
//               name="email"
//               size={16}
//               color="#d23957"
//               style={{
//                 alignItems: 'flex-end',
//                 marginLeft: 10,
//               }}
//             />
//             <TextInput
//               //   placeholder="@example.com"
//               //   placeholderTextColor="#C0C0C0"
//               keyboardType="email-address"
//               style={{width: '88%', marginLeft: 5}}
//             />
//           </View>
//         </View>
//         {/* ==========Password========== */}
//         <Text
//           style={{
//             color: '#707070',
//             marginLeft: 25,
//             marginTop: 10,
//             fontSize: 13,
//           }}>
//           Password
//         </Text>
//         <View style={{alignItems: 'center'}}>
//           <View
//             style={{
//               flexDirection: 'row',
//               borderWidth: 1,
//               borderColor: '#d23957',
//               borderRadius: 10,
//               width: '85%',
//               height: 42,
//               alignItems: 'center',
//             }}>
//             <FontAwesome
//               name="lock"
//               size={18}
//               color="#d23957"
//               style={{
//                 alignItems: 'flex-end',
//                 marginLeft: 10,
//               }}
//             />
//             <TextInput
//               //   placeholder="@example.com"
//               //   placeholderTextColor="#C0C0C0"
//               keyboardType="email-address"
//               style={{width: '88%', marginLeft: 5}}
//             />
//           </View>
//           {/* ==========Buttons========== */}

//           <Button
//             title="LOGIN"
//             // onPress={() => function()}
//             buttonStyle={{
//               backgroundColor: '#d23957',
//               width: 245,
//               height: 45,
//               borderRadius: 5,
//             }}
//             titleStyle={{fontWeight: 'bold', fontSize: 12, letterSpacing: 1}}
//             containerStyle={{
//               marginVertical: 10,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//           />
//           <View
//             style={{
//               flexDirection: 'row',
//               width: '85%',
//               justifyContent: 'space-between',
//             }}>
//             <Button
//               title="LOGIN AS GUEST"
//               // onPress={() => function()}
//               buttonStyle={{
//                 backgroundColor: 'transparent',
//                 height: 45,
//               }}
//               titleStyle={{
//                 color: '#d23957',
//                 fontSize: 12,
//                 fontWeight: 'bold',
//               }}
//               containerStyle={{
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 borderWidth: 1,
//                 borderColor: '#d23957',
//                 borderRadius: 5,
//                 height: 45,
//               }}
//             />
//             <Button
//               title="SIGN UP"
//               onPress={() => SignUp()}
//               buttonStyle={{
//                 backgroundColor: '#d23957',
//                 width: 120,
//                 height: 45,
//               }}
//               titleStyle={{
//                 fontSize: 12,
//                 fontWeight: 'bold',
//                 letterSpacing: 1,
//               }}
//               containerStyle={{
//                 borderRadius: 5,
//               }}
//             />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };
// export default App;

import React from 'react';
import {Button} from 'react-native-elements';
import {Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
const App = (props) => {
  const Login = () => {
    props.navigation.navigate('loginpage');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.6, width: '100%'}}>
        <Image
          source={require('../../assets/icons/9.png')}
          resizeMode={'cover'}
          style={{height: '100%', width: '100%'}}
        />
      </View>
      <View style={{flex: 0.4}}>
        {/* ==========Description========== */}
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'FredokaOne-Regular',
            }}>
            Join the Community
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '100',
              color: '#838383',
              fontFamily: 'Montserrat-Regular',
              textAlign: 'center',
              paddingVertical: 10,
              paddingHorizontal: 30,
            }}>
            Compare & buy insurance plans from the top companies of Pakistan.
          </Text>
        </View>

        {/* ==========Button========== */}

        <Button
          title="LOGIN"
          onPress={() => Login()}
          buttonStyle={{
            backgroundColor: 'white',
            width: '70%',
            alignSelf: 'center',
            height: 45,
            marginBottom: 10,
            borderWidth: 2,
            // elevation: 1,
            borderRadius: 8,
            borderColor: '#fe4270',
          }}
          titleStyle={{color: '#ff235d', fontFamily: 'Montserrat-Regular'}}
        />
        <Button
          title="SIGNUP"
          onPress={() => props.navigation.navigate('signup')}
          buttonStyle={{
            backgroundColor: '#ff235d',
            width: '70%',
            alignSelf: 'center',
            height: 45,
            borderWidth: 2,
            // elevation: 1,
            borderRadius: 8,
            borderColor: '#ff235d',
          }}
          titleStyle={{
            color: 'white',

            fontFamily: 'Montserrat-Regular',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
