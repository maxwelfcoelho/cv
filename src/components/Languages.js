import React from 'react';
import { Text, View, Image, StyleSheet, Link  } from '@react-pdf/renderer';

import styles from '../styles/global-style.js';

const Languages = () => (
  <View style={styles.section}>
    <View style={styles.sectionTitle}>
      <Image style={styles.icon} src="https://i.imgur.com/GriV6Kv.jpg" />
      <Text style={styles.title}>
        Languages
      </Text>
    </View>
    <View style={styles.paragraph}>
      <Text>Portuguese - native</Text>
      <Text>English - advanced</Text>
    </View>
  </View>
);

export default Languages;