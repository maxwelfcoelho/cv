import RobotoThin from '../fonts/Roboto-Thin.ttf';
import RobotoBold from '../fonts/Roboto-Bold.ttf';

function registerFonts(font) {
  font.register({ 
    family: 'RobotoThin',
    src: RobotoThin
  });

  font.register({ 
    family: 'RobotoBold',
    src: RobotoBold 
  });
}

export default registerFonts;