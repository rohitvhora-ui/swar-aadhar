import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";

import StutteringReport from '../screens/PatientScreens/StutteringReport';
import Family from '../screens/PatientScreens/Family';
import Reports from '../screens/PatientScreens/Reports';
import History from '../screens/PatientScreens/History';

const StutteringReportStack = createStackNavigator();
const FamilyStack = createStackNavigator();
const ReportsStack = createStackNavigator();
const HistoryStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const DashboardNavigation = () => (
    <Tab.Navigator initialRouteName="StutteringReport" activeColor="#fff" >
      <Tab.Screen name="StutteringReport" component={StutteringReportStackScreen}
        options={{ tabBarLabel: 'Reports', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <Icon name="dashboard" size={25} color={color} /> ) }}
      />
      <Tab.Screen name="Family" component={FamilyStackScreen}
        options={{ tabBarLabel: 'Family', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <Ionicon name="md-people" size={25} color={color} /> ) }}
      />
      <Tab.Screen name="Reports" component={ReportsStackScreen}
        options={{ tabBarLabel: 'Reports', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <Icon name="book" size={25} color={color} /> ) }}
      />
      <Tab.Screen name="History" component={HistoryStackScreen}
        options={{ tabBarLabel: 'History', tabBarColor: '#009387', tabBarIcon: ({ color }) => ( <Icon name="hourglass" size={25} color={color} /> ) }}
      />
    </Tab.Navigator>
)

export default DashboardNavigation;

const header = (navigation) => (
    <Ionicon.Button name="ios-menu" size={25} backgroundColor='cadetblue' 
      onPress={() => navigation.openDrawer()}>
    </Ionicon.Button>
) 

const StutteringReportStackScreen = ({ navigation }) => (
    <StutteringReportStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
        <StutteringReportStack.Screen name="StutteringReport" component={StutteringReport} options={{ title: 'Stuttering Assessment Reports', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
    </StutteringReportStack.Navigator>
)

const FamilyStackScreen = ({ navigation }) => (
  <FamilyStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <FamilyStack.Screen name="Family" component={Family} options={{ title: 'Family', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </FamilyStack.Navigator>
)

const ReportsStackScreen = ({ navigation }) => (
  <ReportsStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <ReportsStack.Screen name="Reports" component={Reports} options={{ title: 'Reports', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </ReportsStack.Navigator>
)

const HistoryStackScreen = ({ navigation }) => (
  <HistoryStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <HistoryStack.Screen name="History" component={History} options={{ title: 'History', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </HistoryStack.Navigator>
)