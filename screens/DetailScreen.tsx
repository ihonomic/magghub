import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const DetailScreen = ({route}: {route: any; navigation: any}) => {
  const {image, name, age, email} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>View your data</Text>

      <View style={styles.avatarContainer}>
        <Image
          source={{uri: image}}
          width={150}
          height={150}
          style={[styles.avatar, {}]}
        />
      </View>

      <View style={styles.row}>
        <Text style={[styles.text, {color: 'gray'}]}>FULL NAME</Text>
        <Text style={styles.text}>{name}</Text>
      </View>

      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={[styles.text, {color: 'gray'}]}>EMAIL</Text>
        <Text style={styles.text}>{email}</Text>
      </View>

      <View style={styles.line} />
      <View style={styles.row}>
        <Text style={[styles.text, {color: 'gray'}]}>AGE</Text>
        <Text style={styles.text}>{age}</Text>
      </View>

      <View style={styles.line} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'black', padding: 15},
  text: {
    color: 'white',
    fontWeight: '700',
    marginVertical: 8,
    fontSize: 15,
  },
  avatar: {
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 1,
  },
  avatarContainer: {
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    width: '100%',
    backgroundColor: 'white',
    height: 1,
    marginVertical: 12,
  },
});
