import React from 'react';
import { Text, View, Image, StyleSheet, Link  } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  icon: {
    width: '20',
    marginRight: '5px'
  },
  section: {
    padding: '0 20px',
  },
  sectionTitle: {
    margin: '20px 0 5px 0',
    display: 'flex',
    flexDirection: 'row'
  },
  title: {
    fontWeight: 'bold',
    fontFamily: 'RobotoBold'

  },
  paragraph: {
    marginLeft: '10px',
    fontFamily: 'RobotoThin',
    fontSize: 13
  }
});

const Profile = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1024px-User_font_awesome.svg.png" />
      <Text style={styles.title}>
      Profile
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text>Junior Web developer really passionate about coding.
      I'm specializing in Front end web development, but I like all fields 
      of Programming and Computer science. I'm open to learn new fields and programming languages.
    </Text>
    </View>
  </View>
);

export default Profile;