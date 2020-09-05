import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Fontistoicon from "react-native-vector-icons/Fontisto";

const Reports = () => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.values}>Akash Verma</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.name}>Date of Birth</Text>
                <Text style={styles.values}>31/11/2014</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.name}>Age</Text>
                <Text style={styles.values}>5 years 9 months</Text>
            </View>
            <ScrollView style={{marginTop: 20}}>
                <Text style={styles.title}>Background</Text>
                {introductionDetails.map((para, index) => (
                    <Text key={index} style={styles.name}>{para}</Text>
                ))}
                <Text style={styles.title}>Statistics</Text>
                {reports.map((para, index) => (
                    <Text key={index} style={styles.name}>
                        <Fontistoicon name="checkbox-active" size={15} style={{marginRight: 20}}/>
                        <Text style={styles.parareport}>{para}</Text>
                    </Text>
                ))}
            </ScrollView>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 18
    },
    name: {
        fontSize: 16,
        color: 'black',
        marginVertical: 5
    },
    values: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
        position: 'absolute',
        left: 150,
        marginVertical: 5
    },
    parareport: {
        left: 40,
        position: 'absolute'
    }
})
export default Reports;

const p1 = `Jon is a 6-year-old boy who started stuttering roughly 2.5 years ago at 3 years, 9 months old. His stuttering had a sudden onset of mainly repetitions after his family movedinto a new house. He’s now in the first grade and his parents report his stuttering had gradually gotten worse,that he gets very frustrated with himself,and that they just want him to be happier. They report Jon is a hard worker but can beperfectionisticand self-deprecating at times.`;
const p2 = `Jon exhibits six of the nine Risk Factors For Persistent Stuttering: a family history of stuttering (grandfather persistent and uncle recovered), male sex, late stuttering onset after 3 and ½ years old, stuttering not decreasing after 12 months, time since onset greater than one year, and the presence of prolongations and/or blocks.`;
const p3 = `Jon exhibits WFL articulation abilities (age-appropriate errors), WNL language skills, and WNL voice functioning on informal screens.`;
const p4 = `His preferred activities include: football, fishing, and playing on the Wii.`;
const introductionDetails = [p1, p2, p3, p4];

const r1 = `Stuttering-LikeDisfluencies (M-my, hhhhhey, s_tar; Norm is <2% of syllables or <3% of words):9% of syllables`;
const r2 = `Nonstuttering-Like Disfluencies (um’s, like’s, er’s, I mean’s, etc.):3.7% of syllables`;
const r3 = `Total Disfluencies (Stuttering-Likedisfluencies + um's, like's, er's, etc.; Norm is <8% of words): 12.7% of syllables`;
const r4 = `Stuttering-LikeDisfluencies to Total Disfluencies Ratio (Norm is <66%): 70.9%`;
const r5 = `Speech Rate:120.7 SPM`;
const reports = [r1, r2, r3, r4, r5];