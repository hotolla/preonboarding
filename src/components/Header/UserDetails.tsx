import { makeStyles, Theme, Typography } from "@material-ui/core";

const useStules = makeStyles(({ typography: { pxToRem } }: Theme) => ({
  root: {
    fontSize: pxToRem(14),
    textTransform: 'uppercase'
  }
}));
  
export const UserDetails = () => {
  const classes = useStules();

  return (
    <Typography className={classes.root}>
      User name
    </Typography>
  );
};