import { useState } from "react";
import SMTable from "../components/SMTable";

function Home(){

    const [arr,setArr] = useState([
        {
            name:"Ali",
            age:22,
            City:'Karachi'
        },
        {
            name:"Ahmed",
            age:22,
            City:'Karachi'
        },
        {
            name:"Bilal",
            age:22,
            City:'Karachi'
        },
        {
            name:"Umair",
            age:22,
            City:'Karachi'
        }
    ])

    return(
        <SMTable arr={arr}/>
    )
  
}

export default Home;