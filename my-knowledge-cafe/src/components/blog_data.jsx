 
 
 import PropTypes from 'prop-types';
 
 export default function Blogdata( { blogdata }){

console.log(blogdata);


const{title,cover,author,author_img,reading_time,posted_date,hashtags}=blogdata;




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
         <p>{reading_time} min read</p>
        </div>
    
      </div>
      
        <p>
            {
                hashtags.map((hash,idx)=> <span key={idx}><a href=''>#{hash}</a></span>)
            }
        </p>







    </div>
)

 }

 Blogdata.PropTypes={
    blogdata:PropTypes.object.isRequired
 }