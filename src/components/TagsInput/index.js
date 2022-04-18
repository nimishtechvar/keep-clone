import React from 'react';
import Chip from '@material-ui/core/Chip';
function TagsInput({ labels, handleDelete, isEditing=false, id=null}) {
  return (
    <>
      {labels?.map((item, i) => {
        return (
          <>
            {isEditing ? (
              <Chip
                label={item}
                key={i}
                onDelete={() => {
                  handleDelete(i);
                }}
                style={{ marginLeft: 4 }}
              />
            ) : (
              <Chip label={item} key={i} style={{ marginLeft: 4 }} />
            )}
          </>
        );
      })}
    </>
  );
}

export default TagsInput;
