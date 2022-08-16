import { IconButton, makeStyles } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => {
  root: {
    display: 'flex'
  }
});

export const CriteriaForm = () => {
  const classes = useStyles();

  return (
    <div>
      <IconButton>
        <CloseIcon />
      </IconButton >
    </div>
  )
};
