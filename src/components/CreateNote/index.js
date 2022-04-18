import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import TagsInput from '../TagsInput';
import AddLabelSection from '../AddLabelSection';

function CreateNote({
  addNote,
  defaultValues,
  isEditing,
  addLabel,
  labels,
  handleChipDelete
}) {
  const classes = useStyles();
  const [expand, setExpand] = React.useState(isEditing);
  const [note, setNote] = React.useState(defaultValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const addClickHandler = (e) => {
    addNote(note);
    setNote({
      title: '',
      content: '',
      labels: [],
    });
    setExpand(false);
  };

  const onClickHandler = () => {
    setExpand(true);
  };

  
  return (
    <div className={classes.noteContainer}>
      <form>
        {expand && (
          <input
            type='text'
            placeholder='Title'
            name='title'
            className={classes.noteInputContainer}
            value={note.title}
            onChange={onChangeHandler}
          />
        )}
        <div className={classes.labelButton}>
          <AddLabelSection addLabel={addLabel} />
        </div>
        <textarea
          className={classes.noteInputContainer}
          rows=''
          columns=''
          placeholder='Your note...'
          name='content'
          value={note.content}
          onChange={onChangeHandler}
          onClick={onClickHandler}
        />
        {!(labels?.length === 0) && (
          <TagsInput
            labels={labels}
            handleDelete={handleChipDelete}
            isEditing={true}
          />
        )}
        <Button
          variant='text'
          className={classes.buttonContainer}
          onClick={addClickHandler}
        >
          <AddIcon fontSize='small' />
        </Button>
      </form>
    </div>
  );
}

export default CreateNote;
