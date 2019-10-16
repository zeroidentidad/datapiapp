import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import FadeInView from './FadeInView';

export default OrgItem = (props) => {

    const img = (!props.imageUrl || props.imageUrl.length == 0 || typeof props.imageUrl == "undefined") ? require('../assets/database_ic.png') : { uri: props.imageUrl };

    options = { year: "numeric", month: "numeric", day: "numeric" };

    tipo = '';
    switch (props.govType) {
        case 'state':
            tipo='Estatal';
            break;
        case 'federal':
            tipo='Federal';
            break;
        case 'municipal':
            tipo = 'Municipal';
            break;                        
        case 'autonomous':
            tipo = 'Autonoma';
            break;                        
        default:
            tipo='no clasificado';
            break;
    }

    return (
    <FadeInView style={styles.row} >
        <Image
            source={img}
            style={styles.thumbnail} />
        <View style={styles.rightBox}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.organization}>Registro: {new Date(props.created_at).toLocaleDateString('es-ES', options)}</Text>
            <Text style={styles.url}>Tipo: {tipo}</Text>
        </View>
    </FadeInView>
    );
}

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    thumbnail: {
        width: 48,
        height: 48,
    },
    rightBox: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'black'
    },
    organization: {
        textAlign: 'center',
        fontSize: 14,
        color: 'black'
    },
    url: {
        textAlign: 'center',
        fontSize: 14,
        color: 'green'
    }    
});    