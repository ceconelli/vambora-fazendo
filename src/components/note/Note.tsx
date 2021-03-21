import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import SvgIcon from '@material-ui/icons/Folder';
import logo from '../../logo.svg'

const Note = () => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <FolderIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText
            primary="Single-line item"
            />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" className="deleteIcon">
                    <DeleteIcon />
                    {/* <SvgIcon component={logo}/> */}
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}


export default Note