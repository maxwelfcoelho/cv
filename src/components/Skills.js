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

const Skills = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="http://cdn.onlinewebfonts.com/svg/img_513312.png" />
      <Text style={styles.title}>
        Skills
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text>Algorithms</Text>
      <Text>Data Structures</Text>
      <Text>HTML</Text>
      <Text>CSS</Text>
      <Text>React</Text>
      <Text>Node</Text>
      <Text>Git</Text>
      <Text>SQL</Text>
      <Text>No SQL</Text>
      <Text>NPM-Yarn</Text>
    </View>
  </View>
);

export default Skills;