import React from 'react';
import { Text, View, Image, StyleSheet, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  footer: {
    marginTop: '40px'
  },
  copyright: {
    textAlign: 'center',
    fontSize: 8
  }
});

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.copyright}>
      This CV was created by <Link src="https://github.com/maxwelfcoelho">Maxwel Coelho</Link> Using <Link src="https://react-pdf.org/">React-pdf</Link>
    </Text>
  </View>
);

export default Footer;