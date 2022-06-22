import { useState } from "react";
import TAButton from "../config/components/btn";
import TAInput from "../config/components/inputs";
import { sendData } from "../config/firebase/firebasemethods";

let Form = () => {

    // const navigate = useNavigate();
    const [formObj, setFormObj] = useState();

    let formSubmit = () => {

        sendData(formObj,"formdata").then(() => {
            console.log("Saved Successfully")
        }).catch((err) => {
            console.log(err)
        })
        // navigate(`/`, { state: formObj })
    }

    return <>

        <TAInput onChange={(e) => setFormObj({ ...formObj, name: e.target.value })} label="Name" />
        <TAInput onChange={(e) => setFormObj({ ...formObj, email: e.target.value })} label="Email" />
        <TAInput onChange={(e) => setFormObj({ ...formObj, contact: e.target.value })} label="Contact Number" />
        <TAInput onChange={(e) => setFormObj({ ...formObj, address: e.target.value })} label="Address" />
        <TAButton onClick={formSubmit} label="Submit" />

    </>
}
export default Form;