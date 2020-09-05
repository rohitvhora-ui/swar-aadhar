import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableHighlight, Image, SafeAreaView, FlatList, TouchableOpacity, Button } from 'react-native';
import { Tab, TabView } from 'react-native-easy-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CheckBox } from 'react-native-elements';
import RNSpeedometer from 'react-native-speedometer';
import axios from './../api/axios';
import { ScrollView } from 'react-native-gesture-handler';

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
    ]);
    const [currentTab, setCurrentTab] = React.useState(0);
    const [stats, setStats] = useState([]);

    const getParamName = (name) => {
        return name.split('_').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    }

    const getStatistics = (response) => {
        console.log(response);
        const direct_stats      =   Object.keys(response.data).filter(key => typeof response.data[key] !== 'object');
        let statistics          =   [
            {   param       :   'Statistics' },
            ...direct_stats.map(key => ({param: key, observation: response.data[key]}))
        ];
        statistics.forEach(stat =>  stat.param = getParamName(stat.param));
        const indirect_stats    =   Object.keys(response.data).filter(key => typeof response.data[key] === 'object');
        indirect_stats.forEach(stat => {
            const child_stats   =   [
                {   param       :    getParamName(stat) },
                ...Object.keys(response.data[stat]).map(key => ({param: key, observation: response.data[stat][key]}))
            ];
            child_stats.forEach(c_stat => c_stat.param = getParamName(c_stat.param));
            statistics          =   [ ...statistics, ...child_stats];
        });
        statistics.forEach((stat, index) => ({ ...stat, id: (index + 1).toString()}));
        return statistics;
    }

    const getReport = async () => {
        try {
            const response      =   await axios.get('/getreports?reportid=1');
            const statistics    =   getStatistics(response);
            setStats(statistics);
        } catch {
            console.log('error');
        }
    }

    useEffect(() => {
        getReport();
    }, []);

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
                    <Image style={styles.logo} source={patient.image}></Image>
                    <View style={{paddingHorizontal: 35}}>
                        <Text style={styles.title}>{patient.name}</Text>
                        <Text style={styles.text}>Age &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;{patient.age} years old</Text>
                        <Text style={styles.text}>Last Visit&nbsp;&nbsp;: &nbsp; Aug 01, 2020</Text>
                        <Text style={styles.text}>Diagnosis&nbsp;: &nbsp; {patient.description }</Text>
                    </View>
                </View>
                <View style={styles.horizontalLine}></View>
                
                    <View style={styles.tabButtonsView}>
                        <TouchableOpacity onPress={() => setCurrentTab(0)}>
                            <Text style={styles.tabButtons}>Severity Index</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setCurrentTab(1)}>
                            <Text style={styles.tabButtons}>Statistics</Text>
                        </TouchableOpacity>
                    </View>
                    
                    <View style={styles.tabView}>
                        <TabView selectedTabIndex={currentTab} >
                            <Tab>
                                <SafeAreaView>
                                    <RNSpeedometer value={50} size={200} minValue={0} maxValue={100} allowedDecimals={0} labels={labels} />
                                </SafeAreaView>
                            </Tab>
                            <Tab lazy>
                                <View style={styles.statsSection}>
                                    <View style={{ flexDirection: 'column' }}>
                                    <SafeAreaView>
                                        <FlatList data={stats} renderItem={({item}) => (
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{...styles.statDetail, flex: 2}}>
                                                    <Text style={item.observation ? null : {textDecorationLine: 'underline', fontWeight: '500', marginTop: 15}}>{item.param}</Text>
                                                </View>
                                                {item.observation ? (<View style={{flex: 1}}>
                                                    <Text style={styles.statDetail}>{item.observation.toString().substring(0,5) }</Text>
                                                </View>) : null}
                                            </View>
                                        )} keyExtractor={item => item.key} />
                                    </SafeAreaView>
                                    </View>
                                </View>
                            </Tab>
                        </TabView>                    
                    </View>
                    
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
                            <TouchableOpacity style={[styles.apply, {color: '#009387', borderWidth: 1, marginTop: 5, marginBottom: 50, borderColor: '#009387'}]} onPress={() => props.closeModal()}>
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
    tabButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabButtons: {
        justifyContent: 'center',
        fontSize: 16,
        fontWeight: '400',
        color: '#333',
        marginRight: 10
    },
    tabView: {
        marginTop: 30,
        justifyContent: 'center',
        marginLeft: -30,
        height: 180
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
    statsSection: {
        color: '#444', 
        fontWeight: '500', 
        fontSize: 16, 
        marginTop: -10,
        paddingHorizontal: 30
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
    },
    statDetail: {
        marginLeft: 10,
        fontSize: 16,
        marginVertical: 3,
        fontWeight: '400',
        color: '#555'
    }
})

export default PatientModal;