import { Theme } from "@material-ui/core";

const drawerWidth = 240;

export const styles = (theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },

  drawerPaper: {
    position: 'absolute'
  },

  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(6) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8) + 1,
    },
  },

  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(1, 1.25),
  },
});
