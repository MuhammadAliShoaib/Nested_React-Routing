import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Photos() {

    let navigate = useNavigate();

    let api = "https://jsonplaceholder.typicode.com/photos";

    const [data, setData] = useState([]);

    let getData = () => {
        axios.get(api)
            .then((res) => {
                setData([...res.data])
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData();
    }, [])


    let moveTo = (id) =>{
        navigate(`/singlepost/${id}`)
    }
    

    return (
        <div>
            {
                data.map((e,i)=>{
                    return(
                        <div key={i}>
                            <p>{e.title}</p>
                            <img onClick={()=>{moveTo(e.id)}} src={e.thumbnailUrl} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Photos;