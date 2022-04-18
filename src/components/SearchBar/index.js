import { IconButton, InputBase, Paper } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';

function SearchBar(props) {
  const [value, setValue] = React.useState('');
  const classes = useStyles();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.container}>
      <Paper
        component='form'
        elevation={0}
        variant='outlined'
        className={classes.root}
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSearch(value);
        }}
      >
        <InputBase
          className={classes.input}
          placeholder='Search by label'
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleChange}
          size='small'
          value={value}
        />
        {!value && <IconButton
          className={classes.iconButton}
          onClick={() => {
            props.handleSearch(value);
          }}
        >
          <SearchIcon fontSize='small' />
        </IconButton>}
        {value && <IconButton
          className={classes.iconButton}
          onClick={() => {
            setValue('');
            props.handleSearchCancel(value);
          }}
        >
          <ClearIcon fontSize='small' />
        </IconButton>}
      </Paper>
    </div>
  );
}

export default SearchBar
