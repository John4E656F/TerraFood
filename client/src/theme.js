import { 
  createTheme,
} from '@mui/material';

// A custom theme for this app
const theme = createTheme({
palette: {
  primary: {
    main: '#313131',
  },
  secondary: {
    main: '#19857b',
  },
  error: {
    main: '#1985dc'
  },
},
components: {
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: 'h2',
        h2: 'h2',
        h3: 'h2',
        h4: 'h2',
        h5: 'h2',
        h6: 'h2',
        subtitle1: 'h2',
        subtitle2: 'h2',
        body1: 'span',
        body2: 'span',
      },
    },
  },
},
transitions: {
  duration: {
    shortest: 150,
    shorter: 200,
    short: 250,
    //Basic recommended timing
    standard: 300,
    //used for complex animations
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  },
  easing:  {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
},

});

const darkTheme = createTheme({
palette: {
  mode: 'dark',
},
});

export default theme;
