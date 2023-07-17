import React, { useState } from 'react';
import { Modal, Pressable, TouchableOpacity, Text, View } from 'react-native';
import CircleIconButton from '../Components/CircleIconButton';
import Constants from '../Constants/Constants';

const Dashboard = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
    return (
      <View style={{ height:'100%' }}>
          <View style= {{ flexDirection:'row', height:100, alignItems:'center', justifyContent:"center" }}>
            <Text style={{fontSize:24, color:Constants.white, fontFamily:Constants.fontBold}}>
              Some name?
            </Text>
          </View>
          
          <View style= {{ flexDirection:'row', height:100, alignItems:'center', justifyContent:"center" }}>
            <CircleIconButton label="Send"/>
            <View style={{width:50}} />
            <CircleIconButton label="Copy"/>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={{flex:1, justifyContent: 'flex-end', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => {setModalVisible(false)}} style={{color:Constants.blue, flex:1, justifyContent: 'flex-end', alignItems: 'center', width:'100%'}}>
                <View style={{
                  width:"100%",
                  height:"50%",
                  backgroundColor: Constants.white,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: 35,
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,}}>

                  <View style={{flex:1, flexDirection:"row", justifyContent:'flex-end'}}>
                    <Pressable
                      onPress={() => setModalVisible(!modalVisible)}>
                      <Text style={{fontFamily:Constants.fontBold, fontSize:24, color:Constants.red}}>Hide Modal</Text>
                    </Pressable>
                  </View>
                  
                </View>
              </TouchableOpacity>
            </View>
          </Modal>

          <Pressable
            style={{}}
            onPress={() => setModalVisible(true)}>
            <Text style={{}}>Show Modal</Text>
          </Pressable>
        
      </View>
    );
  }


  
export default Dashboard;