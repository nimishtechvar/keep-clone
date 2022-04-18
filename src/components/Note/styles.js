import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  noteContainer: {
    background: "#fff",
    borderRadius: "7px",
    boxShadow: "0 2px 5px grey",
    margin: "20px",
    padding: "12px 5px 5px 12px",
  },
  content: {
    fontSize: "16px",
    marginBottom: "10px",
    border: "none",
    outline: "none",
    overflowWrap:'break-word',
    resize: "none",
  },
  title: {
    border: "none",
    outline: "none",
    width:'100%',
    fontSize:'22px',
    overflowWrap:'break-word',
    resize: "none",
    fontWeight: "bold",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  saveButton:{
    margin: '2px'
  },
  editActions:{
    marginTop: '8px',
    display:'flex',
    justifyContent:'flex-end',
  },
  labelButton:{
    position:'absolute',
    marginLeft: '220px',
  }
});

export default useStyles;
