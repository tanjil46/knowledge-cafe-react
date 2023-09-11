import { useEffect, useState } from "react";
import Blogdata from "./blog_data";


const Blogs = () => {

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
                blog.map(blogdata=><Blogdata key={blog.id} blogdata={blogdata}></Blogdata>)
            }
        </div>
    );
};

export default Blogs;