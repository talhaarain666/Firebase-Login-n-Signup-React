import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../config/firebase/firebasemethods";

function HomePg() {

    const params = useParams();
    const location = useLocation();
    

    let usersData = () => {
        if (params.id) {
            getData("users");
        }
    }

    useEffect (() => {
        usersData();
        getData("formdata");
        
        console.log(location)
    }, [])



    return (<>

        {/* {location.state.map((val, i) => {
            return <>

                <h4>{val.name}</h4>
                <h4>{val.email}</h4>
                <h4>{val.address}</h4>
            </>
        })} */}
        <h1>HOME</h1>

    </>)
}

export default HomePg;