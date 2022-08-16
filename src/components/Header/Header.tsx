import { AppBar, Avatar, Box, createStyles, Grid, makeStyles, Toolbar, Typography } from "@material-ui/core";
import clsx from 'clsx';
import { Preonboarding } from "./Preonboarding";
import { UserDetails } from "./UserDetails";
import { VersionIndicator } from "./VersionIndicator";
import { Theme } from "@material-ui/core";
const drawerWidth = 240;

const logo =  require('./logo.jpg')

const useStyles = makeStyles((theme: Theme) =>
  createStyles({  
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },

    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },

    logo: {
      height: 38,
      width: 38
    },
    
    text: {
      fontWeight: 700,
      fontSize: 20
    }
  }),
);
export const Header = () => {
  const classes = useStyles();
  
  return (

    <AppBar color="primary" position="static">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
              </Grid>

              <Grid item>
                <Typography className={classes.text}>My Colm</Typography>
                {/* <Logo /> */}
                {/* <img src={logo} alt="Logo" className={classes.logo}/> */}
                <VersionIndicator/>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Preonboarding />
          </Grid>

          <Grid item>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar />
              </Grid>

              <Grid item>
                <UserDetails/>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
