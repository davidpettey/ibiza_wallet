import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Constants from '../Constants/Constants';

const SignIn = () => {

  grabWallet = () => {
    
  }
  
  return (
    <View style= {{ height:'100%', alignItems:'center', justifyContent:"center"}}>
      <Text style={{fontSize:30, color:Constants.white, fontFamily:Constants.fontBold}}>
        BioWallet
      </Text>
      <TouchableOpacity onPress={this.grabWallet} style={{width:'100%', alignContent:'center', justifyContent:'center', marginTop:20}}>
        <View style={{backgroundColor:Constants.blue, borderRadius:25, height:50, width:'75%', justifyContent:'center', alignSelf:'center'}}>
          <Text style={{fontFamily:Constants.fontRegular, fontSize:18, color:Constants.white, textAlign:'center'}}>
            Grab Wallet
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
  
  export default SignIn;