import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions, Modal, TouchableHighlight, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const Bluetooth = ({navigation}) => {

    const [micStateOn, setMicStateOn] = useState(false);
    const [isRecorded, setIsRecorded] = useState(false);
    const [isAnalysing, setIsAnalysing] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const size = 250;
    const closeIconSize = 30;
    const renderRecorderScreen = () => {
        return (
            <View>
                { !micStateOn ? (
                    <View style={styles.main}>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <Icon name="microphone-off" size={size} color="cadetblue" onPress={() => setMicStateOn(!micStateOn)}/>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.label}>Turn on the microphone to start recording</Text>
                        </View>
                    </View>
                ) : (
                    <View style={styles.main}>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity>
                                <Animatable.View style={styles.footer} animation="bounceIn" duration={5000}>
                                    <Icon name="microphone" size={size} color="#009387" onPress={onRecordingComplete}/>                         
                                </Animatable.View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.label}>Recording...</Text>
                        </View>
                    </View>
                ) }
            </View>
        )
    }

    const renderRecordedScreen = () => {
        setTimeout(() => {
            setIsAnalysing(false);
            setModalVisible(true);
        }, 2000);
        return (isAnalysing ? 
                <View style={styles.loading}>
                    <ActivityIndicator size="large"></ActivityIndicator>
                    <Text style={{marginTop: 20}}>Analysing speech...</Text>
                </View>
             : 
             <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); }} >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableHighlight onPress={() => { setModalVisible(!modalVisible) }} >
                            <Icon style={styles.closeButton} name="close" size={closeIconSize} color="black" onPress={onModalClose} />
                        </TouchableHighlight>
                        <View style={styles.horizontalLine}></View>
                        <Text style={styles.modalTitle}>Great Job!</Text>
                        <View style={styles.centerHorizontal}>
                            <Animatable.View animation="bounceIn" duration={4000}>
                                <Icon name="check-circle-outline" size={85} color="#009387" onPress={() => setIsRecorded(true)}/>
                            </Animatable.View>
                            <View style={styles.horizontalLine}></View>
                            <Text style={styles.modalText}> Your are almost there! </Text>
                            <Text style={styles.modalText}> Your audio has been recorded and analysed. </Text>
                            <Text style={styles.modalText}> Please wait for Dr. Jenesis to recommend some really simple exercises for you. </Text>
                            <Text style={styles.modalText}> Meanwhile, you could check out</Text>
                            <Button title="Analysis Report" onPress={checkAudioRecordings}></Button>
                        </View>
                    </View>
                </View>
            </Modal>
            
        )
    }

    const onModalClose = () => {
        setModalVisible(false);
        setIsRecorded(false);
        setMicStateOn(false);
    }

    const onRecordingComplete = () => {
        setIsRecorded(true);
        setIsAnalysing(true);
    }
    
    const checkAudioRecordings = () => {
        onModalClose();
        navigation.navigate('StutteringReport');
    }

    return (
        <View>
            {!isRecorded ? renderRecorderScreen() : renderRecordedScreen()}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        marginTop: 80,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#d2d2d2',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 16,
        color: '#555',
        fontWeight: '500',
        marginVertical: 60
    },
    loading: {
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        top: (Math.round(Dimensions.get('window').height) * 0.3),
        left: (Math.round(Dimensions.get('window').width) * 0.35),
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    centerHorizontal: {
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowRadius: 3.84,
        elevation: 5,
        top: 50,
        height: Math.round(Dimensions.get('window').height) - 50,
        width: Math.round(Dimensions.get('window').width)
    },
    modalTitle: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 30,
        fontWeight: '600'
    },
    modalText: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 16,
        color: '#555',
        fontWeight: '500',
        lineHeight: 22
    },
    horizontalLine: {
        borderTopWidth: 1,
        borderTopColor: '#555',
        width: Math.round(Dimensions.get('window').width) - 50,
        marginVertical: 50
    },
})

export default Bluetooth;