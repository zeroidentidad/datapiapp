import React from 'react';
import debounce from 'lodash.debounce';
import { TextInput, StyleSheet } from 'react-native';

export default class SearchBar extends React.Component {

    state = {
        searchTerm: '',
    };

    debouncedSearch = debounce(this.props.search, 300);

    handleChange = (searchTerm) => {
        this.setState({ searchTerm }, () => {
            this.debouncedSearch(this.state.searchTerm);
        });
    };

    render() {
        return (
            <TextInput
                placeholder={`Buscar ${this.props.tipoSearch}...`}
                style={styles.input}
                onChangeText={this.handleChange}
            />
        );
    }
}

const styles = StyleSheet.create({
  input: {
      height: 50,
      marginHorizontal: 12,
      fontSize: 18,
      borderColor: 'black',
      borderWidth: 1 
  }  
})