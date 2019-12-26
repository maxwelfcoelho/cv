import React from 'react';
import { Text, View, Image, StyleSheet,  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '20px',
    height: '70px',
  },
  headerDescription: {
    margin: '5px 0 0 20px'
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '5'
  },
  name: {
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'RobotoBold'
  },
  role: {
    color: '#424242',
    fontSize: 13
  },
});

const Header = ({ name, role }) => (
  <View style={styles.header}>
    <Image style={styles.image} src="https://i.imgur.com/BeIw4Wo.jpg" />
    <View style={styles.headerDescription}>
      <Text style={styles.name}>{ name }</Text>
      <Text style={styles.role}>{ role }</Text>
    </View>
  </View>
);

export default Header;