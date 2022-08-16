import { Button, CircularProgress, Divider, IconButton, makeStyles, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from "@material-ui/core";
import FilterListIcon from '@material-ui/icons/FilterList';
import AddIcon from '@material-ui/icons/Add';
import { styles } from './styles';
// @ts-ignore
const useStyles = makeStyles(styles);

export const Main = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div>
          <Typography variant="h2">All Requests</Typography>
          <Typography>Business Area:</Typography>
        </div>

        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Create New Request
        </Button>
      </div>

      <TextField
        name="name"
        placeholder="Search..."
        variant="outlined"
      />
      
      <IconButton color="primary">
        <FilterListIcon />
      </IconButton>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Status</TableCell>
            <TableCell width={420}>Form Type</TableCell>
            <TableCell>Created</TableCell>
            <TableCell>Last Updated</TableCell>
            <TableCell>Relationship</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>

        </TableBody>
      </Table>
      <Divider style={{ height: 4 }}/>
      <CircularProgress
        size={44}
        style={{ marginLeft: '50%', marginTop: 14, marginBottom: 18 }}
        />

      <Typography align="center">No requests to display.</Typography>
    </div>
  );
};
