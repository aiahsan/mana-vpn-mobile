import React from 'react';
import { View, Dimensions, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { DataTable } from 'react-native-paper';

import {
    Avatar
} from 'react-native-paper';
import RegionCard from '../componentes/regionCard'
import DataButton from '../componentes/dataButton'
import Map from '../componentes/map';
import { FontAwesome5 } from '@expo/vector-icons';
import SwitchButton from '../componentes/switchButton'
import Menu from '../componentes/menu'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const width = Dimensions.get('screen').width;
import Modal from 'react-native-modal';
import { Switch } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import { AppStyles } from '../styles/appStyle'
export default () => {

    const [email, setEmail] = React.useState('');
    const [checked, setChecked] = React.useState(false);
    const [status, setstatus] = React.useState(false);
    const [modalViable, setModalViable] = React.useState(false);
    const [togle, settogle] = React.useState({
        launch: false,
        connect: false,
        login: false,
        stelth: false,
        kill: false,
        ipv6: false,
    })

    return <>
        <View style={[AppStyles.background, AppStyles.flexTheme1]}>
            <View style={[AppStyles.flex1]}>
                <View style={AppStyles.homeFlex}>
                    <Avatar.Image size={width / 3.5} style={{ backgroundColor: 'transparent' }} source={require('../images/logo.png')} />
                    <Text style={[AppStyles.mainHeading]}>ManaVPN</Text>

                </View>
            </View>
            <View style={[AppStyles.flex2]}>

                <View style={AppStyles.RWSP}>
                    <DataButton icon={<FontAwesome5 name="cloud-download-alt" size={24} color="#12a1ca" />} title="Data Received" data={1024} dataUnit="MB" />
                    <DataButton icon={<FontAwesome5 name="cloud-upload-alt" size={24} color="#f3bd46" />} title="Data Sent" data={70.2} dataUnit="GB" />
                </View>
            </View>
            <View style={[AppStyles.flex3]}>

                <Map />
            </View>
            <View style={[AppStyles.flex4]}>

                <SwitchButton status={status} setstatus={setstatus} />
            </View>
            <View style={[AppStyles.flex5]}>
                <RegionCard img={require('../images/location.png')} isSelected={false} region="United Kingdom" />
            </View>
        </View>
        <View style={{ position: 'absolute', top: RFValue(50), right: RFValue(20) }}>
            <Menu setModalViable={setModalViable} />
            <Modal isVisible={modalViable} onBackdropPress={() => setModalViable(false)} onBackButtonPress={() => setModalViable(false)}>
                <View style={{ backgroundColor: '#565f84', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 20 }}>
                    {/* <Text style={AppStyles.textHeadingtoggle}>Account Managment</Text> */}
                    <Text style={AppStyles.textHeadingtoggle}>App Settings</Text>
                    <DataTable >


                        <DataTable.Row  borderless>
                            <DataTable.Cell style={{justifyContent:'flex-start'}} borderless ><Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, launch: !togle.launch })} value={togle.launch} /></DataTable.Cell>
                            <DataTable.Cell style={{position:'relative',right:RFPercentage(12.5)}}  ><Text style={[AppStyles.texttoggle]} >Auto Launch</Text></DataTable.Cell>
                        </DataTable.Row  >
                        <DataTable.Row borderless>
                            <DataTable.Cell style={{justifyContent:'flex-start'}}><Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, connect: !togle.connect })} value={togle.connect} /></DataTable.Cell>
                            <DataTable.Cell style={{position:'relative',right:RFPercentage(12.5)}}> <Text style={[AppStyles.texttoggle]} >Auto Connect</Text></DataTable.Cell>
                        </DataTable.Row>
                        <DataTable.Row borderless >
                            <DataTable.Cell style={{justifyContent:'flex-start'}}> <Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, login: !togle.login })} value={togle.login} /></DataTable.Cell>
                            <DataTable.Cell style={{position:'relative',right:RFPercentage(12.5)}}>  <Text style={[AppStyles.texttoggle]} >Save Login</Text></DataTable.Cell>
                        </DataTable.Row>



                    </DataTable>
                    {/* <View style={[AppStyles.margint10, { flexDirection: 'row' }]}>
                        <View><Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, launch: !togle.launch })} value={togle.launch} />
                            <Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, connect: !togle.connect })} value={togle.connect} />
                            <Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, login: !togle.login })} value={togle.login} />
                        </View>
                        <View><Text style={[AppStyles.texttoggle]} >Auto Launch</Text>
                            <Text style={[AppStyles.texttoggle]} >Auto Connect</Text>

                            <Text style={[AppStyles.texttoggle]} >Save Login</Text>

                        </View>
                    </View> */}
                                        <Text style={[AppStyles.textHeadingtoggle, AppStyles.margint10]}>VPN Configurations</Text>

                     <DataTable >


<DataTable.Row borderless>
    <DataTable.Cell style={{justifyContent:'flex-start'}}><View style={{display:'flex',justifyContent:'center',alignItems:'center'}}><Switch color="#12a3cc"  onValueChange={() => settogle({ ...togle, stelth: !togle.stelth })} value={togle.stelth} /></View></DataTable.Cell>
    <DataTable.Cell style={{position:'relative',right:RFPercentage(12.5)}}><Text style={[AppStyles.texttoggle]} >StealthVPN</Text></DataTable.Cell>
</DataTable.Row>
<DataTable.Row borderless>
    <DataTable.Cell style={{justifyContent:'flex-start'}}><Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, kill: !togle.kill })} value={togle.kill} /></DataTable.Cell>
    <DataTable.Cell style={{position:'relative',right:RFPercentage(12.5)}}> <Text style={[AppStyles.texttoggle]} >Kill Switch</Text></DataTable.Cell>
</DataTable.Row>
<DataTable.Row borderless>
    <DataTable.Cell style={{justifyContent:'flex-start'}}> <Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, ipv6: !togle.ipv6 })} value={togle.ipv6}  /></DataTable.Cell>
    <DataTable.Cell  style={{position:'relative',right:RFPercentage(12.5)}}>  <Text style={[AppStyles.texttoggle]} >Disable IPv6 </Text></DataTable.Cell>
</DataTable.Row>



</DataTable>

                    {/* <View style={[AppStyles.margint10, { flexDirection: 'row' }]}>
                        <View><Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, stelth: !togle.stelth })} value={togle.stelth} />
                            <Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, kill: !togle.kill })} value={togle.kill} />
                            <Switch color="#12a3cc" onValueChange={() => settogle({ ...togle, ipv6: !togle.ipv6 })} value={togle.ipv6} />
                        </View>
                        <View><Text style={[AppStyles.texttoggle]} >StealthVPN</Text>
                            <Text style={[AppStyles.texttoggle]} >Kill Switch</Text>

                            <Text style={[AppStyles.texttoggle]} >Disable IPv6</Text>

                        </View>
                    </View>
                    <View >


                    </View> */}
                    <DropDownPicker
                        items={[
                            { label: 'USA', value: 'usa', icon: () => null },
                            { label: 'UK', value: 'uk', icon: () => null },
                            { label: 'France', value: 'france', icon: () => null },
                        ]}

                        placeholder="Cipher"
                        // defaultValue={this.state.country}
                        containerStyle={{ height: 40, width: '90%', margin: 'auto', marginTop: 10 }}
                        style={{ backgroundColor: '#4c598d', borderColor: '#4c598d' }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        globalTextStyle={{ color: 'white' }}
                        labelStyle={{ color: 'white' }}
                        dropDownStyle={{ backgroundColor: '#4c598d', borderColor: '#4c598d' }}
                    // onChangeItem={item => this.setState({
                    //     country: item.value
                    // })}
                    />
                </View>
            </Modal>
        </View>

    </>

}