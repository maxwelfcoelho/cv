import React from 'react';
import { Text, View, Image, StyleSheet, Link } from '@react-pdf/renderer';

import styles from '../styles/global-style.js';

const Personal = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://i.imgur.com/492hXso.png" />
      <Text style={styles.title}>
        Personal Information
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text>Email: maxwelfcoelho@gmail.com</Text>
      <Text>Phone: (62) 99399 6162</Text>
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