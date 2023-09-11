
import './App.css'
import Blogs from './components/blogs'
import Header from './components/header'
import History from './components/history'

function App() {


  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between">
      <Blogs></Blogs>
     <History></History>
      </div>
    
    </>
  )
}

export default App
