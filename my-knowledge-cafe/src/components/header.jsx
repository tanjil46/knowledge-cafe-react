


import profile from './images/profile.png'
export default function Header(){
  return(
    <div className="flex justify-between items-center p-4">
     <h1 className="font-bold text-3xl">Knowledge Cafe</h1>
     <div className="">
        <img src={profile}></img>
     </div>





    </div>
  )



}