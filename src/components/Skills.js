import React from 'react';
import { Text, View, Image, StyleSheet, Link  } from '@react-pdf/renderer';

import styles from '../styles/global-style.js';

const Skills = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://i.imgur.com/yEuLVVP.png" />
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