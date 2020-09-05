import React from 'react';
import {  View, Text, TouchableOpacity, TextInput, Platform, StyleSheet, StatusBar, Alert } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';

const Profile = props => {

    const { colors } = useTheme();

    return (
        <View style={styles.profile}>
            <View style={styles.container}>
                <View style={[styles.footer]}>
                    <View>
                        <Text style={[styles.text_footer, {color: colors.text}]}>Full Name</Text>
                        <View style={styles.action}>
                            <FontAwesome name="user-o" color={colors.text} size={20} />
                            <TextInput  placeholder="Dr. Jenesis Dacosta" placeholderTextColor="#666666" autoCapitalize="none"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text_footer, {color: colors.text}]}>Birthday</Text>
                        <View style={styles.action}>
                            <FontAwesome name="calendar" color={colors.text} size={20} />
                            <TextInput  placeholder="31/11/1986" placeholderTextColor="#666666" autoCapitalize="none"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text_footer, {color: colors.text}]}>Gender</Text>
                        <View style={styles.action}>
                            <FontAwesome name="male" color={colors.text} size={20} />
                            <TextInput  placeholder="Female" placeholderTextColor="#666666" autoCapitalize="none"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text_footer, {color: colors.text}]}>Language</Text>
                        <View style={styles.action}>
                            <FontAwesome name="commenting" color={colors.text} size={20} />
                            <TextInput  placeholder="English" placeholderTextColor="#666666" autoCapitalize="none"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text_footer, {color: colors.text}]}>e-mail</Text>
                        <View style={styles.action}>
                            <FontAwesome name="envelope-o" color={colors.text} size={20} />
                            <TextInput  placeholder="drjenesis@outlook.com" placeholderTextColor="#666666" autoCapitalize="none"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={[styles.text_footer, {color: colors.text}]}>Bluetooth Device ID</Text>
                        <View style={styles.action}>
                            <FontAwesome name="bluetooth" color={colors.text} size={20} />
                            <TextInput  placeholder="A55G79OZ" placeholderTextColor="#666666" autoCapitalize="none"
                                style={[styles.textInput, {
                                    color: colors.text
                                }]}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    profile: {
        paddingHorizontal: 30,
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileLabel: {
        fontSize: 16,
        color: '#555',
        fontWeight: '400'
    },
    container: {
        marginVertical: 15,
        height: '90%',
        width: '98%',
        paddingHorizontal: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    footer: {
        flex: 3,
        justifyContent: 'space-between'
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    }
})

export default Profile;