import React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView, TouchableOpacity,Image } from 'react-native'
import { Avatar, TextInput, Checkbox ,Button, DefaultTheme,
    DarkTheme,} from 'react-native-paper';
const width = Dimensions.get('screen').width;
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import { RFValue } from 'react-native-responsive-fontsize';
import { AppStyles } from '../styles/appStyle';
export default () => {
    
    const [email, setEmail] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const navigation= useNavigation();
    return    <>  

    <View  style={[AppStyles.flexTheme, AppStyles.background]}>

    <ScrollView>
   <View style={{alignItems:'center'}}>
   <Avatar.Image size={width / 2.1} style={{ backgroundColor: 'transparent' }} source={require('../images/logo.png')} />
    <Text style={[AppStyles.mainHeading, AppStyles.margintN10]}>ManaVPN</Text>
    <Text style={AppStyles.textHelper}>Email</Text>
    <TextInput
        placeholder="Your Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={AppStyles.textInputStyle}
        mode="outlined"
        placeholderTextColor="#9c9ba2"
        
        underlineColor="white"
        right={<TextInput.Icon name={() => <AntDesign name="checkcircleo" size={24} color="#139fca" />} />}
                
    />
    <Text style={[AppStyles.textHelper, AppStyles.margint10]}>Password</Text>
    <TextInput
        placeholder="Your Password"
        value={email}
        onChangeText={text => setEmail(text)}
        style={AppStyles.textInputStyle}
        placeholderTextColor="#9c9ba2"
        mode="outlined"
        right={<TextInput.Icon name={() => <Feather name="eye-off" size={24} color="#139fca" />}/>}
       
    />
    <View style={{flexDirection:'row',width: '95%', margin: 'auto',justifyContent:'space-between',marginTop:RFValue(15)}}>
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <Checkbox 
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
      color="white"
      
    />
    <Text style={[AppStyles.textForgot]}>Remember Me</Text>
    </View>
    <TouchableOpacity  style={[AppStyles.forgotTouchable]}>
            <Text style={[AppStyles.textForgot]}>Forgot Password?</Text>
    </TouchableOpacity>
    </View>
    <Button mode="contained"  onPress={()=>navigation.push("Home")} labelStyle={AppStyles.buttonLabel} style={AppStyles.button}>Login</Button>
   </View>
   
    </ScrollView>
    
</View>
 </>

}