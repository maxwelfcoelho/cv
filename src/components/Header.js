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

const Header = () => (
  <View style={styles.header}>
    <Image style={styles.image} src="https://scontent.fgyn2-1.fna.fbcdn.net/v/t1.0-9/p960x960/41770554_525884281180748_1067875285220720640_o.jpg?_nc_cat=103&_nc_ohc=P5liZoFv5kMAQk-KvbWYd54T7OL5CR4iOzKffinKoiAphseadNVu3O1qA&_nc_ht=scontent.fgyn2-1.fna&oh=9063ed2ecf960d10f2705575189c95e2&oe=5E70C622" />
    <View style={styles.headerDescription}>
      <Text style={styles.name}>Maxwel Coelho</Text>
      <Text style={styles.role}>Javascript Web Developer</Text>
    </View>
  </View>
);

export default Header;