import { useState } from "react";
import TAButton from "../config/components/btn";
import TAInput from "../config/components/inputs";
import { sendData, signUpUser } from "../config/firebase/firebasemethods";

function Signup() {

    const [userObj, setUserObj] = useState({});
    const [loader, setLoader] = useState(false);
  

    let signupUser = () => {

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

        signUpUser(userObj).then((res) => {
            setLoader(false)
            console.log(res);
            sendData(userObj, "users").then(() => {
                console.log("Successfully Saved")
             
            }).catch((err) => {
                console.log(err)
            })
        }).catch((err) => {
            setLoader(false)
            console.log(err);
        })

    }

    return (<>

        <TAInput onChange={(e) => setUserObj({ ...userObj, name: e.target.value })} label="Name" required={true} />
        <TAInput onChange={(e) => setUserObj({ ...userObj, email: e.target.value })} label="Email" required={true} type="email" />
        <TAInput onChange={(e) => setUserObj({ ...userObj, password: e.target.value })} label="Password" required={true} type="password" />
        <TAButton loading={loader} onClick={signupUser} label="Signup" />

    </>)
}

export default Signup;