import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Text, Link, View, Image, Document, StyleSheet, Font } from '@react-pdf/renderer';

import Header from './components/Header';
import Personal from './components/Personal';
import Profile from './components/Profile';
import ProgrammingLanguages from './components/ProgrammingLanguages';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

import registerFonts from './config/register-fonts.js';

registerFonts(Font);

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
  }
});

const MyDocument = ({ title }) => (
  <Document title={title}>
    <Page size="A4" style={styles.page}>
      <Header 
        name="Maxwel Coelho"
        role="Javascript Web Developer"
      />
      <Personal />
      <Profile />
      <ProgrammingLanguages />
      <Skills />
      <Languages />
      <Footer />
    </Page>
  </Document>
);

export default MyDocument;