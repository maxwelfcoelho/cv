import React from 'react';
import { Text, View, Image, StyleSheet, Link  } from '@react-pdf/renderer';

import styles from '../styles/global-style.js';

const Profile = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://i.imgur.com/3a3tlJP.png" />
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