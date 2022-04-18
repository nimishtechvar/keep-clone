import React from 'react';
import CreateNote from '../../components/CreateNote';
import Note from '../../components/Note';
import Grid from '@material-ui/core/Grid';
import ConfirmDialog from '../../components/ConfirmDialog';
import NoteContainer from '../../layout/NoteContainer';
import SearchBar from '../../components/SearchBar';

const DEFAULT_VALUES = {
  title: '',
  content: '',
  labels: [],
};

function MainPage() {
  const [notesArray, setNotesArray] = React.useState([]);
  const [confirmDialogOpen, setConfirmDialogOpen] = React.useState(false);
  const [selectedNote, setSelectedNote] = React.useState();
  const [labels, setLabels] = React.useState([]);
  const [search, setSearch] = React.useState(false);
  const [searchArray, setSearchArray] = React.useState([]);
  const draggingItem = React.useRef();
  const dragOverItem = React.useRef();

  const addNote = (note) => {
    setNotesArray([...notesArray, { ...note, labels: labels }]);
    setLabels([]);
  };

  const deleteNote = () => {
    let newNoteList = notesArray.filter((item, i) => i !== selectedNote);
    setNotesArray(newNoteList);
    setConfirmDialogOpen(false);
  };

  const onSaveClick = (data) => {
    let newNotesArray = notesArray.filter((item, i) => i !== data.id);
    setNotesArray([...newNotesArray, data]);
  };

  const handleDragStart = (e, pos) => {
    draggingItem.current = pos;
  };

  const handleDragEnter = (e, pos) => {
    dragOverItem.current = pos;
  };

  const handleDragEnd = (e) => {
    console.log(e);
    const notesCopy = [...notesArray];
    const draggedItem = notesCopy[draggingItem.current];
    notesCopy.splice(draggingItem.current, 1);
    notesCopy.splice(dragOverItem.current, 0, draggedItem);

    draggingItem.current = null;
    dragOverItem.current = null;
    setNotesArray(notesCopy);
  };

  const handleConfirmDialogOpen = (id) => {
    setConfirmDialogOpen(true);
    setSelectedNote(id);
  };

  const handleConfirmDialogClose = () => {
    setConfirmDialogOpen(false);
  };

  const handleAddLabel = (value) => {
    setLabels([...labels, value]);
  };

  const handleChipDelete = (val) => {
    let newLabelList = labels.filter((item, i) => i !== val);
    setLabels(newLabelList);
  };

  const handleSearch = (val) => {
    if (!val || val==='') {
      console.log('not found');
      setSearch(false);
    } else {
      setSearch(true);
      let search = notesArray.filter((data) =>
        data.labels.includes(val)
      );
      setSearchArray(search);
    }
  };

  const handleSearchCancel = () => {
    setSearch(false);
  }

  return (
    <div>
      <NoteContainer>
        <CreateNote
          addNote={addNote}
          onSaveClick={onSaveClick}
          defaultValues={DEFAULT_VALUES}
          isEditing={false}
          addLabel={handleAddLabel}
          labels={labels}
          handleChipDelete={handleChipDelete}
        />
      </NoteContainer>
      <SearchBar handleSearch={handleSearch} handleSearchCancel={handleSearchCancel}/>
      {notesArray && !search && (
        <Grid container spacing={3}>
          {notesArray.map((item, i) => {
            return (
              <Grid
                item
                xs={3}
                key={i}
                onDragStart={(e) => handleDragStart(e, i)}
                onDragEnter={(e) => handleDragEnter(e, i)}
                onDragEnd={handleDragEnd}
                draggable
              >
                <Note
                  id={i}
                  title={item.title}
                  content={item.content}
                  labels={item.labels}
                  onDelete={handleConfirmDialogOpen}
                  handleSave={onSaveClick}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      {searchArray && search && (
        <Grid container spacing={3}>
          {searchArray.map((item, i) => {
            return (
              <Grid
                item
                xs={3}
                key={i}
                onDragStart={(e) => handleDragStart(e, i)}
                onDragEnter={(e) => handleDragEnter(e, i)}
                onDragEnd={handleDragEnd}
                draggable
              >
                <Note
                  id={i}
                  title={item.title}
                  content={item.content}
                  labels={item.labels}
                  onDelete={handleConfirmDialogOpen}
                  handleSave={onSaveClick}
                />
              </Grid>
            );
          })}
        </Grid>
      )}
      <ConfirmDialog
        open={confirmDialogOpen}
        handleClose={handleConfirmDialogClose}
        handleConfirm={deleteNote}
      />
    </div>
  );
}

export default MainPage;
