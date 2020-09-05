import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { AuthContext } from '../components/context';


const WelcomeScreen = () => {

    const { signIn } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image style={styles.logo} animation="bounceInDown" duration={1500} source={require('./../assets/Raegan.jpeg')}/>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig" duration={1000}>
                <Text style={styles.title}>Welcome</Text>
                <Text style={styles.title}>Reagan D'Mello</Text>
                <View>
                    <TouchableOpacity style={[styles.signIn, {color: '#009387', alignSelf: 'flex-end', borderWidth: 1, marginTop: 15, borderColor: '#009387'}]} onPress={() => signIn()}>
                        <Text style={[styles.textSign, {color: '#009387'}]}>Get Started</Text>
                        <MaterialIcon name="navigate-next" color="#009387" size={20}/>
                    </TouchableOpacity>
                </View>
            </Animatable.View>       
        </View>
    );
};

export default WelcomeScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 300,
      marginTop: 30,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },
  mainTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  title: {
      color: '#05375a',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20
  },
  startButton: {
      width: 120,
      height: 40,
      marginTop: 10,
      alignSelf: 'flex-end',
      justifyContent: 'center',
      fontSize: 18
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});