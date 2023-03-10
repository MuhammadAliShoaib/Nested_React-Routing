import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetById } from "../config/apibasemethods";

function CommentsForm() {
    const params = useParams();
    const [commentsData, setCommentsData] = useState({});

    let getCommentsInfo = () => {
        GetById('comments', params.id)
            .then((res) => {
                setCommentsData({ ...res.data })
                
            })
            .catch((err) => {
                console.log(err)
            })
    }


    console.log(commentsData)
    useEffect(() => {
        getCommentsInfo()
    }, [])


    return (
        <div>
            <h1>{commentsData.id}</h1>
            <h1>{commentsData.email}</h1>
        </div>
    )


}

export default CommentsForm;