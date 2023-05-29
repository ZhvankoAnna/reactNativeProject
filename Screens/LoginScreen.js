import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    return(
        <View style={styles.box}>
            <Text style={styles.title}>Увійти</Text>
            <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
            <TextInput style={styles.input} placeholder="Пароль"/>
            <Button style={styles.btn} color='#FF6C00' title="Увійти" onPress={() => {}}/>
            <Text style={styles.link}>Немає акаунту? Зареєструватися</Text>
        </View>
    )
}

const styles = StyleSheet.create({
box: {
    width: '100%',
    backgroundColor: '#fff',
    paddingTop: 92,
    paddingHorizontal: 16,
    paddingBottom: 78,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25

},
title: {
    fontFamily: 'rb-med',
    fontSize: 30,
    marginBottom: 32,
    textAlign: 'center'
},
input: {
    minWidth: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    fontFamily: 'rb-reg',
    fontSize: 16
},
btn: {
    width: 343,
    height: 51,
    paddingVertical: 16,
    paddingHorizontal: 32,
},
link: {
    marginTop: 16,
    textAlign: 'center'
}

})