import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards from './../../components/Cards';

const onCardClick = (navigation, routeName) => {
    navigation.navigate(routeName);
}

const Therapy = ({navigation}) => {
    const cards = [
        { 
            label: 'Describe Picture', 
            status: 'In Progress', 
            icon: 'picture-in-picture-bottom-right', 
            routeName: 'DescribePictureTherapy',
            description: 'Describe an image in around 5 sentences'
        },
        { 
            label: 'Mouth Exercise', 
            status: 'In Progress', 
            icon: 'face-agent', 
            routeName: 'MouthExerciseTherapy',
            description: 'Step by step an exercise for mouth' 
        },
        { 
            label: 'Reading Practice', 
            status: 'In Progress', 
            icon: 'book-open', 
            routeName: 'ReadingPracticeTherapy',
            description: 'Read a story' 
        },
        { 
            label: 'Questionnaire', 
            status: 'In Progress', 
            icon: 'comment-question', 
            routeName: 'QuestionnaireTherapy',
            description: 'Answer a few questions' 
        }
    ];
    return (
        <View style={styles.dashboard}>
            <View style={styles.header}>
                <Text style={styles.label}>Choose a therapy from the below list</Text>
            </View>
            <Cards cards={cards} onCardClick={(routeName) => onCardClick(navigation, routeName)}/>
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
    }    
})

export default Therapy;