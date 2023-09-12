
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Header from './components/header'
import History from './components/history'


function App() {
 const[bookmarks,setbookmars]=useState([])
 const [readingTime,setReadingtime]=useState(0)

  const btnHandler =blogdata=>{
 
    const newHistory=[...bookmarks,blogdata]
   setbookmars(newHistory);


  }

const readingTimeHandler=(time,id)=>{
  setReadingtime(readingTime+time);
  const newId=bookmarks.filter(bookmark1=>bookmark1.id!==id)
setbookmars(newId);
}






  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between">
      <Blogs readingTimeHandler={readingTimeHandler} btnHandler={btnHandler}></Blogs>
     <History readingTime={readingTime} bookmarks={bookmarks}></History>
      </div>
    
    </>
  )
}

export default App
