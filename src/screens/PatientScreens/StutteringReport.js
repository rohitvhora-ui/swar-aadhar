import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, TouchableHighlight, Alert, Modal, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNSpeedometer from 'react-native-speedometer';
import axios from './../../api/axios';

const StutteringReport = () => {
    const closeIconSize = 30;

    const data = [{
        id: '1',
        name: 'Report 1',
        size: '1.2 MB',
        date: 'July 31, 2020, 11:07AM',
        stammeringLevel: 80
    }, {
        id: '2',
        name: 'Report 2',
        size: '1.3 MB',
        date: 'Aug 1, 2020, 12:07PM',
        stammeringLevel: 60
    }, {
        id: '3',
        name: 'Report 3',
        size: '1.25 MB',
        date: 'Aug 2, 2020, 11:30AM',
        stammeringLevel: 50
    }, {
        id: '4',
        name: 'Report 4',
        size: '2.9 MB',
        date: 'Aug 3, 2020, 11:56AM',
        stammeringLevel: 40
    }, {
        id: '5',
        name: 'Report 5',
        size: '3.2 MB',
        date: 'Aug 5, 2020, 10:17AM',
        stammeringLevel: 30
    }, {
        id: '6',
        name: 'Report 6',
        size: '1.29 MB',
        date: 'Aug 6, 2020, 11:35AM',
        stammeringLevel: 10
    }, {
        id: '7',
        name: 'Report 7',
        size: '1.29 MB',
        date: 'Aug 6, 2020, 11:35AM',
        stammeringLevel: 10
    }];

    const labels = [
        { name: 'Low', activeBarColor: '#00ff6b' },
        { name: 'Medium', activeBarColor: '#f4ab44' },
        { name: 'High', activeBarColor: '#ff2900' },
    ];

    const initStats = [{
        param: 'Stuttering Like Disfluencies',
        observation: '9%'
    }, {
        param: 'Non-stuttering Like Disfluencies',
        observation: '3.7%'
    }, {
        param: 'Total Disfluencies',
        observation: '12%'
    }, {
        param: 'Speech Rate',
        observation: '120.7 SPM'
    }, {
        param: 'Most Common Disfluency',
        observation: 'Sound / syllable repetitions'
    }]

    const [stats, setStats] = useState(initStats);
    const [reports, setReports] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);

    const showReport = (report) => {
        setModalVisible(true);
        setSelectedReport(report);
        getReport(report);
    }

    const getReport = async () => {
        try {
            const response = await axios.get('/getreports');
            statistics = Object.keys(response.data).map(key => ({param: key, observation: response.data[key]}));
            statistics.forEach(stat => {
                stat.param = stat.param.split('_').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
            });
            setStats(statistics);
            setReports(response.data);
        } catch {
            setStats(initStats);
        }
    }

    const renderItem = ({ item }) => {
        const size = 40;
        return (
            <TouchableOpacity  onPress={() => { showReport(item) }}>
                <View style={styles.reportItem}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Icon name="file" size={size} color="cadetblue" />
                    </View>
                    <View style={styles.itemDetails}>
                        <Text style={styles.reportName}>{item.name}</Text>
                        <Text style={styles.details}>{item.size} | {item.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const showReportModal = () => (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); }} >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TouchableHighlight onPress={() => { setModalVisible(!modalVisible) }} >
                        <Icon style={styles.closeButton} name="close" size={closeIconSize} color="black" onPress={() => { setModalVisible(false) }} />
                    </TouchableHighlight>
                    <View>
                        <Text style={styles.modalTitle}> {selectedReport.name}</Text>
                    </View>
                    <View>
                        <View style={styles.horizontalLine}></View>
                        <Text style={styles.sectionHeaders}> Severity Index </Text>
                    </View>
                    <SafeAreaView>
                        <RNSpeedometer value={selectedReport.stammeringLevel} size={200} minValue={0} maxValue={100} allowedDecimals={0} labels={labels} />
                    </SafeAreaView>
                    <View style={styles.stats}>
                        <View style={styles.horizontalLine}></View>
                        <Text style={styles.sectionHeaders}> Stats </Text>
                        <View style={{ flexDirection: 'column' }}>
                            { stats.map((stat, index) => (
                                <View key={index} style={{ flexDirection: 'row' }}>
                                    <Text style={styles.statDetail}>{stat.param} : {stat.observation }</Text>
                                </View>
                            ))}
                        </View>
                        {/* <View style={styles.horizontalLine}></View>
                        <Text>Recommended Therapies</Text> */}
                    </View>
                </View>
            </View>
        </Modal>
    )

    
    
    return (
        <View style={styles.main}>
            <View style={styles.header}>
                <Text style={styles.selectionLabel}>Select a report to see the details</Text>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
            </SafeAreaView>
            {reports ? showReportModal() : null}
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        paddingHorizontal: 0,
        paddingVertical: 5
    },
    header: {
        marginVertical: 20,
        paddingHorizontal: 30
    },
    selectionLabel: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    },
    reportItem: {
        height: 60,
        borderWidth: 0.3,
        marginVertical: 0,
        paddingHorizontal: 20,
        width: '100%',
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
        alignContent: 'center',
        alignSelf: 'center',
        flexDirection: 'row'
    },
    itemDetails: {
        flexDirection: 'column',
        padding: 8,
        justifyContent: 'center'
    },
    reportName: {
        fontSize: 18,
        marginBottom: 6,
        fontWeight: '600'
    },
    details: {
        color: '#555'
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
        alignItems: "center",
        shadowColor: "#000",
        shadowRadius: 3.84,
        elevation: 5,
        top: 50,
        height: Math.round(Dimensions.get('window').height) - 50,
        width: Math.round(Dimensions.get('window').width)
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "black",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalTitle: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 26,
        fontWeight: '600'
    },
    sectionHeaders: {
        marginVertical: 15,
        textAlign: "center",
        fontSize: 19,
        fontWeight: '600'
    },
    closeButton: {
        color: 'black'
    },
    horizontalLine: {
        borderTopWidth: 1,
        borderTopColor: '#555',
        width: Math.round(Dimensions.get('window').width) - 50,
        marginVertical: 15
    },
    stats: {
        marginTop: 60
    },
    statDetail: {
        marginLeft: 10,
        fontSize: 16,
        marginVertical: 5,
        fontWeight: '400'
    }
})

export default StutteringReport;