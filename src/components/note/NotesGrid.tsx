import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Note from './Note'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }),
);

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}



const NotesGrid = () => {
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    const [notes,setNotes] = React.useState(generate(<><Note /><Divider /></>,));

    return (
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Your Notes
          </Typography>
          <div className={classes.demo}>
            <List dense={dense}>
              <Divider />
              {notes}
            </List>
          </div>
        </Grid>
    )
}


export default NotesGrid
