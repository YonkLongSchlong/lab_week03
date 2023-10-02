import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import style from './secondscreen.style';
import { FontAwesome } from '@expo/vector-icons'; 

export default function SecondScreen() {

    const [string, setString] = useState("Do hai long");
    const [star, setStar] = useState(0)

    useEffect(() => {
        if(star == 1) {
            setString("Rat te")
        }
        if(star == 2) {
            setString("Te")
        }
        if(star == 3) {
            setString("On")
        }
        if(star == 4) {
            setString("Hai long")
        }
        if(star == 5) {
            setString("Cuc ki hai long")
        }
    },[star])

  return (
    <View style={style.container}>
      <View style={style.productSection}>
        <View>
            <MaterialCommunityIcons name="usb-flash-drive" size={80} color="black" />
        </View>
        <View style={style.productDescription}>
            <Text style={{fontWeight: "bold",
        fontSize: 15}}>USB Bluetooth Musix Receiver HJX-001-Bien loa thuong thanh loa bluetooth</Text>
        </View>
      </View>

      <View style={style.ratingSection}>
        <View >
            <Text style={style.ratingText}>{string}</Text>
        </View>
        <View style={style.starSection}>
            <TouchableOpacity onPress={() => {setStar(1)}}>
             <FontAwesome name={star >= 1 ? "star": "star-o"} size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setStar(2)}}>
             <FontAwesome name={star >= 2 ? "star": "star-o"} size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setStar(3)}}>
             <FontAwesome name={star >= 3 ? "star": "star-o"} size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setStar(4)}}>
             <FontAwesome name={star >= 4 ? "star": "star-o"} size={34} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setStar(5)}}>
             <FontAwesome name={star >= 5 ? "star": "star-o"} size={34} color="black" />
            </TouchableOpacity>
        </View>
      </View>

      <View style={style.addPictureSection}>
        <TouchableOpacity style={style.addPictureContainer}>
            <View>
            <FontAwesome name="camera" size={24} color="black" />
            </View>
            <Text>Them hinh anh</Text>
        </TouchableOpacity>
      </View>

      <View >
      <TextInput
        multiline={true}
        numberOfLines={4}/
        >
        
      </View>
    </View>
  )
}