import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FadeInView from './FadeInView';

export default HomeItem = (props) => {

    options = { year: "numeric", month: "numeric", day: "numeric" };
    
    return (
    <FadeInView style={styles.row} >
        <View style={styles.rightBox}>
            <Text style={styles.campo}>{props.campo}</Text>
                <Text style={styles.value}>- Cantidad: {props.value}  - Actualizado a: {new Date(props["date-update"]).toLocaleDateString('es-ES', options)}</Text>
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
        width: 53,
        height: 81,
    },
    rightBox: {
        flex: 1,
    },
    campo: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    value: {
        fontSize: 14,
        textAlign: 'center',
        color: 'black'
    }
});    