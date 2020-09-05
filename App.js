import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { AuthContext } from './components/context';
import { DrawerContent } from './navigation/DrawerContent';
import BottomNavigation from './navigation/MainNavigation';
import DashboardNavigation from './navigation/DashboardNavigation';
import TherapyNavigation from './navigation/TherapyNavigation';
import RootStackNavigator from './navigation/RootStackNavigator';
import { setView } from './properties';

const Drawer = createDrawerNavigator();

const App = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: (username) => {
      setView('doctor');
      setUserToken('abcd');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
  }));

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }

  const drawerNavigator = () => (
      <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>}>
        <Drawer.Screen name="Home" component={BottomNavigation} />
        <Drawer.Screen name="SeverityIndex" component={DashboardNavigation} />
        <Drawer.Screen name="DescribePictureTherapy" component={TherapyNavigation} />        
      </Drawer.Navigator>
  )

  return (

    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        { userToken !== null ? drawerNavigator() : <RootStackNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;