import React from "react";
import { Dialog, DialogActions, DialogTitle, Button } from "@material-ui/core";
import useStyles from "./styles";

function ConfirmDialog({ open, handleClose, handleConfirm }) {
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className={classes.confirmationDialogContainer}>
        <DialogTitle>Delete this note?</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleConfirm} variant="contained" color="secondary">
            Yes
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
}

export default ConfirmDialog;
