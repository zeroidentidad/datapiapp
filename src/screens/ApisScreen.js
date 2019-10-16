import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import ApiItem from '../components/ApiItem';
import SearchBar from '../components/SearchBar';
import Empty from '../utils/Empty';
import fetch from '../data/fetch';

export default class ApisScreen extends React.Component {

    state = {
        api: [],
        apiSearch: [], 
    }

    async componentDidMount() {
        const api = await fetch.fetchApis();
        this.setState({ api });
    }

    searchDB = async (query) => {
        let apiSearch = [];
        if (query) {
            apiSearch = await fetch.fetchApis(query);
        }
        this.setState({ apiSearch });
    }; 

    render() {
        const { navigate } = this.props.navigation;
        const Apis = this.state.apiSearch.length > 0 ? this.state.apiSearch : this.state.api;
        return (
        <View style={styles.main}>
                <Text style={styles.textTitle}>Catálogo APIs activas:</Text>
            <SearchBar search={this.searchDB} tipoSearch="nombre endpoint" />            
            <FlatList
                data={Apis}
                renderItem={({ item }) => <ApiItem {...item} />}
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
