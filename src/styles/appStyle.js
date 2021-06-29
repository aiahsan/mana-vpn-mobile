import { StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const width = Dimensions.get('screen').width;
const scale = width / 320;


export const AppStyles = StyleSheet.create({
    background: {
        backgroundColor: '#1d243e',
    },
  flex1:{ flex: 1.2, width: '100%' },
  flex2:{  width: '100%', flex: 1, flexDirection:'row', justifyContent: 'center', alignItems: 'center' },
  flex3:{ flex: 1, width: '100%' },
  flex4:{ flex: 1.3, width: '100%',justifyContent:'center' },
  flex5:{   flex: 1, width: '100%',justifyContent:'center', },
  homeFlex: { alignItems:'center',justifyContent:'center',margin:'auto',width:'100%',height:'100%',flexDirection:'row',padding:RFValue(90)},
  mainHeading: {
    fontFamily: 'AvenirNextBold',
    color: '#ffffff',
    fontSize: RFValue(24)

},
logoMain:width / 3.5,
dataButtonView:{  width: '48%', margin: 'auto' },
datatouch: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: RFValue(18), width: '100%',backgroundColor: '#30395c', borderRadius: 15, },
datatouchtitle: { color: '#4f5467', marginLeft: RFValue(10),fontFamily: 'AvenirNextReg' },
datamain: {
    fontSize: RFValue(26),
    fontFamily: 'AvenirNextReg',
    textAlign: 'center',
    marginTop: RFValue(8),
    color: '#9fa1af'
},datamainspan: {
    fontSize: RFValue(20)
},
RWSP:{ flexDirection: 'row', justifyContent: 'space-between' },
mapPt:{width:'98%',borderRadius:0},
map:{        backgroundColor: '#1d243e',borderRadius:0,borderWidth:0,padding:RFValue(5)
},
switchMain:{justifyContent:'center',alignItems:'center',flex:1,marginTop:RFValue(60)},
grdButton: {
    width: width / 3.2,
    height: width / 3.2,
    borderRadius: width / 3.2, justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
},
rgnCard:{ width: '90%',justifyContent:'center',alignItems:'center',marginLeft:'5%' },
rgncardbutton:{ borderRightWidth: 2, margin: 5, borderColor: '#676976' ,paddingTop:5,paddingBottom:5},
rgncardimg:{ backgroundColor: 'transparent', marginRight: 10 },
regionText:{
    color:'#1883ab',
    fontSize:RFValue(20),
    fontFamily:'AvenirNextBold',
   
},
regionButton: {
    width:'100%',
    borderRadius:15,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-around',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
},
flexTheme: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'

},
mainHeading: {
    fontFamily: 'AvenirNextBold',
    color: '#ffffff',
    fontSize: RFValue(24)

},
margintN10: {
    marginTop: RFValue(-20)
},
margint10: {
    marginTop: RFValue(25)
},
textHelper: { textAlign: 'left', alignSelf: 'flex-start', marginLeft: '5%', color: '#b0afb2', fontSize: RFValue(16), fontFamily: 'AvenirNextReg' },
textInputStyle:{ width: '90%', margin: 'auto', height: 50, backgroundColor: 'transparent' ,fontSize:RFValue(16),fontFamily: 'AvenirNextReg'},
textForgot: { textAlign: 'right', position:'relative',left:RFValue(-10),marginLeft: '5%', color: '#b0afb2', fontSize: RFValue(14), fontFamily: 'AvenirNextReg', },
forgotTouchable: { justifyContent: 'center', alignSelf: 'center', marginRight: RFPercentage(1) },
buttonLabel: { textTransform: 'none', fontSize: RFValue(18), fontFamily: 'AvenirNextReg' },
button: { width: '90%', marginTop: RFValue(20), borderRadius: 10 },
flexTheme1: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column'

},    textHeadingtoggle: { color: 'white', fontSize: RFValue(22), fontFamily: 'AvenirNextBold' },
texttoggle: { color: 'white', fontSize: RFValue(20), fontFamily: 'AvenirNextReg' },


});
