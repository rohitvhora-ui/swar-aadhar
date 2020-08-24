import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from "react-native-vector-icons/Ionicons";
import MdIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/DoctorScreens/HomeScreen';
import Dashboard from '../screens/PatientScreens/DashboardScreen';
import Therapy from '../screens/PatientScreens/TherapyScreen';
import Profile from '../screens/PatientScreens/ProfileScreen';
import Bluetooth from '../screens/PatientScreens/BluetoothScreen';

/** Doctor Stack Screens */
const DoctorHomeStack = createStackNavigator();
const ReportStack = createStackNavigator();

/** Patient Stack Screens */
const HomeStack = createStackNavigator();
const TherapyStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const BluetoothStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const ClientBottomNavigation = () => (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff" >
        <Tab.Screen name="Home" component={HomeStackScreen}
          options={{ tabBarLabel: 'Home', tabBarColor: '#009387', tabBarIcon: ({ color }) => (<Icon name="ios-home" size={25} color={color} />) }}
        />
        <Tab.Screen name="Therapy" component={TherapyStackScreen}
          options={{ tabBarLabel: 'Therapy', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <MdIcon name="medical-bag" size={25} color={color} />) }}
        />
        <Tab.Screen name="Bluetooth" component={BluetoothStackScreen}
          options={{ tabBarLabel: 'Bluetooth', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <MdIcon name="bluetooth-connect" size={25} color={color} />) }}
        />
        
        <Tab.Screen name="Profile" component={ProfileStackScreen}
          options={{ tabBarLabel: 'Profile', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <FontAwesome name="user" size={25} color={color} /> ) }}
        />
    </Tab.Navigator>
)

const DoctorBottomNavigation = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff" >
      <Tab.Screen name="Home" component={DoctorHomeStackScreen}
          options={{ tabBarLabel: 'Home', tabBarColor: '#009387', tabBarIcon: ({ color }) => (<Icon name="ios-home" size={25} color={color} />) }}
        />
      <Tab.Screen name="Therapy" component={TherapyStackScreen}
        options={{ tabBarLabel: 'Therapy', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <MdIcon name="medical-bag" size={25} color={color} />) }}
      />
      <Tab.Screen name="Reports" component={ProfileStackScreen}
          options={{ tabBarLabel: 'Reports', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <Feather name="file-plus" size={25} color={color} /> ) }}
      />
      <Tab.Screen name="Profile" component={ProfileStackScreen}
          options={{ tabBarLabel: 'Profile', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <FontAwesome name="user" size={25} color={color} /> ) }}
      />
  </Tab.Navigator>
)

const BottomNavigation = DoctorBottomNavigation;

export default BottomNavigation;

const header = (navigation) => <Icon.Button name="ios-menu" size={25} backgroundColor='cadetblue'  onPress={() => navigation.openDrawer()}></Icon.Button> 

const HomeStackScreen = ({ navigation }) => (
    <HomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
        <HomeStack.Screen name="Dashboard" component={Dashboard} options={{ title: 'Swar Aadhar', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }} />
    </HomeStack.Navigator>
)

const BluetoothStackScreen = ({ navigation }) => (
  <BluetoothStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <BluetoothStack.Screen name="Bluetooth" component={Bluetooth} options={{ title: 'Bluetooth', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </BluetoothStack.Navigator>
)

const TherapyStackScreen = ({ navigation }) => (
  <TherapyStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <TherapyStack.Screen name="Therapy" component={Therapy} options={{ title: 'Recommended Therapies', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </TherapyStack.Navigator>
)

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <ProfileStack.Screen name="Profile" component={Profile} options={{ title: 'Profile', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </ProfileStack.Navigator>
)

const DoctorHomeStackScreen = ({ navigation }) => (
  <DoctorHomeStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <DoctorHomeStack.Screen name="Dashboard" component={HomeScreen} options={{ title: 'Swar Aadhar', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }} />
  </DoctorHomeStack.Navigator>
)

const ReportStackScreen = ({ navigation }) => (
  <ReportStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <ReportStack.Screen name="Dashboard" component={HomeScreen} options={{ title: 'Swar Aadhar', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }} />
  </ReportStack.Navigator>
)