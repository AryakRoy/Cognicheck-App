import React, { useLayoutEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
} from 'react-native'
import { TextInput } from 'react-native-paper';
import colors from '../assets/materials/colors';
import dimensions from '../assets/materials/constants';
import theme from '../assets/materials/theme';
import GradientButton from '../components/GradientButton'
import DismissKeyboard from '../assets/materials/DismissKeyboard'

const images = {
    "background": require('../assets/background-images/Background.png'),
};
const [width, height] = dimensions

const Login = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerTransparent: true,
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: { paddingHorizontal: 10 }
        })
    }, [navigation])
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <ImageBackground source={images.background} style={styles.background}>
                    <SafeAreaView>
                        <KeyboardAvoidingView behavior="position" style={Platform.OS === "ios" ? styles.header_ios : styles.header_android}>
                            <View style={styles.header}>
                                <Text style={[styles.text, styles.heading]}>Signup</Text>
                                <Text style={[styles.text, styles.subheading]}>Hello! Let's get you started</Text>
                            </View>
                            <View>
                                <TextInput
                                    label="Name"
                                    theme={theme}
                                    mode="outlined"
                                    style={styles.input}
                                    placeholder="Enter Full Name"
                                    autoCorrect={false}
                                />
                                <TextInput
                                    label="Email"
                                    theme={theme}
                                    mode="outlined"
                                    style={styles.input}
                                    placeholder="Enter Email"
                                    keyboardType='email-address'
                                    autoCorrect={false}
                                />
                                <TextInput
                                    label="Password"
                                    theme={theme}
                                    mode="outlined"
                                    style={styles.input}
                                    secureTextEntry
                                    placeholder="Enter Password"
                                    autoCorrect={false}
                                />
                                <TextInput
                                    label="Confirm Password"
                                    theme={theme}
                                    mode="outlined"
                                    style={styles.input}
                                    secureTextEntry
                                    placeholder="Renter Password"
                                    autoCorrect={false}
                                />
                                <GradientButton
                                    buttonText="Sign Up"
                                    margin={30}
                                />
                            </View>
                        </KeyboardAvoidingView>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        </DismissKeyboard>

    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        color: 'rgba(0, 0, 0, 0)',
    },
    background: {
        resizeMode: 'contain',
        width: width,
        height: height
    },
    input: {
        height: 40,
        width: width - 60,
        alignSelf: 'center',
        margin: 10,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header_ios: {
        marginTop: 100,
    },
    header_android: {
        marginTop: 170,
    },
    text: {
        fontFamily: 'Nunito-Regular',
        color: colors.black
    },
    heading: {
        fontSize: 40,
    },
    subheading: {
        fontSize: 20,
        marginTop: 15
    },
})


