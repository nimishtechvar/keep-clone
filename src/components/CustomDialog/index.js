import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import useStyles from "./styles";

function CustomDialog(props) {
  const { open, handleClose, content } = props;
  const classes = useStyles();
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      classes={{
        paper: classes.dialog,
      }}
    >
      <DialogContent className={classes.dialogContainer}>
        {content}
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
