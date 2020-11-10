import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import {Image, View, Text} from 'react-native';

import BottomTabNavigation from './bottomTabNavigation';
import {createStackNavigator} from '@react-navigation/stack';

import login from '../screens/login';
import signup from '../screens/signup';
import loginpage from '../screens/login_Page';
import revieworderdetails from '../screens/ReviewOrderDetails';
import insurancepolicies from '../screens/InsurancePolicies';
import OurProducts from '../screens/OurProducts';
import TravelInsurance from '../screens/TravelInsurance';
import MakeaPayment from '../screens/MakeaPayment';
import orderdetailsinsurance from '../screens/share_UGGLAN';
import visitwebsite from '../screens/orderdetails';
import splash from '../screens/splash';
// import hireProfile from '../screens/MakeaPayment';
import orderconfirmed from '../screens/thankyou';
import Home from '../screens/Home';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: 'transparent'}}
      drawerContentOptions={{
        activeTintColor: '#4C5AC9',
        itemStyle: {marginVertical: 30},
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="My Profile"
        component={MyTabs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={signup}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="loginpage"
        component={loginpage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
// /
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home} //
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="visitwebsite"
        component={visitwebsite} //
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="revieworderdetails"
        //review order details
        component={revieworderdetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TravelInsurance"
        component={TravelInsurance}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="insurancepolicies"
        component={insurancepolicies} //
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OurProducts"
        component={OurProducts} //
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="orderdetailsinsurance"
        component={orderdetailsinsurance} //
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MakeaPayment"
        component={MakeaPayment} //
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="makepayment"
        component={orderdetailsinsurance} //
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="orderconfirmed"
        component={orderconfirmed} //
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="visitwebsite"
        component={visitwebsite} //
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="revieworderdetails"
        component={revieworderdetails} //
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="HomeScreen"
        component={Home} //
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="insurancepolicies"
        component={insurancepolicies} //
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="OurProducts"
        component={OurProducts} //
        options={{headerShown: false}}
      />

      {/* <Stack.Screen
        name="hireProfile"
        component={hireProfile} //
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="orderdetailsinsurance"
        component={orderdetailsinsurance} //
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="orderconfirmed"
        component={orderconfirmed}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabNavigation {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              type="AntDesign"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Find Plans"
        options={{
          headerShown: false,
          tabBarLabel: 'Find Plans',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="phone"
              type="FontAwesome"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        component={insurancepolicies}
      />
      <Tab.Screen
        name="Pop"
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Image
              style={{width: 80, height: 80, marginTop: -40}}
              source={require('../assets/icons/45.png')}
            />
          ),
          tabBarLabel: '',
        }}
        component={insurancepolicies}
      />
      <Tab.Screen
        name="Contact"
        component={visitwebsite}
        options={{
          headerShown: false,
          tabBarLabel: 'Contact',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="timer"
              type="MaterialIcons"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="share"
              type="Entypo"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        name="Account"
        component={HomeStack}
      />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator initialRouteName="mydrawer">
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mydrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
