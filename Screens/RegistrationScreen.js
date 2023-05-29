import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";

export default function RegistrationScreen() {
    return(
        <View style={styles.box}>
            <View style={styles.wrapper}>
                <Image  width={120} height={120}/>
            </View>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder="Логін"/>
            <TextInput style={styles.input} placeholder="Адреса електронної пошти"/>
            <TextInput style={styles.input} placeholder="Пароль"/>
            <Button style={styles.btn} color='#FF6C00' title="Зареєструватися" onPress={() => {}}/>
            <Text style={styles.link}>Вже є акаунт? Увійти</Text>
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
wrapper: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    backgroundColor: '#F6F6F6'
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
    // fontFamily: 'rb-reg',
    // fontSize: 16
},
btn: {
    width: 343,
    height: 51,
    paddingVertical: 16,
    paddingHorizontal: 32
},
link: {
    marginTop: 16,
    textAlign: 'center'
}
})