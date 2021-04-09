import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { auth } from '../firebase'

const Home = ({ navigation }) => {
    const signOut = () => {
        auth.signOut().then(() => {
            navigation.replace('Landing')
        })
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home</Text>
            <Button onPress={signOut} title="Logout" />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
