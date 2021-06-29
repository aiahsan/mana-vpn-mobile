import React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import RegionCard from '../componentes/regionListCard'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { AppStyles } from '../styles/appStyle';

const width = Dimensions.get('screen').width;

export default () => {
    const [FavRegion, setFavRegion] = React.useState([{
        img: require('../images/au.png'),
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: require('../images/at.png'),
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: require('../images/au.png'),
        cit: 'Brisbane',
        region: 'Queensland'
    }]);
    const [Region, setRegion] = React.useState([{
        img: require('../images/bg.png'),
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: require('../images/au.png'),
        cit: 'Brisbane',
        region: 'Queensland'
    }, {
        img: require('../images/at.png'),
        cit: 'Brisbane',
        region: 'Queensland'
    }]);
    const navigation = useNavigation();

    return <>
        <View style={{ height: 60, width: '100%', justifyContent: 'center', marginTop: 20, paddingLeft: 20, backgroundColor: '#1d243e' }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome  name="caret-left" size={20} color="white" style={{
                }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 18, fontFamily: 'AvenirNextBold', color: 'white', alignSelf: 'flex-start', marginLeft: '5%' }}>
                    SELECT REGION
            </Text>
                <Text></Text>
                <Text></Text>
            </View>
        </View>
        <View style={[AppStyles.flexTheme, AppStyles.background]}>



            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 50 }}>
                    <Text style={{ fontSize: 18, fontFamily: 'AvenirNextBold', color: '#129ac5', alignSelf: 'flex-start', marginLeft: '5%' }} >FAVORITES</Text>

                    {FavRegion.map((x, i) => <RegionCard img={x.img} isSelected={false} region={x.region} city={x.cit} />
                    )}
                    <Text style={{ fontSize: 18, fontFamily: 'AvenirNextBold', color: '#129ac5', alignSelf: 'flex-start', marginLeft: '5%', marginTop: 20 }} >SELECT REGION</Text>

                    {Region.map((x, i) => <RegionCard img={x.img} isSelected={false} region={x.region} city={x.cit} />
                    )}

                </View>
            </ScrollView>
        </View>
    </>

}