import React,{useState,useEffect}from 'react'
import NavBar from './NavBar'

const App = (props) => {
  const[loggedIn,setLoggedIn]  = useState(false)

  function handleAuth(){
    setLoggedIn(!loggedIn)
  }

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('userData'))){
      handleAuth()
    }
  },[])
  
  return (
    <div className="mx-auto p-2" style={{width: 600}}>
      <NavBar loggedIn={loggedIn} handleAuth={handleAuth}/>
    </div>
    
  )
}
export default App