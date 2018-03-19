import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
  <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{ props.headerTitle }</Text>
  </View>
);

const styles = {
  viewStyle: {
    backgroundColor: '#f2f2f2',
    justifyContent: 'center', // center vertical
    alignItems: 'center', // center horizontal
    height: 60,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;
