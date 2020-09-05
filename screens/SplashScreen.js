import React from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Text style={styles.mainTitle}>Swar Aadhar</Text> */}
                <Image style={styles.logo} source={require('./../assets/logo-4.jpg')}/>
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Your own custom speech partner!</Text>
                <Text style={styles.text}>Please sign in here</Text>
                <View>
                    <TouchableOpacity style={[styles.signIn, {color: '#009387', alignSelf: 'flex-end', borderWidth: 1, marginTop: 15, borderColor: '#009387'}]} onPress={() => navigation.navigate("SignInScreen")}>
                        <Text style={[styles.textSign, {color: '#009387'}]}>Sign in</Text>
                        <MaterialIcon name="navigate-next" color="#009387" size={20}/>
                    </TouchableOpacity>
                </View>
            </View>       
        </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 2,
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
      marginTop: 30
  },
  mainTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  title: {
      color: '#05375a',
      fontSize: 30,
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