import { Button } from "@mui/material";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import SMGrid from "../../components/SMGrid";
import { Get } from "../../config/apibasemethods";

function Comments() {

    const [info, setInfo] = useState([]);
    const [loader,setLoader] = useState(false);
    const navigate = useNavigate();

    let getData = () => {
        setLoader(true)
        Get('comments')
            .then((res) => {
                setLoader(false);
                setInfo([...res.data])
            })
            .catch((err) => {
                setLoader(false);
                console.log(err)
            })
    }

    useEffect(()=>{
        getData();
    },[])

    let getComment=(id)=>{
        navigate(`/commentsform/${id}`)
    }


    let columns = [
        {
            displayName: 'ID',
            name: '',
            displayField:(e)=>(
                <Button onClick={()=>{getComment(e.id)}} variant="contained">Data</Button>
            )
        },
        {
            displayName: 'Name',
            name: 'name',
            searchItem:true
        },
        {
            displayName: 'Email',
            name: 'email',
            searchItem:true
        },
        {
            displayName: 'Message',
            name: 'body'
        }
    ]


    return (
        <SMGrid Loading={loader} columns={columns} info={info} />
    )

}

export default Comments;