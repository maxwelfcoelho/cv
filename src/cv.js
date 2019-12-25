import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, Link, View, Image, Document, StyleSheet, Font } from '@react-pdf/renderer';

import Header from './components/Header';
import Personal from './components/Personal';
import Profile from './components/Profile';
import ProgrammingLanguages from './components/ProgrammingLanguages';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

import RobotoThin from './fonts/Roboto-Thin.ttf';
import RobotoBold from './fonts/Roboto-Bold.ttf';

Font.register({ 
  family: 'RobotoThin',
  src: RobotoThin
});

Font.register({ 
  family: 'RobotoBold',
  src: RobotoBold
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
  },
  icon: {
    width: '20',
    marginRight: '5px'
  },
  image: {
    width: '50px',
    height: '50px',
  },
  name: {
    color: '#212121',
    fontWeight: 'bold'  
  },
  role: {
    color: '#424242'
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
  }
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <Personal />
      <Profile />
      <ProgrammingLanguages />
      <Skills />
      <Languages />
      <Footer />
    </Page>
  </Document>
);

const App = () => (
  <PDFViewer>
    <MyDocument />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));