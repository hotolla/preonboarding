import { makeStyles, createStyles } from '@material-ui/core';
import { Header } from '../Header';
import { SideBar } from '../SideBar';
import { Main } from '../Main';

const useStyles = makeStyles(() => 
  createStyles({
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
  })
);

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      
      <div className={classes.content}>
        <SideBar />
        <Main />
      </div>
    </div>
  );
};


