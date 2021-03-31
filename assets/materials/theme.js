import { DefaultTheme } from 'react-native-paper';
import colors from './colors'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.blue,
        background: '#fff'
    },
};
export default theme;
