import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { IconButton } from "@material-ui/core";

function ActionButtons({onDelete, onEdit, id}) {
  return (
    <>
      <IconButton
        color='secondary'
        onClick={() => {
          onDelete(id);
        }}
      >
        <DeleteIcon fontStyle="small" />
      </IconButton>
      <IconButton color='primary' onClick={()=>{onEdit(id)}}> 
        <EditIcon fontStyle="small" />
      </IconButton>
    </>
  );
}

export default ActionButtons;
