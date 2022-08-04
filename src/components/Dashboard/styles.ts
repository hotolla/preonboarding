import { Theme } from "@material-ui/core";

const drawerWidth = 240;

export const styles = () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  
  content: {
    position: 'relative',
    display: 'flex',
    flexGrow: 1,
    overflow: 'auto'
  }
});
