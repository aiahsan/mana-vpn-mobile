import React from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';

import { AppStyles } from '../styles/appStyle';
const width = Dimensions.get('screen').width;

export default ({ city, region, img }) => {
    return <TouchableOpacity  style={{ width: '85%',marginTop:20 }}>
        <LinearGradient
            // Button Linear Gradient
            colors={['#374061', '#313857', '#262b46']}
            
            style={[AppStyles.regionButton,{justifyContent:'flex-start'}]}>
            <View style={{ borderRightWidth: 2, margin: 10, borderColor: '#676976', paddingTop: 10, paddingBottom: 10,marginLeft:'5%' }}>
                <Avatar.Image size={45} style={{ backgroundColor: 'transparent', marginRight: 10 }} source={img} />

            </View>
            <View style={{marginLeft:'5%' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Text style={[AppStyles.regionText,{fontSize:14}]}>City</Text>
                        <Text style={[AppStyles.regionText,{fontSize:14}]}>Region</Text>

                    </View>
                    <View >
                        <Text style={[AppStyles.regionText, { color: 'white', maxWidth: 130, marginLeft: 10 ,fontSize:14}]} numberOfLines={1} ellipsizeMode='tail'>{city}</Text>

                        <Text style={[AppStyles.regionText, { color: 'white', maxWidth: 130, marginLeft: 10,fontSize:14 }]} numberOfLines={1} ellipsizeMode='tail'>{region}</Text>
                    </View>
                </View>
            </View>

        </LinearGradient>
    </TouchableOpacity>
}