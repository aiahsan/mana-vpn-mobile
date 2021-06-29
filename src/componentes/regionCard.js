import React from 'react';
import { View, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Avatar } from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Nav } from '../utiles/navigationType';
import { AppStyles } from '../styles/appStyle';
const width = Dimensions.get('screen').width;

export default ({ isSelected, region, img }) => {

    const navigation = useNavigation();
    return <TouchableOpacity onPress={() => navigation.push(Nav.Region)} style={AppStyles.rgnCard}>
        <LinearGradient
            // Button Linear Gradient
            colors={['#374061', '#313857', '#262b46']}
            style={AppStyles.regionButton}>
            <View style={AppStyles.rgncardbutton}>
                <Avatar.Image size={45} style={AppStyles.rgncardimg} source={img} />

            </View>
            <View>
                <Text style={AppStyles.regionText}>Select Region</Text>
                {
                    isSelected ? <Text style={[AppStyles.regionText, { color: 'white', maxWidth: 130 }]} numberOfLines={1} ellipsizeMode='tail'>{region}</Text>
                        : <></>
                }

            </View>
            <MaterialCommunityIcons name="triangle-outline" size={20} color="#d1d3db" style={{
                transform: [{ rotateZ: "90deg" }]
            }} />
        </LinearGradient>
    </TouchableOpacity>
}