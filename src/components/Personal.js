import React from 'react';
import { Text, View, Image, StyleSheet, Link } from '@react-pdf/renderer';

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

const Personal = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://image.flaticon.com/icons/png/512/47/47973.png" />
      <Text style={styles.title}>
        Personal Information
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text>Email: maxwelfcoelho@gmail.com</Text>
      <Text>Phone: 619-633-0789</Text>
      <Text>
        Github: <Link src="https://github.com/maxwelfcoelho">https://github.com/maxwelfcoelho</Link>
      </Text>
      <Text>
        Linkedin: <Link src="https://www.linkedin.com/in/maxwelfcoelho/">https://www.linkedin.com/in/maxwelfcoelho/</Link> 
      </Text>
    </View>
  </View>
);

export default Personal;