import React from 'react';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
import ActionButtons from '../ActionButtons';
import TagsInput from '../TagsInput';
import AddLabelSection from '../AddLabelSection';

function Note({
  title,
  content,
  onDelete = false,
  id,
  labels,
  handleSave,
}) {
  const classes = useStyles();
  const date = new Date().toDateString();
  const [editableNote, setEditableNote] = React.useState(false);
  const [data, setData] = React.useState({content: content, title: title, labels: labels});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleLabelDelete = (id) => {
    let newLabelList = data.labels.filter((item, i) => i !== id);
    setData((prevData) => {
      return {
        ...prevData,
        labels: newLabelList,
      };
    });
  }

  const addLabel = (val) => {
    setData({
      ...data,
      labels: [...data.labels, val],
    });
  }

  return (
    <div className={classes.noteContainer}>
      {editableNote && (
        <div className={classes.labelButton}>
          <AddLabelSection addLabel={addLabel} />
        </div>
      )}
      <textarea
        className={classes.title}
        rows=''
        columns=''
        placeholder='Title'
        name='title'
        disabled={!editableNote}
        value={data?.title}
        onChange={handleChange}
      />
      <br />
      <textarea
        className={classes.content}
        rows=''
        columns=''
        placeholder='Content'
        name='content'
        disabled={!editableNote}
        value={data?.content}
        onChange={handleChange}
      />
      {!(data.labels.length === 0) && (
        <TagsInput
          labels={data.labels}
          isEditing={editableNote}
          handleDelete={handleLabelDelete}
        />
      )}
      {!editableNote && (
        <div className={classes.iconContainer}>
          <Typography style={{ marginTop: '20px' }} variant='caption'>
            {date}
          </Typography>
          <div>
            {onDelete && (
              <ActionButtons
                onDelete={onDelete}
                id={id}
                onEdit={() => {
                  setEditableNote(true);
                }}
              />
            )}
          </div>
        </div>
      )}
      {editableNote && (
        <div className={classes.editActions}>
          <Button
            color='primary'
            variant='contained'
            onClick={() => {
              handleSave({ id, ...data });
              setEditableNote(false);
            }}
            className={classes.saveButton}
          >
            Save
          </Button>

          <Button
            onClick={() => {
              setEditableNote(false);
              setData({ content: content, title: title, labels: labels });
            }}
          >
            Cancel
          </Button>
        </div>
      )}
    </div>
  );
}

export default Note;
