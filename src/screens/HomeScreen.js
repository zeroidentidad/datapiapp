import React from 'react';
import { StyleSheet, View, Image, TouchableHighlight, FlatList, Text } from 'react-native';
import HomeItem from '../components/HomeItem';
import Empty from '../utils/Empty';
import fetch from '../data/fetch';

export default class HomeScreen extends React.Component {

  state = {
      indicadores: [],
    } 

  async componentDidMount() {
    const indicadores = await fetch.fetchHome();
    this.setState({ indicadores });
  }   

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Indicadores generales:</Text>
        <TouchableHighlight style={styles.topBox} >
          <Image
            style={styles.homeBanner}
            source={require('../assets/houses.png')}
          />
        </TouchableHighlight>
        <View style={styles.bottomBox}>
          <FlatList
            data={this.state.indicadores}
            renderItem={({ item }) => <HomeItem {...item} />}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={Empty}
          />
        </View>     
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topBox: {
    flex: 1,
    backgroundColor: '#C0C0C0'
  },
  bottomBox: {
    flex: 2,
    backgroundColor: '#fff'
  },
  homeBanner: {
    bottom: 0,
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    alignSelf: 'center'
  }
});