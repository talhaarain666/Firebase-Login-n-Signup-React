import { PropaneSharp } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { deleteMethod, insertMethod, selectMethod, updateMethod } from "../config/firebase/firebasemethods";

function FourChk() {

    const [uname, setUName] = useState("");
    const [rollNum, setRollNum] = useState("");
    const [sect, setSection] = useState("");

    return <>

        <Box sx={{marginY:"1%"}}>
            <TextField onChange={(e) => setUName(e.target.value)} id="nameOfUser" label="User Name" InputLabelProps={{
                shrink: true,
            }} variant="standard" />
        </Box>
        <Box sx={{marginY:"1%"}}>
            <TextField onChange={(e) => setRollNum(e.target.value)} id="rollNumOfUser" label="Roll Number" InputLabelProps={{
                shrink: true,
            }} variant="standard" />
        </Box>
        <Box sx={{marginY:"1%"}}>
            <TextField onChange={(e) => setSection(e.target.value)} id="sectionOfUser" label="Section" InputLabelProps={{
                shrink: true,
            }} variant="standard" />
        </Box>
        
        <Box >

            <Button sx={{margin:"1%"}} onClick={() => insertMethod(uname, rollNum, sect)} variant="contained">Insert</Button>
            <Button sx={{margin:"1%"}} onClick={() => selectMethod(rollNum)} variant="contained">Select</Button>
            <Button sx={{margin:"1%"}} onClick={() => updateMethod(uname, rollNum, sect)} variant="contained">Update</Button>
            <Button sx={{margin:"1%"}} onClick={() => deleteMethod(rollNum)} variant="contained">Delete</Button>

        </Box>

    </>
}
export default FourChk;