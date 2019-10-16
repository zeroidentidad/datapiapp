import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import FadeInView from './FadeInView';

export default PackItem = (props) => {

    const img = (!props.organization.image_url || props.organization.image_url.length == 0 || typeof props.organization.image_url == "undefined") ? require('../assets/database_ic.png') : { uri: props.organization.image_url };

    options = { year: "numeric", month: "numeric", day: "numeric" };

    return (
    <FadeInView style={styles.row} >
        <Image
            source={img}
            style={styles.thumbnail} />
        <View style={styles.rightBox}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.organization}>Creación: {new Date(props.organization.created).toLocaleDateString('es-ES', options)}</Text>
            <Text style={styles.url} onPress={() => Linking.openURL(props.resources[0].url)}>Ir: {props.resources[0].url}</Text>
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
        color: 'blue'
    }    
});    