import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import RNAnimated from 'react-native-animated-component';

const WelcomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://source.unsplash.com/random/?social,dark',
        }}
        resizeMode="cover">
        <Image
          source={{
            uri: 'https://magghub.com/assets/images/MaggHub-Logo-Tall.png',
          }}
          width={150}
          height={150}
          style={[styles.avatar, {}]}
          resizeMode="contain"
        />

        <Text style={styles.text}>Magghub Assessment by Ihon Oseghale</Text>

        <RNAnimated appearFrom="right" animationDuration={1500}>
          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={styles.btn}>
            <Text style={styles.text}>Welcome</Text>
          </TouchableOpacity>
        </RNAnimated>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    //   position: "absolute",
    //   bottom: 20,
    width: 300,
    height: 50,
    backgroundColor: '#4f3d6b',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 8,
    fontSize: 15,
  },
  avatar: {
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
    marginVertical: 50,
  },
});
