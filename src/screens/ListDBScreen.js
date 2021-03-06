import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import DBItem from '../components/DBItem';
import SearchBar from '../components/SearchBar';
import Empty from '../utils/Empty';
import fetch from '../data/fetch';

export default class ListDBScreen extends React.Component {

    state = {
        basedatos: [],
        basedatosSearch: [], 
    }

    async componentDidMount() {
        const basedatos = await fetch.fetchDBs();
        this.setState({ basedatos });
    }

    searchDB = async (query) => {
        let basedatosSearch = [];
        if (query) {
            basedatosSearch = await fetch.fetchDBs(query);
        }
        this.setState({ basedatosSearch });
    }; 

    render() {
        const { navigate } = this.props.navigation;
        const dbList = this.state.basedatosSearch.length > 0 ? this.state.basedatosSearch : this.state.basedatos;
        return (
        <View style={styles.main}>
            <Text style={styles.textTitle}>Bases de datos publicadas:</Text>
            <SearchBar search={this.searchDB} tipoSearch="organización" />            
            <FlatList
                data={dbList}
                renderItem={({ item }) => <DBItem {...item} />}
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
