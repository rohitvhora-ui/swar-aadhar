import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Cards from './../../components/Cards';
import sa from '../../properties';
import Card from '../../components/Card';

const onCardClick = (navigation, routeName) => {
    navigation.navigate(routeName);
}

const Therapy = ({navigation}) => {
    const isDoctor = sa.view === 'doctor';
    const cards = [
        { 
            label: 'Describe Picture', 
            status: 'In Progress', 
            icon: 'picture-in-picture-bottom-right', 
            routeName: 'DescribePictureTherapy',
            description: 'Describe an image in around 5 sentences'
        },
        { 
            label: 'Reading Practice', 
            status: 'In Progress', 
            icon: 'book-open', 
            routeName: 'ReadingPracticeTherapy',
            description: 'Read a story' 
        },
        { 
            label: 'Conversation', 
            status: 'In Progress', 
            icon: 'comment-question', 
            routeName: 'QuestionnaireTherapy',
            description: 'Go through some conversations' 
        }
    ];
    const label = isDoctor ? 'Below is the list of exercises' : 'Choose an exercise from the below list';
    
    return (
        <View style={styles.dashboard}>
            <View style={styles.header}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <Cards cards={cards} onCardClick={(routeName) => onCardClick(navigation, routeName)}/>
            {isDoctor ? (
                <Card>
                    <View style={styles.createView}>
                        <Text style={styles.icon}>
                            <FontAwesome name="plus" color="cadetblue" size={40}/>
                        </Text>
                        <Text style={styles.createText}>Create New Exercise</Text>
                    </View>
                </Card>
            ) : null}
            
        </View>
    );
}

const styles = StyleSheet.create({
    dashboard: {
        paddingVertical: 5
    },
    header: {
        marginVertical: 20,
        paddingHorizontal: 30
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    },
    icon: {
        position: 'absolute',
        left: -50,
        top: 5,
        textAlignVertical: 'center'
    },
    createText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#555',
        top: 15
    }
})

export default Therapy;