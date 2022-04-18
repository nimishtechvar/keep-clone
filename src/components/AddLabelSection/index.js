import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import LabelIcon from '@material-ui/icons/Label';
import { Tooltip } from '@material-ui/core';
import CustomPopover from '../CustomPopover';
import CustomTextField from '../CustomTextField';

function AddLabelSection({addLabel}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Tooltip title='Add labels'>
        <IconButton
          size='small'
          onClick={handlePopoverClick}
        >
          <LabelIcon fontSize='inherit' />
        </IconButton>
      </Tooltip>
      <CustomPopover
        open={open}
        handleClose={handlePopoverClose}
        anchorEl={anchorEl}
        id={id}
      >
        <CustomTextField handleSubmit={addLabel} />
      </CustomPopover>
    </>
  );
}

export default AddLabelSection;
