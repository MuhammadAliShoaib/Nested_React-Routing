import { useParams } from "react-router-dom";

function SinglePost(){
    let params = useParams();

    return(
        <p>{params.id}</p>
    )
}

export default SinglePost;