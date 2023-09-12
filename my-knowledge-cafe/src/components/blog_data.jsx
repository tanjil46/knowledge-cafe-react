 
import { FaBookmark } from 'react-icons/fa';
 import PropTypes from 'prop-types';
 
 export default function Blogdata( { blogdata,btnHandler,readingTimeHandler }){

console.log(blogdata);


const{id,title,cover,author,author_img,reading_time,posted_date,hashtags}=blogdata;




return(
    <div className="">
        <img className='w-[400px] h-[200px]' src={cover} alt={`cover picture if tite ${title}`}></img>
      <p className='text-3xl'>{title}</p>


      <div className="flex justify-between">
        <div className="flex gap-3">
            <img className='w-[50px]' src={author_img}></img>
            <div className="space-y-2">
                <p className='font-bold text-xl'>{author}</p>
                <h1>{posted_date}</h1>
            </div>

        </div>

        <div className="">
         <p>{reading_time} min read  <button onClick={()=>btnHandler(blogdata)} className='text-xl text-red-400'><FaBookmark></FaBookmark></button></p>
        </div>
    
      </div>
      
        <p>
            {
                hashtags.map((hash,idx)=> <span key={idx}><a href=''>#{hash}</a></span>)
                  
         }

        </p>

        <button onClick={()=>readingTimeHandler(reading_time,id)} className='p-4 text-blue-700'>Mark As read</button>







    </div>
)

 }

 Blogdata.PropTypes={
    blogdata:PropTypes.object.isRequired
   
 }