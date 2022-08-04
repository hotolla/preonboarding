import { useState } from "react";
import clsx from 'clsx';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import { styles } from './styles';

// @ts-ignore
const useStyles = makeStyles(styles);
  
export const SideBar = () => {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);

  const toggleDrawer = () => {
    setOpen((open) => !open);
  };

  return (
    <Drawer
      open={open}
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx(classes.drawerPaper, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={toggleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />

      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <ListItemText primary="My Pending Request" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <PlaylistAddCheckIcon />
          </ListItemIcon>
          <ListItemText primary="Ready for Approval" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
          <PeopleOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="All Requests" />
        </ListItem>
      </List>
    </Drawer>
  );
};