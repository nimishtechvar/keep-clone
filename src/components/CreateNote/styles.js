import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    
    noteInputContainer: {
      width: "100%",
      padding: "4px",
      border: "none",
      outline: "none",
      fontSize: "20px",
      resize: "none",
    },
    buttonContainer: {
      position: "absolute",
      right: "18px",
      bottom: "-18px",
      background: "#f5ba13",
      color: "#fff",
      border: "none",
      borderRadius: "10%",
      width: "36px",
      height: "36px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
      outline: "none",
      "&:hover": {
        color: "#000",
        backgroundColor: "grey",
      },
    },
    labelButton:{
      position:'absolute',
      right: 20
    }
  });

  export default useStyles;