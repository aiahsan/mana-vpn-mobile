import React from 'react';

import { View, Text } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
class App extends React.PureComponent {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
        <Menu
        ref={this.setMenuRef}
        style={{backgroundColor:'#4c598d',width:60}}
        button={<AntDesign name="setting" size={24}   onPress={this.showMenu} style={{color:'#139fca'}} />}
      >
        <MenuItem  onPress={this.hideMenu}><Feather name="user" size={24}  onPress={this.showMenu} style={{color:'#139fca'}} /></MenuItem>
        <MenuItem onPress={()=>{
            this.hideMenu()
            this.props.setModalViable(true)
        }}><AntDesign name="setting" size={24}  onPress={this.showMenu} style={{color:'#139fca'}} /></MenuItem>
        <MenuItem onPress={this.hideMenu}><SimpleLineIcons name="logout" size={24}  onPress={this.showMenu} style={{color:'#139fca'}} /></MenuItem>
      </Menu>
    );
  }
}

export default App;