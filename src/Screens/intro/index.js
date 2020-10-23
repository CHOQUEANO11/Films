import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

import logo from '../../assets/images/image.jpg';

function intro({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.image}>
        <Text style={styles.textfour}>AM4</Text>
        <Text style={styles.textTwo}>Viva o novo</Text>
        <Text style={styles.textThree}>Clique na seta ou navegue à baixo</Text>
        <Animatable.Text
          onPress={() => navigation.navigate('Nossa coleção')}
          animation="rubberBand"
          easing="ease-out"
          iterationCount="infinite"
          style={styles.animatable}>
          {' '}
          ⇛
        </Animatable.Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },
  textTwo: {
    color: '#ed4d46',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  textfour: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textThree: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  animatable: {
    textAlign: 'center',
    fontSize: 150,
    color: 'white',
  },
});

export default intro;
