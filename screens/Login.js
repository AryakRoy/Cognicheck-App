import React, { useLayoutEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    SafeAreaView,
    KeyboardAvoidingView,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../assets/materials/colors';
import GradientButton from '../components/GradientButton'
import dimensions from '../assets/materials/constants'
import theme from '../assets/materials/theme'
import { TextInput } from 'react-native-paper'
import DismissKeyboard from '../assets/materials/DismissKeyboard'

const images = {
    "background": require('../assets/background-images/Background.png'),
};
const [width, height] = dimensions;

const Login = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "",
            headerTransparent: true,
            headerTintColor: colors.white,
            headerBackTitleVisible: false,
            headerLeftContainerStyle: { paddingHorizontal: 10 }
        })
    }, [navigation]);

    const handleForgotPasswordPress = () => navigation.navigate('Forgot Password')
    return (
        <DismissKeyboard>
            <View style={styles.container}>
                <ImageBackground source={images.background} style={styles.background}>
                    <SafeAreaView>
                        <View style={[styles.header, Platform.OS === "ios" ? styles.header_ios : styles.header_android]}>
                            <Text style={[styles.text, styles.heading]}>Login</Text>
                            <Text style={[styles.text, styles.subheading]}>Welcome Back! Let's Catch Up</Text>
                        </View>
                        <KeyboardAvoidingView behavior="position" style={{ marginTop: 50 }}>
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
                            <TouchableOpacity onPress={handleForgotPasswordPress}>
                                <Text style={styles.forgot_label}>Forgot Password ?</Text>
                            </TouchableOpacity>
                            <GradientButton
                                buttonText="Login"
                                margin={50}
                            />
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
        margin: 12,
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header_ios: {
        marginTop: 120,
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
    forgot_label: {
        color: colors.blue,
        fontSize: 20,
        alignSelf: 'flex-end',
        marginRight: 25
    }
})

