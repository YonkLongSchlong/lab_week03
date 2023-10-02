import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import style from './firstscreen.style';

export default function FirstScreen() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState('');

    const logginHandler = () => {
        console.log(name, password);
    }

  return (
    <View style={style.container}>
      <View>
        <Text style={style.header}>LOGIN</Text>
      </View>

      <View style={style.inputSection}>
        <View style={style.nameInputContainer}>
           <TextInput style={style.nameInput} onChangeText={setName} value={name} placeholder='Name'/>
           <View style={style.nameInputIcon}>
                <FontAwesome name="user" size={24} color="black" />
           </View>
        </View>

        <View style={style.passwordInputContainer}>
            <TextInput style={style.passwordInput} onChangeText={setPassword} value={password} placeholder='Password'/>
            <View style={style.passwordInputIcon}>
                <FontAwesome name="lock" size={24} color="black" />
           </View>
           <View style={style.eyeInputIcon}>
                <FontAwesome name="eye-slash" size={24} color="black" />
           </View>
        </View>
      </View>

      <View style={style.buttonSection}>
        <TouchableOpacity style={style.button} onPress={logginHandler}>
            <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}