import { Box, makeStyles, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStules = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  preonboarding: {
    fontSize: 16,
  },
  
  arrow: {
    height: 14,
    marginTop: 8
  }
  }));
  
  export const Preonboarding= () => {
    const classes = useStules();

    return (
      <div className={classes.container}>
        <Typography className={classes.preonboarding}>
          Pre-onboarding
        </Typography>
        
        <ExpandMoreIcon className={classes.arrow}/>
      </div>
    );
};