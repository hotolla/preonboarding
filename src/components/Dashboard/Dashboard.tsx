import { Header } from '../Header';
import { SideBar } from '../SideBar';
import { Main } from '../Main';
import { makeStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// @ts-ignore
const useStyles = makeStyles(styles);

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


