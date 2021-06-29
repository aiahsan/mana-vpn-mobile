import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {  FontAwesome } from '@expo/vector-icons';
import { AppStyles } from '../styles/appStyle';
export default ({status,setstatus})=>{
    return <View style={AppStyles.switchMain}>
    <Text style={{color:status==1?"#10a0c5":"#e85e39",fontFamily: 'AvenirNextReg'}}>{status==true?"SECURE":"UNSECURE"}</Text>
    <TouchableOpacity onPress={()=>setstatus(!status)}>
    <LinearGradient
         // Button Linear Gradient
         colors={status==1?['#dc4b2b', '#dc4b2b', '#dc4b2b']:['#129dc8', '#0ebada', '#139ec9']}
         style={AppStyles.grdButton}>
         <FontAwesome name="power-off" size={40} color="white" />
     </LinearGradient>
    </TouchableOpacity>
    </View>
}