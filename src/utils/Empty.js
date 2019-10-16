import React from 'react';
import {Text} from 'react-native';

const Empty = (props) => {
    return (
        <Text
        style={{
            color: 'red', alignSelf: 'center',
            paddingTop: '50%', fontWeight: 'bold',
            fontSize: 16, textAlign: 'center' 
        }}
        >
        {`Cargando datos...\nrevisar conexión y cargar.`}
        </Text>
    )
}

export default Empty
