import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import OrgItem from '../components/OrgItem';
import SearchBar from '../components/SearchBar';
import Empty from '../utils/Empty';
import fetch from '../data/fetch';

export default class OrgsScreen extends React.Component {

    state = {
        org: [],
        orgSearch: [], 
    }

    async componentDidMount() {
        const org = await fetch.fetchOrgs();
        this.setState({ org });
    }

    searchOrg = async (query) => {
        let orgSearch = [];
        if (query) {
            orgSearch = await fetch.fetchOrgs(query);
        }
        this.setState({ orgSearch });
    }; 

    render() {
        const { navigate } = this.props.navigation;
        const orgs = this.state.orgSearch.length > 0 ? this.state.orgSearch : this.state.org;
        return (
        <View style={styles.main}>
            <Text style={styles.textTitle}>Organizaciones publicadoras:</Text>
                <SearchBar search={this.searchOrg} tipoSearch="tipo (ej. autonoma, federal, estatal o municipal)" />            
            <FlatList
                data={orgs}
                renderItem={({ item }) => <OrgItem {...item} />}
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
