import { BrowserRouter, Routes,Link,Route } from "react-router-dom";
import Comments from "../screens/dashboardscreens/comments";
import CommentsForm from "../screens/commentsform";
import Dashboard from "../screens/dashboard";
import Home from "../screens/home";
import Photos from "../screens/photos";
import SinglePost from "../screens/singlepost";

function Approuter() {
    return (


        <BrowserRouter>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/photos">Photos</Link>
                <Link to="/comments">Comments</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>

            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="dashboard/*" element={<Dashboard/>}/>
                <Route path="commentsform/:id" element={<CommentsForm />} />
                <Route path="photos" element={<Photos />} />
                <Route path="comments" element={<Comments />} />
                <Route path="singlepost/:id" element={<SinglePost/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter;