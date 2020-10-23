import React from 'react';
import {
  Container,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body,
} from 'native-base';
import {Image, StyleSheet, View} from 'react-native';

function detailFolder({route}) {
  const resp = route.params.params[0].data;
  console.log();
  return (
    <Container>
      <Content>
        <Card key={resp.id} style={styles.card}>
          <CardItem>
            <Left>
              <Thumbnail source={{uri: `${resp.Poster}`}} />
              <Body>
                <Text>{resp.Director}</Text>
                <Text note>{resp.Production}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody style={styles.carditem}>
            <Image source={{uri: `${resp.Poster}`}} style={styles.image} />
            <View style={styles.view}>
              <Text style={styles.text}>original title</Text>
              <Text style={styles.textTwo}>{resp.Title}</Text>
              <Text style={styles.text}>Genre</Text>
              <Text style={styles.textThree}>{resp.Genre}</Text>
              <Text style={styles.text}>Author</Text>
              <Text style={styles.textFour}>{resp.Director}</Text>
              <Text style={styles.text}>Country</Text>
              <Text style={styles.textFour}>{resp.Country}</Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text>Description</Text>
              <Text style={styles.description}>{resp.Plot}</Text>
            </View>
          </CardItem>
        </Card>
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
    height: 500,
    marginLeft: 20,
    marginRight: 20,
  },
  carditem: {
    backgroundColor: '#fff',
  },
  image: {
    height: 200,
    width: 100,
  },
  view: {
    alignSelf: 'flex-start',
    marginTop: 5,
  },
  description: {
    marginTop: 10,
  },
  textTwo: {
    paddingLeft: 10,
    color: '#333',
    fontSize: 15,
  },
  textThree: {
    paddingLeft: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  textFour: {
    width: 200,
    paddingLeft: 10,
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

export default detailFolder;
