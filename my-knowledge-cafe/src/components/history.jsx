import Books from "./books";

export default function History({bookmarks,readingTime}){



return(
    <div className="mx-auto">
        
        <p className="text-2xl text-blue-500j">Spend total time In reading:{readingTime}</p>
         
        <p className="text-xl font-bold">BookMarked Blogs:{bookmarks.length}</p>

         <div className="">

             {
                bookmarks.map((book,idx)=><Books book={book} key={idx}></Books>)
             }

         </div>


    </div>
)

}