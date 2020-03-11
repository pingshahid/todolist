import React, { useState, Component } from 'react';
import { Text, StyleSheet, View, Button,ActivityIndicator } from 'react-native';
import CustomListview from './src/Components/CustomListview';

export default function App() {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  goForFetch = () => {
    setLoading(true);    
    setResults([]);
    console.log('Fire request');
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson)
        setTimeout(() => {
          setResults(responseJson);
          console.log('request');
           console.log(responseJson);
        }, 2000)

        setLoading(false);
      })
      .catch(error => {
        setErrorMessage('Some thing went wrong')
        setResults([]);
        setLoading(false);
      });

  }

		React.useEffect(() => {
    goForFetch();
    },[]);


  if (results.length == 0) {
    return (
      <View >
        <Text style={styles.header}>Todo List</Text>
        <View style={styles.border}></View>

        <View style={styles.errorView}>
          <Text style={styles.text}>{errorMessage}</Text>
          <Text style={styles.text}>Give it another try</Text>
          <Button onPress={goForFetch} title={'RELOAD'} />
        </View>

        {
          loading == true ? <ActivityIndicator size="large" color="#0000ff" />
          : null

        }


      </View>
    );
  } else {
    return (

      <View style={styles.container}>
        <Text style={styles.header}>Todo List</Text>
        <View style={styles.border}></View>

        <CustomListview
          itemList={results}
        />
      </View>
    );
  }


};

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 20
  }, text: {
    marginTop: 0,
    textAlign: "center",
    fontSize: 20
  },
  border: {
    margin: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  }

});
