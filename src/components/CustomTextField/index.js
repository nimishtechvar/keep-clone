import React from 'react';
import TextField from '@material-ui/core/TextField'
import useStyles from './styles';

function CustomTextField({handleSubmit}) {
  const classes = useStyles();
  const [values, setValues] = React.useState();

  const submitText = (event) => {
    event.preventDefault();
    setValues('');
    handleSubmit(values);
  }

  const handleChange = (event) => {
    setValues(event.target.value)
  }

  return (
    <>
      <form onSubmit={submitText} noValidate autoComplete="off" className={classes.textField} onChange={handleChange}>
        <TextField label="label" value={values}/>
      </form>
    </>
  )
}

export default CustomTextField
