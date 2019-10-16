import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import PackItem from '../components/PackItem';
import SearchBar from '../components/SearchBar';
import Empty from '../utils/Empty';
import fetch from '../data/fetch';

export default class PacksScreen extends React.Component {

    state = {
        paquete: [],
        paqueteSearch: [], 
    }

    async componentDidMount() {
        const paquete = await fetch.fetchPaquetes();
        console.log(paquete);
        this.setState({ paquete });
    }

    searchPack = async (query) => {
        let paqueteSearch = [];
        if (query) {
            paqueteSearch = await fetch.fetchPaquetes(query);
        }
        this.setState({ paqueteSearch });
    }; 

    render() {
        const { navigate } = this.props.navigation;
        const paquetes = this.state.paqueteSearch.length > 0 ? this.state.paqueteSearch : this.state.paquete;
        return (
        <View style={styles.main}>
            <Text style={styles.textTitle}>Paquetes de datos:</Text>
            <SearchBar search={this.searchPack} tipoSearch="por frase (ej. 'BUSQUEDA')" />            
            <FlatList
                data={paquetes}
                renderItem={({ item }) => <PackItem {...item} />}
                keyExtractor={(item, index) => index.toString()}
                ListEmptyComponent={Empty}
            />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    main: {
        flex: 1,
        marginTop: 4
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000000',
        alignSelf: 'center'
    }    
});
