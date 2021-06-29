import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { AppStyles } from '../styles/appStyle';

export default ({icon,title,data,dataUnit})=>{
    return  <View style={AppStyles.dataButtonView}>
    <TouchableOpacity style={[AppStyles.datatouch ]}>
       {icon}
        <Text style={AppStyles.datatouchtitle}>{title}</Text>
    </TouchableOpacity>
    <Text style={AppStyles.datamain}>{data}<Text style={AppStyles.datamainspan}> {dataUnit}</Text></Text>

    </View>
}