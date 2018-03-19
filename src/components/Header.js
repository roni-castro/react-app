import React from 'react';
import { View, Text } from 'react-native';

const Header = () => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>Albums</Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#FF0000',
    justifyContent: 'center', // center vertical
    alignItems: 'center', // center horizontal
    height: 64,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
