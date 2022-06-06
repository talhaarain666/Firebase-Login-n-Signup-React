import { useState } from "react";
import TAButton from "../config/components/btn";
import TAInput from "../config/components/inputs";
import { Typography } from "@mui/material";
import { logInUser } from "../config/firebase/firebasemethods";
import { useNavigate } from "react-router-dom";

function Login() {
    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

    let loginUser = () => {

        if (!userObj.email) {
            alert("Email is Required");
            return;
        }
        if (!userObj.password || userObj.password.length < 6) {
            alert("Password is Required and must be greater than 6 characters");
            return;
        }
        setLoader(true)
        console.log(userObj)

        logInUser(userObj).then((res) => {
            setLoader(false)
            console.log("Logged in Successfully");
            navigate(`/${res.user.uid}`)
        }).catch((err) => {
            setLoader(false)
            console.log(err);
        })
    }
    return (<>

        <Typography variant="h3">LOGIN</Typography>
        <TAInput onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label="Email" required={true} type="email" />
        <TAInput onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} label="Password" required={true} type="password" />
        <TAButton loading={loader} onClick={loginUser} label="Login" />

    </>)

}
export default Login;