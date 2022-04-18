import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    justifyContent:'center',
  },
  root: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
    width: '20%',
    marginTop: 5,
    border: '1px solid #f5ba13'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default useStyles;