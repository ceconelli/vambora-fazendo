import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Note from './Note'
import { Divider } from '@material-ui/core';
import MountChecker from '../../utils/MountChecker'

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


const NotesGrid = () => {

    const [noteToRemove,setNoteToRemove] = React.useState(-1);
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [notes,setNotes] = React.useState([0, 1, 2, 3].map((value) => <Note noteText={String("note " + value)} key={value} onclickfunc={() => setNoteToRemove(value)} />));
    const isMount = MountChecker();
    
    React.useEffect(() => {
      if (isMount) {
        setNotes(notes.filter((note) => {
          return note.key != noteToRemove
        })) 
      }
    }, [noteToRemove])

    
    return (
        <Grid item xs={12} md={12}>
          <Typography variant="h6" className={classes.title}>
            Your Notes {notes.length}
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
