import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, Image } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


const Progress = () => {

    const steps = [
        {
            date: "21st Aug",
            content: [
                { name: 'Category', value: 'Reading Practice' },
                { name: 'Topic', value: 'Rainbow'},
                { name: 'Duration', value: '01:05'},
                { name: 'Review', value: 'Yes'},
                { name: 'Therapist', value: 'Dr. Jenesis DaCosta'}
            ],
            report: [
                { name: 'Date', value: 'Aug 21'},
                { name: 'Repetition Severity', value: 'High'},
                { name: 'Repetition Time', value: '2.63' },
                { name: 'Prolongation Frequency', value: '6.11' },
                { name: 'Prolongation Frequency', value: '6.11' },
                { name: 'Prolongation Time', value: '0.87' }
            ]
        }, {
            date: "23rd Aug",
            content: [
                { name: 'Category', value: 'Describe Picture' },
                { name: 'Topic', value: 'Garden'},
                { name: 'Duration', value: '01:10'},
                { name: 'Review', value: 'Yes'},
                { name: 'Therapist', value: 'Dr. Jenesis DaCosta'}
            ],
            report: [
                { name: 'Date', value: 'Aug 23'},
                { name: 'Repetition Severity', value: 'Medium'},
                { name: 'Repetition Time', value: '2.63' },
                { name: 'Repetition Frequency', value: '6.11' },
                { name: 'Prolongation Frequency', value: '6.11' },
                { name: 'Prolongation Time', value: '0.87' },
            ]
        }, {
            date: "26th Aug",
            content: [
                { name: 'Category', value: 'Conversation' },
                { name: 'Topic', value: 'Greet and Meet'},
                { name: 'Duration', value: '01:25'},
                { name: 'Review', value: 'Yes'},
                { name: 'Therapist', value: 'Dr. Jenesis DaCosta'}
            ],
            report: [
                { name: 'Date', value: 'Aug 26'},
                { name: 'Repetition Severity', value: 'Medium'},
                { name: 'Repetition Time', value: '2.63' },
                { name: 'Repetition Frequency', value: '6.11' },
                { name: 'Prolongation Frequency', value: '6.11' },
                { name: 'Prolongation Time', value: '0.87' },
            ]
        }, {
            date: "30th Aug",
            content: [
                { name: 'Category', value: 'Questionnaire' },
                { name: 'Topic', value: 'Family'},
                { name: 'Duration', value: '01:05'},
                { name: 'Review', value: 'Yes'},
                { name: 'Therapist', value: 'Dr. Jenesis DaCosta'}
            ],
            report: [
                { name: 'Date', value: 'Aug 30'},
                { name: 'Repetition Severity', value: 'Medium'},
                { name: 'Repetition Time', value: '2.63' },
                { name: 'Repetition Frequency', value: '6.11' },
                { name: 'Prolongation Frequency', value: '6.11' },
                { name: 'Prolongation Time', value: '0.87' },
            ]
        }, {
            date: "2nd Sep",
            content: [
                { name: 'Category', value: 'Describe Picture' },
                { name: 'Topic', value: 'School'},
                { name: 'Duration', value: '01:25'},
                { name: 'Review', value: 'Yes'},
                { name: 'Therapist', value: 'Dr. Jenesis DaCosta'}
            ],
            report: [
                { name: 'Date', value: 'Sep 2'},
                { name: 'Repetition Severity', value: 'Low'},
                { name: 'Repetition Time', value: '2.63' },
                { name: 'Repetition Frequency', value: '6.11' },
                { name: 'Prolongation Frequency', value: '6.11' },
                { name: 'Prolongation Time', value: '0.87' },
            ]
        }
    ]

    return (
        <SafeAreaView style={{flex: 1}}>
            <ProgressSteps completedProgressBarColor="#009387" completedStepIconColor="#009387" activeStepIconBorderColor="#009387" activeLabelColor="#009387">
                { steps.map((step, index) => (
                    <ProgressStep key={step.date} label={step.date} nextBtnStyle={styles.button} 
                            nextBtnTextStyle={styles.buttonText} previousBtnStyle={index > 0 ? styles.button : null}
                            previousBtnTextStyle={styles.buttonText}
                            previousBtnText="Back" finishBtnText="Done">
                        <View style={{ alignItems: 'center' }}>
                            <View>
                                <View>
                                    <View style={styles.horizontalLine}></View>
                                    <Text style={styles.label}>Exercise</Text>
                                    <View style={styles.horizontalLine}></View>
                                    { step.content.map(content => (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 1}}>
                                                <Text style={styles.textContentLabel}>{ content.name }</Text>                                                
                                            </View>
                                            <View style={{flex: 1}}>
                                                <Text style={styles.textContent}>:   { content.value }</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                                <View>
                                    <View style={styles.horizontalLine}></View>
                                    <Text style={styles.label}>Report</Text>
                                    <View style={styles.horizontalLine}></View>
                                    { step.report.map(content => (
                                        <View style={{flexDirection: 'row'}}>
                                            <View style={{flex: 1}}>
                                                <Text style={styles.textContentLabel}>{ content.name }</Text>                                                
                                            </View>
                                            <View style={{flex: 1}}>
                                                <Text style={styles.textContent}>:   { content.value }</Text>
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </View>
                    </ProgressStep>
                )) }
            </ProgressSteps>                
        </SafeAreaView>
    )
}
const { height, width } = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        alignSelf: 'center',
        color: '#333',
        fontWeight: '500',
        fontSize: 18
    },
    button: {
        backgroundColor: '#009387',
        padding: 14,
        borderRadius: 6,
        marginTop: 20,
        display: 'flex'
    },
    buttonText: {
        color: 'white'
    },
    contentView: {
        flex: 1,
        height: height * 0.28,
        paddingHorizontal: 10
    },
    imageContainer: {
        height: 100,
        width: width * 0.8
    },
    horizontalLine: {
        borderTopWidth: 1,
        borderTopColor: '#888',
        width: Math.round(Dimensions.get('window').width) - 50,
        marginVertical: 8
    },
    textContentLabel: {
        marginVertical: 8,
        fontSize: 16,
        fontWeight: '400'
    },
    textContent: {
        marginVertical: 8,
        fontSize: 16,
        fontWeight: '300'
    }
})

export default Progress;