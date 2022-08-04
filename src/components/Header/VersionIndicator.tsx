import { makeStyles, Theme, Typography } from "@material-ui/core";

const useStules = makeStyles(({ palette, typography: { pxToRem } }: Theme) => ({
  text: {
    color: palette.secondary.main,
    fontSize: pxToRem(10),
    textAlign: 'right'
  }
}));

export const VersionIndicator = () => {
  const classes = useStules();

  return (
    <Typography className={classes.text}>1.0.0. LOCAL</Typography>
  );
};