import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Send, Copy } from "react-native-feather";
import Constants from '../Constants/Constants';


const CircleIconButton = ({label})=> {
  // const [isActive, setIsActive] = useState(false);
  // const [isFoo, setIsFoo] = useState(true);

  const foo = () => {
    label == "Send" ? 
    console.log("Send") : 
    console.log("Copy");
  }
  
  return (
    <View style={{alignContent:"center", alignItems:"center"}}>
      <TouchableOpacity onPress={foo} style={{color:Constants.blue, height:50, width:50}}>
        <View style={{ height:50, width:50, borderRadius:25, backgroundColor:Constants.blue, alignItems:"center", justifyContent:"center" }}>
          {
            label == "Send" ? 
            <Send color="#E1E1E1" size={50} /> :
            <Copy color="#E1E1E1" size={50} />
          }
        </View>
      </TouchableOpacity>

      <Text style={{ color:Constants.white, fontSize:16, fontFamily:Constants.fontRegular, marginTop:5 }}>
        {label}
      </Text>
    </View>
  );
}
export default CircleIconButton;