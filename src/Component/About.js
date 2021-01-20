import React from 'react'
import {useHistory} from "react-router-dom"

function About() {
  const history = useHistory()
  
  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:"100vh"
    }}>
      Thanks for supporting us ...!
      <button 
      onClick={()=>{
        history.push("/pay")
      }}
      >Go back</button>
    </div>
  )
}

export default About
