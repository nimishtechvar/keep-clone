import React from 'react'
import useStyles from './style';

function NoteContainer({children}) {
    const classes = useStyles();
    return (
        <div className={classes.noteContainer}>
            {children}
        </div>
    )
}

export default NoteContainer
