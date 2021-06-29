import React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import {
    Avatar
} from 'react-native-paper';
import RegionCard from '../componentes/regionCard'
import DataButton from '../componentes/dataButton'
import { styles } from '../styles/style';
import Map from '../componentes/map';
import { FontAwesome5 } from '@expo/vector-icons';
import SwitchButton from '../componentes/switchButton'
import Menu from '../componentes/menu'
import { RFValue } from 'react-native-responsive-fontsize';
const width = Dimensions.get('screen').width;
import Modal from 'react-native-modal';
import { Switch } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {Feather} from '@expo/vector-icons';

export default () => {

    const [email, setEmail] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [status, setstatus] = React.useState(false);
    const [modalViable, setModalViable] = React.useState(false);
    return <>
        <View style={[styles.flexTheme, styles.background]}>

            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ alignItems: 'center', marginTop: 50, marginBottom: 50 }}>
                    <View style={styles.homeFlex}>
                        <Avatar.Image size={width / 2.5} style={{ backgroundColor: 'transparent' }} source={require('../images/logo.png')} />
                        <Text style={[styles.mainHeading]}>ManaVPN</Text>

                    </View>
                    <View style={[styles.databuttonGrid]}>
                        <DataButton icon={<FontAwesome5 name="cloud-download-alt" size={24} color="#12a1ca" />} title="Data Received" data={1024} dataUnit="MB" />
                        <DataButton icon={<FontAwesome5 name="cloud-upload-alt" size={24} color="#f3bd46" />} title="Data Sent" data={70.2} dataUnit="GB" />
                    </View>
                    <Map />
                    <SwitchButton status={status} setstatus={setstatus} />
                    <RegionCard img={require('../images/location.png')} isSelected={false} region="United Kingdom" />
                </View>
            </ScrollView>

        </View>
        <View style={{ position: 'absolute', top: RFValue(50), right: RFValue(20) }}>
            <Menu setModalViable={setModalViable} />
            <Modal isVisible={modalViable} onBackdropPress={()=>setModalViable(false)} onBackButtonPress={() => setModalViable(false)}>
                <View style={{ backgroundColor: '#565f84', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                    <Text style={styles.textHeadingtoggle}>Account Managment</Text>
                    <Text style={styles.textHeadingtoggle}>App Settings</Text>

                    <View style={[styles.margint10, { flexDirection: 'row' }]}>
                        <View><Switch color="#12a3cc" value={true} />
                            <Switch color="#12a3cc" value={true} />
                            <Switch color="#12a3cc" value={true} />
                        </View>
                        <View><Text style={[styles.texttoggle]} >Auto Launch</Text>
                            <Text style={[styles.texttoggle]} >Auto Connect</Text>

                            <Text style={[styles.texttoggle]} >Save Login</Text>

                        </View>
                    </View>
                    <Text style={[styles.textHeadingtoggle, styles.margint10]}>VPN Configurations</Text>

                    <View style={[styles.margint10, { flexDirection: 'row' }]}>
                        <View><Switch color="#12a3cc" value={true} />
                            <Switch color="#12a3cc" value={true} />
                            <Switch color="#12a3cc" value={true} />
                        </View>
                        <View><Text style={[styles.texttoggle]} >STEALTHVPN</Text>
                            <Text style={[styles.texttoggle]} >Kill Switch</Text>

                            <Text style={[styles.texttoggle]} >Disable IPv6</Text>

                        </View>
                    </View>
                    <View >
                        

                    </View>
                    <DropDownPicker
                            items={[
                                { label: 'USA', value: 'usa', icon: () => null},
                                { label: 'UK', value: 'uk', icon: () => null },
                                { label: 'France', value: 'france', icon: () => null },
                            ]}
                            
                            placeholder="Cipher"
                            // defaultValue={this.state.country}
                            containerStyle={{ height: 40,width:'90%',margin:'auto',marginTop:10 }}
                            style={{ backgroundColor: '#4c598d',borderColor:'#4c598d' }}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            globalTextStyle={{color:'white'}}
                            labelStyle={{color:'white'}}
                            dropDownStyle={{ backgroundColor: '#4c598d',borderColor:'#4c598d' }}
                            // onChangeItem={item => this.setState({
                            //     country: item.value
                            // })}
                        />
                </View>
            </Modal>
        </View>

    </>

}