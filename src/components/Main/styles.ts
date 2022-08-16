import { Theme } from "@material-ui/core";

export const styles = ({ spacing, typography: { pxToRem } }: Theme) => ({
  root: {
    overflow: 'auto',
    flexGrow: 1,
    padding: spacing(3),
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: spacing(20)
  },

  allRequest: {
    fontWeight: 700,
    fontSize: 20,
    marginBottom: 1
  },

  formName: {
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 700,
    fontSize: pxToRem(18)
  },

  divider: {
    fontSize: pxToRem(20)
  }
});
