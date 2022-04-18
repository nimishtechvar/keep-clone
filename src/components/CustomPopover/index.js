import { Popover } from '@material-ui/core';
import React from 'react';

function CustomPopover({ id, open, anchorEl, handleClose, children }) {
  return (
    <>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {children}
      </Popover>
    </>
  );
}

export default CustomPopover;
