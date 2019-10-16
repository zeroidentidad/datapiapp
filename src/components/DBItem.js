import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FadeInView from './FadeInView';

export default HomeItem = (props) => {
    return (
    <FadeInView style={styles.row} >
        <Image
            source={require('../assets/database_ic.png')}
            style={styles.thumbnail} />
        <View style={styles.rightBox}>
            <Text style={styles.fact}>{props.fact}</Text>
            <Text style={styles.organization}>{props.organization}</Text>
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
    fact: {
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    organization: {
        textAlign: 'center',
        fontSize: 14,
    }
});    