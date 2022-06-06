import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../config/firebase/firebasemethods";

function HomePg (){
  
const params = useParams();

useEffect(()=>{
    if(params.id){
        getData("users");
    }
},[])

    return(<>
    
   <h1>HOME</h1>
    
    </>)
}

export default HomePg;