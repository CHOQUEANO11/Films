import React from 'react';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import {Image, StyleSheet, View, Linking} from 'react-native';
import Photo from '../../assets/images/myphoto.jpeg';

function details() {
  function Linkedin() {
    Linking.openURL(
      'https://www.linkedin.com/in/jos%C3%A9-nilson-silva-dos-santos-b7aaba194/',
    );
  }

  function Github() {
    Linking.openURL('https://github.com/CHOQUEANO11');
  }

  const message =
    'Você iniciou uma conversa com Nilson Silva 💻 📱. Vamos lá ➠➤ ';

  function Zap() {
    Linking.openURL(
      `https://api.whatsapp.com/send?phone=+5591982820280&text=${message}&lang=pt_br`,
    );
  }

  return (
    <Container>
      <Header>
        <Body style={styles.body}>
          <Title>Sobre mim</Title>
        </Body>
        {/* <Right /> */}
      </Header>
      <Content>
        <Card style={styles.card}>
          <CardItem cardBody>
            <Image source={Photo} style={styles.image} />
          </CardItem>
          <View>
            <Text style={styles.text}>José nilson silva dos santos</Text>

            <Text style={styles.text}>37 anos</Text>

            <Text style={styles.text}>
              desenvolvedor de software na Polícia militar do Estado do Pará
            </Text>
          </View>
          <View>
            <Text style={styles.textTwo}>Minhas midias sociais</Text>
          </View>
          <View style={styles.view}>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon
                    style={styles.icon}
                    onPress={Linkedin}
                    name="logo-linkedin"
                  />
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon
                    style={styles.iconGit}
                    onPress={Github}
                    name="logo-github"
                  />
                </Button>
              </Body>
              <Right>
                <Button transparent>
                  <Icon
                    style={styles.iconZap}
                    onPress={Zap}
                    name="logo-whatsapp"
                  />
                </Button>
              </Right>
            </CardItem>
          </View>
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
  image: {
    height: 250,
    flex: 1,
  },
  view: {
    alignContent: 'space-between',
  },
  icon: {
    fontSize: 30,
  },
  iconGit: {
    fontSize: 30,
    marginLeft: 30,
    color: 'black',
  },
  iconZap: {
    fontSize: 30,
    color: 'green',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  textTwo: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
  },
});

export default details;
