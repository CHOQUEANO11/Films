/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import axios from 'axios';

import {
  Container,
  Header,
  Left,
  Body,
  Button,
  Title,
  Card,
  CardItem,
  Thumbnail,
  Content,
} from 'native-base';

function folder({navigation}) {
  const [dadosRambo, setDadosRambo] = useState([]);
  const [dadosHulk, setDadosHulk] = useState([]);
  const [dadosThor, setDadosThor] = useState([]);

  function rambo() {
    axios
      .get('https://www.omdbapi.com/?t=rambo&apikey=832c1eb6')
      .then((res) => {
        let ramboDados = [];
        ramboDados.push({data: res.data});
        setDadosRambo(ramboDados);
      });
  }

  function swat() {
    axios.get('https://www.omdbapi.com/?t=thor&apikey=832c1eb6').then((res) => {
      let swatDados = [];
      swatDados.push({data: res.data});
      setDadosThor(swatDados);
    });
  }

  function hulk() {
    axios.get('https://www.omdbapi.com/?t=hulk&apikey=832c1eb6').then((res) => {
      let hulkDados = [];
      hulkDados.push({data: res.data});
      setDadosHulk(hulkDados);
    });
  }

  useEffect(() => {
    rambo();
    swat();
    hulk();
  }, []);

  return (
    <Container>
      <Header>
        <Body style={styles.body}>
          <Title>Lançamentos</Title>
        </Body>
      </Header>
      <Content>
        <ScrollView>
          {dadosRambo.map((item) => {
            return (
              <Card key={item.imdbID} style={styles.card}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: `${item.data.Poster}`}} />
                    <Body>
                      <Text>{item.data.Director}</Text>
                      <Text note>{item.data.Production}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                    source={{uri: `${item.data.Poster}`}}
                    style={styles.image}
                  />
                  <View style={styles.view}>
                    <Text style={styles.textTwo}>{item.data.Title}</Text>
                    <Text style={styles.textThree}>{item.data.Genre}</Text>
                    <Text style={styles.textThree}>
                      launch: {item.data.Year}
                    </Text>
                    <Text style={styles.textThree}>
                      voting: {item.data.Ratings[2].Value}
                    </Text>
                    <Button
                      transparent
                      onPress={() =>
                        navigation.navigate('detalhe do filme', {
                          params: dadosRambo,
                        })
                      }
                      style={styles.textFour}>
                      <Text style={styles.textButton}>Details</Text>
                    </Button>
                  </View>
                </CardItem>
              </Card>
            );
          })}
          {dadosThor.map((item) => {
            return (
              <Card key={item.imdbID} style={styles.card}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: `${item.data.Poster}`}} />
                    <Body>
                      <Text>{item.data.Director}</Text>
                      <Text note>{item.data.Production}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                    source={{uri: `${item.data.Poster}`}}
                    style={styles.image}
                  />
                  <View style={styles.view}>
                    <Text style={styles.textTwo}>{item.data.Title}</Text>
                    <Text style={styles.textThree}>{item.data.Genre}</Text>
                    <Text style={styles.textThree}>
                      launch: {item.data.Year}
                    </Text>
                    <Text style={styles.textThree}>
                      voting: {item.data.Ratings[2].Value}
                    </Text>
                    <Button
                      transparent
                      onPress={() =>
                        navigation.navigate('detalhe do filme', {
                          params: dadosThor,
                        })
                      }
                      style={styles.textFour}>
                      <Text style={styles.textButton}>Details</Text>
                    </Button>
                  </View>
                </CardItem>
              </Card>
            );
          })}
          {dadosHulk.map((item) => {
            return (
              <Card key={item.imdbID} style={styles.card}>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: `${item.data.Poster}`}} />
                    <Body>
                      <Text>{item.data.Director}</Text>
                      <Text note>{item.data.Production}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody style={styles.cardItem}>
                  <Image
                    source={{uri: `${item.data.Poster}`}}
                    style={styles.image}
                  />
                  <View style={styles.view}>
                    <Text style={styles.textTwo}>{item.data.Title}</Text>
                    <Text style={styles.textThree}>{item.data.Genre}</Text>
                    <Text style={styles.textThree}>
                      launch: {item.data.Year}
                    </Text>
                    <Text style={styles.textThree}>
                      voting: {item.data.Ratings[2].Value}
                    </Text>
                    <Button
                      transparent
                      onPress={() =>
                        navigation.navigate('detalhe do filme', {
                          params: dadosHulk,
                        })
                      }
                      style={styles.textFour}>
                      <Text style={styles.textButton}>Details</Text>
                    </Button>
                  </View>
                </CardItem>
              </Card>
            );
          })}
        </ScrollView>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    height: 300,
    marginBottom: 90,
    marginLeft: 10,
    marginRight: 10,
  },
  cardRambo: {
    height: 300,
    marginBottom: 90,
  },
  cardItem: {
    backgroundColor: '#f1f3f6',
  },
  image: {
    height: 250,
    width: 150,
  },
  view: {
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  textButton: {
    marginLeft: 7,
    color: 'orange',
    fontSize: 20,
  },
  textTwo: {
    paddingLeft: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
    fontSize: 20,
  },
  textThree: {
    paddingLeft: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
    marginTop: 10,
    width: 120,
  },
  textFour: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
    // borderWidth: 1,
    borderColor: '#7159c1',
    borderRadius: 10,
    paddingLeft: 20,
    width: 100,
    marginLeft: 10,
  },
});

export default folder;
