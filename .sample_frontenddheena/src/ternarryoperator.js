import 'bootstrap/dist/css/bootstrap.min.css'
//import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react'
export const TernaryOperator1=()=>
{
    const[wish,setwish]=useState("nothing")
    const[result,setresult]=useState("")
    const[changes,setchanges]=useState({color:'red',background:'black'})

    const Trigger=(temp)=>

    {
        setwish(temp.target.value)
    }
    const Ternarysample=()=>
    {

        // double r three equalt use seilam error varathu, one equalt use panna error varum
        (wish==='spring')?
        setchanges({color:'green',backgroundcolor:'black'}):
        (wish==='winter')?
        setchanges({color:'red',backgroundcolor:'black'}):
        (wish==='rainy')?
         setchanges({color:'blue',backgroundcolor:'black'}):
        (wish==='summer')?
         setchanges({color:'brown',backgroundcolor:'black'}):

        setchanges({color:'pink',background:'black'})

        setresult(wish)
        
}

return(
    <>

        <input placeholder="enter your favourite season" type="text" onChange={Trigger} input/> 
        <button onClick={Ternarysample} className="btn btn-outline-secondary">send</button>
        
        <p style={changes}>
          {result}

        </p>
    </>
)

}