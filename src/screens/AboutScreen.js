import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default AboutScreen = () => {
    return (
      <View style={styles.about}>
        <Text style={styles.title}>Sobre DatApiApp:</Text>
        <Text style={styles.text}>{
          `Esta app la realice como practica de solución en desarrollo móvil. Trata sobre el acceso y consulta a datos abiertos del gobierno mexicano usando la api de la plataforma de registros de información pública en organizaciones federales, estatales, municipales y autónomas.\n\n\n\n- Esta app y su código queda de acceso libre para quien desee usarlo.
          `}
        </Text>
      </View>
    );
}
const styles = StyleSheet.create({
  about: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18
  },
  text: {
    textAlign: 'justify',
    padding: 8,
    color: 'black',
    fontSize: 16
  }  
});