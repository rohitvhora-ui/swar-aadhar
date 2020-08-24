import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome";
import Ionicon from "react-native-vector-icons/Ionicons";
import Fontistoicon from "react-native-vector-icons/Fontisto";

import DescribePictureTherapy from '../screens/PatientScreens/DescribePictureTherapy';
import MouthExerciseTherapy from '../screens/PatientScreens/MouthExerciseTherapy';
import ReadingPracticeTherapy from '../screens/PatientScreens/ReadingPracticeTherapy';
import QuestionnaireTherapy from '../screens/PatientScreens/QuestionnaireTherapy';

const DescribePictureTherapyStack = createStackNavigator();
const MouthExerciseTherapyStack = createStackNavigator();
const ReadingPracticeTherapyStack = createStackNavigator();
const QuestionnaireTherapyStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TherapyNavigation = () => (
    <Tab.Navigator
      initialRouteName="DescribePictureTherapy"
      activeColor="#fff"
    >
      <Tab.Screen
        name="DescribePictureTherapy"
        component={DescribePictureTherapyStackScreen}
        options={{
          tabBarLabel: 'Picture',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Ionicon name="ios-image" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MouthExerciseTherapy"
        component={MouthExerciseTherapyStackScreen}
        options={{
          tabBarLabel: 'Exercise',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Fontistoicon name="open-mouth" size={25} color={color}/>
          ),
        }}
      />
      <Tab.Screen
        name="ReadingPracticeTherapy"
        component={ReadingPracticeTherapyStackScreen}
        options={{
          tabBarLabel: 'Reading',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="book" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="QuestionnaireTherapy"
        component={QuestionnaireTherapyStackScreen}
        options={{
          tabBarLabel: 'Questionnaire',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Fontistoicon name="question" size={25} color={color}/>
          ),
        }}
      />
    </Tab.Navigator>
)

export default TherapyNavigation;

const header = (navigation) => (
    <Ionicon.Button name="ios-menu" size={25} backgroundColor='cadetblue' 
      onPress={() => navigation.openDrawer()}>
    </Ionicon.Button>
) 

const DescribePictureTherapyStackScreen = ({ navigation }) => (
    <DescribePictureTherapyStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
        <DescribePictureTherapyStack.Screen name="DescribePictureTherapy" component={DescribePictureTherapy} options={{ title: 'Describe Picture', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
    </DescribePictureTherapyStack.Navigator>
)

const MouthExerciseTherapyStackScreen = ({ navigation }) => (
  <MouthExerciseTherapyStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <MouthExerciseTherapyStack.Screen name="MouthExerciseTherapy" component={MouthExerciseTherapy} options={{ title: 'Mouth Exercise', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </MouthExerciseTherapyStack.Navigator>
)

const ReadingPracticeTherapyStackScreen = ({ navigation }) => (
  <ReadingPracticeTherapyStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <ReadingPracticeTherapyStack.Screen name="ReadingPracticeTherapy" component={ReadingPracticeTherapy} options={{ title: 'Reading Practice', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </ReadingPracticeTherapyStack.Navigator>
)

const QuestionnaireTherapyStackScreen = ({ navigation }) => (
  <QuestionnaireTherapyStack.Navigator screenOptions={{ headerStyle: { backgroundColor: 'cadetblue' }, headerTintColor: '#fff'}}>
      <QuestionnaireTherapyStack.Screen name="QuestionnaireTherapy" component={QuestionnaireTherapy} options={{ title: 'Questionnaire', headerLeft: () => header(navigation), cardStyle:{backgroundColor: 'white'} }}/>
  </QuestionnaireTherapyStack.Navigator>
)