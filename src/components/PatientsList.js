import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Dimensions, Image, Modal } from 'react-native';
import Card from './../components/Card';
import PatientModal from './PatientModal';

let patient;
const PatientsList = props => {
    const cards = props.patients;
    const [modalVisible, setModalVisible] = React.useState(false);

    const modal = () => (
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => { Alert.alert("Modal has been closed."); }} >
            <PatientModal patient={patient} closeModal={() => setModalVisible(false)}/>
        </Modal>
    );

    const handlePatientSelection = (id) => {
        patient = props.patients.find(p => p.id === id);
        setModalVisible(true);
    }

    const renderItem = ({ item }) => {
        const card = item;
        return (
            <Card key={card.id} onCardClick={(id) => handlePatientSelection(card.id)}>
                <View style={ styles.cardContent }>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{justifyContent: 'flex-start'}}>
                            <Image style={styles.logo} source={{uri: card.image}}></Image>
                        </View>
                        <View style={ styles.textContent }>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={ styles.label }>{card.name}</Text>
                                <Text style={ styles.age }>{card.age} years old</Text>
                            </View>
                            <Text style={ styles.description }>{card.description}</Text>
                        </View>
                    </View>
                </View>
            </Card>
        )
    }

    return (
        <View>
            <SafeAreaView style={styles.cardsLayout}>
                <FlatList data={cards} renderItem={renderItem} keyExtractor={item => item.id} />
            </SafeAreaView>
            { modalVisible ? modal() : null }
        </View>
    );
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.06;

const styles = StyleSheet.create({
    cardsLayout: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 120
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: height_logo,
        height: height_logo,
        position: 'absolute',
        borderRadius: 300,
        alignSelf: 'flex-start',
        left: 2,
        top: -8
    },
    textContent: { 
        flexDirection: 'column', 
        position: 'absolute',
        width: Math.round(Dimensions.get('window').width),
        marginTop: -5,
        left: 70
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 16,
        fontWeight: '500',
        alignItems: 'center',
        flex: 1,
        marginBottom: 10
    },
    age: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        fontSize: 14,
        fontWeight: '400',
        flex: 1,
        marginBottom: 10
    },
    description: {
        color: '#555',
        fontSize: 14
    }
})

export default PatientsList;