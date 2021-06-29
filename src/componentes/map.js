import React from 'react';
import {View} from 'react-native'
import { Card } from 'react-native-paper';
import { AppStyles } from '../styles/appStyle';
export default ()=>{
    return  <View style={AppStyles.mapPt}>
      <Card.Cover  source={require('../images/map.png')} style={[AppStyles.map]} />

  </View>
}