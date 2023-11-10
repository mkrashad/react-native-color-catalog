import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';

export default function ColorButton({ backgroundColor, onPress = (f) => f }) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(backgroundColor)}
      underlayColor='orange'
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor }]} />
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 30,
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    backgroundColor: 'rgba(255,255, 255, .8)',
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  sample: {
    height: 20,
    borderRadius: 10,
    width: 20,
    backgroundColor: 'white',
  },
});
