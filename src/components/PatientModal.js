import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Image, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements';
import RNSpeedometer from 'react-native-speedometer';

const PatientModal = (props) => {
    const { patient } = props;
    const labels = [
        { name: 'Low', activeBarColor: '#00ff6b' },
        { name: 'Medium', activeBarColor: '#f4ab44' },
        { name: 'High', activeBarColor: '#ff2900' },
    ];
    const [therapies, setTherapies] = React.useState([
        { id: '1', name: 'Reading Practice', checked: false },
        { id: '2', name: 'Describe Picture', checked: false },
        { id: '3', name: 'Mouth Exercise', checked: false },
        { id: '4', name: 'Questionnaire', checked: false }
    ])
    const handleTherapySelection = (id) => {
        const element = therapies.find(therapy => therapy.id == id);
        element.checked = !element.checked;
        setTherapies([...therapies]);
    }
    return (
        <View>
            <View style={styles.modalView}>
                <TouchableHighlight onPress={() => props.closeModal()}>
                    <Icon style={styles.closeButton} name="close" size={25} color="black" />
                </TouchableHighlight>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.logo} source={{uri: patient.image}}></Image>
                    <View style={{paddingHorizontal: 35}}>
                        <Text style={styles.title}>{patient.name}</Text>
                        <Text style={styles.text}>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;{patient.age} years old</Text>
                        <Text style={styles.text}>Last Visit&nbsp;&nbsp;: &nbsp; Aug 01, 2020</Text>
                        <Text style={styles.text}>Diagnosis&nbsp;: &nbsp; {patient.description }</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine}></View>
                <Text style={styles.recomLabel}> Severity Index </Text>
                <SafeAreaView>
                    <RNSpeedometer value={50} size={200} minValue={0} maxValue={100} allowedDecimals={0} labels={labels} />
                </SafeAreaView>
                <View style={styles.stats}>
                    <View style={styles.horizontalLine}></View>
                    <Text style={styles.recomLabel}>Recommended Therapies</Text>
                    <SafeAreaView>
                        <FlatList data={therapies} renderItem={({item}) => (
                            <CheckBox title={item.name} checked={item.checked} 
                                containerStyle={{backgroundColor: '#fff', borderWidth: 0 }} 
                                textStyle={{fontWeight: '400', fontSize: 14}}
                                onPress={(id) => handleTherapySelection(item.id)}/>
                        )} keyExtractor={item => item.id} />
                    </SafeAreaView>
                    <View>
                        <TouchableOpacity style={[styles.apply, {color: '#009387', borderWidth: 1, marginTop: 35, borderColor: '#009387'}]} >
                            <Text style={[styles.textSign, {color: '#fff'}]}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.08;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButton: {
        alignSelf: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        shadowColor: "#000",
        shadowRadius: 3.84,
        elevation: 5,
        top: 50,
        height: Math.round(Dimensions.get('window').height),
        width: Math.round(Dimensions.get('window').width)
    },
    title: {
        marginVertical: 10,
        fontSize: 26,
        fontWeight: '600',
        color: '#05375a'
    },
    text: {
        marginBottom: 10
    },  
    logo: {
        width: height_logo,
        height: height_logo,
        borderRadius: 300,
        alignSelf: 'flex-start',
        marginTop: 15
    },
    horizontalLine: {
        borderTopWidth: 1,
        borderTopColor: '#555',
        width: Math.round(Dimensions.get('window').width) - 50,
        marginVertical: 15
    },
    recomLabel: {
        color: '#444', 
        fontWeight: '500', 
        fontSize: 16, 
        marginBottom: 10
    },
    stats: {
        marginTop: 60
    },
    apply: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#009387'
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default PatientModal;