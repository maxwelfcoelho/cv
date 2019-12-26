import { StyleSheet } from '@react-pdf/renderer';

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

export default styles;