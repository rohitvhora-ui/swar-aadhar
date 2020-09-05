import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import Recorder from '../../components/Recorder';

const DescribePictureTherapy = ({navigation}) => {

    const onCheckReports = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>
                    Describe the picture in 5 sentences...
                </Text>
            </View>
            <View style={styles.imageContainer}>
                <Image  style= {{flex:1 , width: undefined, height: undefined}} source={require('././../../assets/kids.jpg')} />
            </View>
            <Recorder onCheckReports={onCheckReports}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    header: {
        marginVertical: 20,
        paddingHorizontal: 30
    },
    label: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    },
    imageContainer: {
        width: Math.round(Dimensions.get('window').width), 
        height: Math.round(Dimensions.get('window').height) - 410,
    }
})

export default DescribePictureTherapy;