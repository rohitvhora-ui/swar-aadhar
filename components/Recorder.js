import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions, Modal, TouchableHighlight, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Animatable from 'react-native-animatable';

const Recorder = (props) => {

    const [micStateOn, setMicStateOn] = useState(false);
    const [isRecorded, setIsRecorded] = useState(false);
    const [isAnalysing, setIsAnalysing] = useState(true);
    const size = 50;

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
        }, 2000);
        return (
            <View style={styles.report}>
                {
                    isAnalysing ? 
                    <View style={styles.loading}>
                        <ActivityIndicator size="large"></ActivityIndicator>
                        <Text style={{marginTop: 20}}>Analysing speech...</Text>
                    </View>
                    : 
                    <View style={styles.centerHorizontal}>
                        <Animatable.View animation="bounceIn" duration={4000}>
                            <Icon name="check-circle-outline" size={65} color="#009387" onPress={() => setIsRecorded(true)}/>
                        </Animatable.View>
                        <View></View>
                            <Text style={styles.modalText}> Your audio has been recorded and analysed. </Text>
                            {/* <Button title="Check Report" onPress={checkAudioRecordings}></Button> */}
                    </View>
                }
            </View>
        )
    }

    const checkAudioRecordings = () => {
        props.onCheckReports();
    }

    const onRecordingComplete = () => {
        setIsRecorded(true);
        setIsAnalysing(true);
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
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 120,
        borderWidth: 1,
        borderColor: '#d2d2d2',
        width: 100,
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
        alignItems: 'center'
    },
    report: {
        marginTop: 50
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

export default Recorder;
