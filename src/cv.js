import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';

import MyDocument from './MyDocument.js';

const App = () => (
  <PDFViewer>
    <MyDocument 
      title="CV"
    />
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));