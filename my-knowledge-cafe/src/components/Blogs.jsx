import { useEffect, useState } from "react";
import Blogdata from "./blog_data";


const Blogs = ({btnHandler,readingTimeHandler}) => {

  const [blog,setBlog]=useState([])

  useEffect(()=>{

   fetch('blogs.json')
   .then(res=>res.json())
   .then(data=>setBlog(data));


},[]);

 return (
        <div>
            <p>Lenth:{blog.length}</p>
            {
                blog.map(blogdata=><Blogdata readingTimeHandler={readingTimeHandler} btnHandler={btnHandler} key={blog.id} blogdata={blogdata}></Blogdata>)
            }
        </div>
    );
};

export default Blogs;