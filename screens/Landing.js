import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, Dimensions, SafeAreaView, Platform } from 'react-native'
import OutlineButton from '../components/OutlineButton'
import colors from '../assets/colors/colors'

const images = {
    "background": require('../assets/background-images/HomeUnsignedBackground.png'),
    "doctor": require('../assets/images/doctor.png')
};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const leftMargin = width * (47 / 414)

const Landing = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={images.background} style={styles.background}>
                <SafeAreaView style={styles.container} >
                    <Text style={[styles.logo, Platform.OS === "ios" ? styles.logo_ios : styles.logo_android]}>Cognicheck</Text>
                    <View style={styles.welcomeWrapper} >
                        <Text style={styles.welcomeHeader} >Welcome</Text>
                        <Text style={styles.welcomeSubtext}>Let's get you started</Text>
                        <OutlineButton
                            buttonText="Log In"
                            handlePress={() => navigation.navigate('Login')}
                        />
                        <OutlineButton
                            buttonText="Sign Up"
                            handlePress={() => navigation.navigate('Register')}
                        />
                    </View>
                </SafeAreaView>
            </ImageBackground>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        color: 'rgba(0, 0, 0, 0)',
    },
    background: {
        resizeMode: 'cover',
        width: width,
        height: height
    },
    logo: {
        fontFamily: 'Nunito-Semibold',
        fontSize: 20,
        marginLeft: leftMargin
    },
    logo_ios: {
        marginTop: 10,
    },
    logo_android: {
        marginTop: 50,
    },
    doctor: {
        width: width * (200 / 414),
        height: height * (383 / 896),
        resizeMode: 'contain',
        marginTop: 50,
        alignSelf: 'center',
        marginLeft: 50
    },
    welcomeWrapper: {
        position: 'absolute',
        bottom: 100,
        height: height * (232 / 896),
        width: width * (320 / 414),
        alignSelf: 'center'
    },
    welcomeHeader: {
        fontFamily: 'Roboto-Medium',
        color: colors.black,
        fontSize: 40,
    },
    welcomeSubtext: {
        fontFamily: 'Roboto-Light',
        color: colors.black,
        fontSize: 20,
        marginTop: 15
    },
    loginButton: {
        marginTop: 20,
    },
    registerButton: {
        marginTop: 20,
    }
})