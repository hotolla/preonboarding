import { createMuiTheme } from "@material-ui/core";

const fontSize = 14;
const htmlFontSize = 16;
const coefficient = fontSize / 14;

export const pxToRem = (size: number) => `${(size / htmlFontSize) * coefficient}rem`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000'
    },

    text: {
      secondary: 'grey'
    },

    secondary: {
      main: '#DC143C'
    }
  },

  typography: {
    htmlFontSize,
    fontSize,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    // @ts-ignore
    pxToRem,
    
    h2: {
      fontSize: "2rem"
    }
  },
  
  overrides: {
    MuiAvatar: {
      root: {
        width: 38,
        height: 38
      }
    },
    // MuiInput: {
    //   input: {
    //     "&::placeholder": {
    //       color: "gray"
    //     },
    //   },
    // MuiDivider: {
    //   root: {
    //     color: '#dadada'
    //   }
    // }

  }
});

export const customColors ={
  lightText: '#fafafaf',
  lightGrey: '#dadada',
  blue: 'rgb(0,114,206)',
  grey: '#eeeeee'
};
