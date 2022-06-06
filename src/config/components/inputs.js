import { PropaneSharp } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";

function TAInput(props) {
    const { label, type, required, value, onChange } = props;
    return (<>
        <Box>
            <TextField id="standard-basic" 
            label={label}
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            variant="standard" />
        </Box>

    </>)
}

export default TAInput;