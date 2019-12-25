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

const ProgrammingLanguages = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://cdn3.iconfinder.com/data/icons/online-marketing-vol-1/72/24-512.png" />
      <Text style={styles.title}>
        Programming Languages
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text>Javascript</Text>
      <Text>Python</Text>
    </View>
  </View>
);

export default ProgrammingLanguages;