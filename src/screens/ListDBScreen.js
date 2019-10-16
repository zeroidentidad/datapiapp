import React from 'react';
import { Text, View, FlatList } from 'react-native';
import DBItem from '../components/DBItem';
import houses from '../data/houses';
import Empty from '../utils/Empty';

const MOCK_DATA = houses;

export default ListDBScreen = () => {
    return (
        <FlatList
            data={MOCK_DATA}
            renderItem={({ item }) => <DBItem {...item} />}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={Empty}
        />
    );
}