import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Checkbox } from '@material-ui/core';

interface noteProps {
    onclickfunc: any,
    noteText: string,
    switchOn: boolean
}

const Note = (props: noteProps) => {
    let deleteOrSelectButton;
    if (props.switchOn) {
        deleteOrSelectButton = <IconButton onClick={props.onclickfunc} edge="end" aria-label="delete" className="deleteIcon">
                                    <DeleteIcon />
                                </IconButton>
        } else {
            deleteOrSelectButton = <IconButton edge="end"> <Checkbox/> </IconButton>   
    }

    return (
        <>
            <ListItem button>
                <ListItemAvatar>
                    <Avatar>
                        <AssignmentIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                primary={props.noteText}
                />
                <ListItemSecondaryAction>
                    {deleteOrSelectButton}                   
                </ListItemSecondaryAction>
            </ListItem>
        </>
    )
}


export default Note
