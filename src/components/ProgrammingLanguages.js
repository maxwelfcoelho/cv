import React from 'react';
import { Text, View, Image, StyleSheet, Link  } from '@react-pdf/renderer';

import styles from '../styles/global-style.js';

const ProgrammingLanguages = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://i.imgur.com/pyGfCec.png" />
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