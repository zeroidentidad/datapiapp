import React from "react";
import Menu, { MenuItem } from "react-native-material-menu";
import { Image, TouchableOpacity } from "react-native";

export default class TopNavigation extends React.Component {

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

        const { navigate } = this.props.navigation;

        return (
            <Menu
                ref={(ref) => this._menu = ref}
                button={
                <TouchableOpacity onPress={() => this._menu.show()} style={{ paddingHorizontal: 16, height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../assets/menu_ic.png')} style={{ width: 20, height: 20, alignSelf: 'center' }} resizeMode='contain' />
                </TouchableOpacity>
                }
            >
                <MenuItem onPress={() => this.hideMenu()} textStyle={{ color: '#000', fontSize: 16 }}>◀️</MenuItem>
                <MenuItem textStyle={{ color: '#000', fontSize: 16 }}>Indicadores generales</MenuItem>
                <MenuItem textStyle={{ color: '#000', fontSize: 16 }}>Bases de datos publicadas</MenuItem>
                <MenuItem textStyle={{ color: '#000', fontSize: 16 }}>Paquetes de datos</MenuItem>
                <MenuItem textStyle={{ color: '#000', fontSize: 16 }}>Organizaciones publicadoras</MenuItem>
                <MenuItem textStyle={{ color: '#000', fontSize: 16 }}>Catálogo APIs activas</MenuItem>
                <MenuItem onPress={() =>navigate('About')} textStyle={{ color: '#000', fontSize: 16 }}>Acerca</MenuItem>
            </Menu>
        )
    }

}