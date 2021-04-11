import React, { useRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { auth } from '../firebase'
import OptionsListItem from '../components/optionsListItem'
import colors from '../assets/materials/colors'
import dimensions from '../assets/materials/constants';
import getInitials from '../assets/materials/getInitials'
import { Feather, MaterialIcons, MaterialCommunityIcons, Entypo, AntDesign } from '@expo/vector-icons'
import { Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler'
import RBSheet from "react-native-raw-bottom-sheet";

const [width, height] = dimensions
const Profile = ({ navigation }) => {
    const refRBSheet = useRef();
    const user = auth.currentUser
    let name = null
    let email = null
    let initials = null
    let createdAt = null
    let lastLogin = null
    if (user != null) {
        name = user.displayName;
        email = user.email;
        initials = getInitials(name);
        createdAt = new Date(user.metadata.creationTime);
        createdAt = `${createdAt.getDate()}-${createdAt.getMonth()}-${createdAt.getFullYear()}`
        lastLogin = new Date(user.metadata.lastSignInTime);
        lastLogin = `${lastLogin.getDate()}-${lastLogin.getMonth()}-${lastLogin.getFullYear()}`
    }
    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Landing')
        })
    }
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View>
                    <Text style={styles.header}>Profile</Text>
                    <LinearGradient
                        style={styles.card}
                        colors={['rgba(156, 224, 220, 0.8)', 'rgba(156, 224, 220, 0.2)']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0.1 }}>
                        <View style={styles.cardLeft}>
                            <View style={styles.cardHeader}>
                                <View style={styles.initialsWrapper}>
                                    <Text style={styles.initials}>{initials}</Text>
                                </View>
                                <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                                    <Feather name="settings" size={32} color={colors.black} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardDetails}>
                                <Text style={styles.cardName}>{name}</Text>
                                <Text style={styles.cardEmail}>{email}</Text>
                            </View>
                        </View>
                        <View style={styles.cardRight}>
                            <Image style={styles.cardImage} source={require('../assets/images/profile.png')} />
                        </View>
                    </LinearGradient>
                    <View style={styles.optionsWrapper}>
                        <Text style={styles.optionsText}>Options</Text>
                        <View style={styles.options}>
                            <OptionsListItem
                                title="Visit-Website"
                                isbottom={true}
                            />
                            <OptionsListItem
                                title="Settings"
                                handlePress={() => refRBSheet.current.open()}
                            />
                        </View>
                    </View>
                    <View style={styles.loginDetails}>
                        <Text style={styles.created_at}>Account Created : {createdAt}</Text>
                        <Text style={styles.loast_login}>Last Login : {lastLogin}</Text>
                    </View>
                </View>
            </SafeAreaView>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown
                closeOnPressMask
                closeOnPressBack
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    },
                    draggableIcon: {
                        backgroundColor: colors.black
                    }
                }}
            >
                <View>
                    <OptionsListItem
                        title="Update Name"
                        icon={<Feather name="edit-3" size={20} color={colors.black} />}
                    />
                    <OptionsListItem
                        title="Update Email"
                        icon={<Entypo name="email" size={20} color={colors.black} />}
                    />
                    <OptionsListItem
                        title="Change Password"
                        icon={<MaterialCommunityIcons name="onepassword" size={20} color={colors.black} />}
                    />
                    <OptionsListItem
                        title="Logout"
                        handlePress={signOut}
                        icon={<AntDesign name="logout" size={20} color={colors.black} />}
                    />
                </View>
            </RBSheet>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.white
    },
    header: {
        fontFamily: 'Nunito-Semibold',
        fontSize: 32,
        color: colors.black,
        marginTop: 30,
        marginHorizontal: 20
    },
    card: {
        marginTop: 20,
        width: width - 40,
        height: height * (193 / 896),
        marginHorizontal: 20,
        borderRadius: 20,
        flexDirection: 'row'
    },
    cardLeft: {
        flex: 0.7
    },
    cardHeader: {
        marginTop: 30,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    initialsWrapper: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        marginRight: 20,
        alignItems: 'center',
        backgroundColor: colors.lightblue,
        borderRadius: 10
    },
    initials: {
        fontFamily: 'Nunito-Semibold',
        color: '#FFFFFF',
        fontSize: 16
    },
    cardDetails: {
        marginTop: 10,
        marginHorizontal: 20
    },
    cardName: {
        fontFamily: 'Nunito-Semibold',
        fontSize: 24,
        color: colors.black
    },
    cardEmail: {
        fontFamily: 'Nunito-Semibold',
        fontSize: 16,
        color: colors.black,
    },
    cardRight: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginRight: 20
    },
    optionsWrapper: {
        marginTop: 30
    },
    optionsText: {
        marginHorizontal: 20,
        fontFamily: 'Nunito-Semibold',
        fontSize: 16,
        color: colors.black
    },
    options: {
        marginTop: 20
    },
    loginDetails: {
        marginTop: 20,
        marginHorizontal: 20
    },
    created_at: {
        fontFamily: 'Roboto-Medium',
        fontSize: 13,
        color: colors.black
    },
    loast_login: {
        fontFamily: 'Roboto-Medium',
        fontSize: 13,
        color: colors.black,
        marginTop: 5
    },
})
