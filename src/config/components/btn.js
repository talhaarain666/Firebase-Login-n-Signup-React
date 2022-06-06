import { PropaneSharp } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";

function TAButton (props){
    const {label,onClick,loading,disabled} = props;
    return(<>
    
    <Button disabled={disabled || loading} onClick={onClick} variant="contained">
       {loading && <CircularProgress />} {label}</Button>
    
    </>)
}

export default TAButton;