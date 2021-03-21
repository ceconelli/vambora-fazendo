import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';

function deleteNote() {
    console.log("deletar");
}

interface noteProps {
    onclickfunc: any
}

const Note = (props: noteProps) => {
    return (
        <>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <AssignmentIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary="Single-line item"
                />
                <ListItemSecondaryAction>
                    <IconButton onClick={props.onclickfunc} edge="end" aria-label="delete" className="deleteIcon">
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}


export default Note
