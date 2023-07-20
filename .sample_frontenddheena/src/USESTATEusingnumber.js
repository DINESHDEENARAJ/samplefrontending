
import { useState } from "react"

export  let Datamethod=()=>
{
    const[Count,setCount]=useState(0)
    const Counting=()=>
    {
        setCount((Count+10));
    }
    const CoutZero=()=>
    {
        setCount(0);
    }
    return(
        <>
        <button onClick={Counting} onDoubleClick={CoutZero}>Single clcik value added,double clcik as value Zero</button>
        <span style={{color:'red',background:"blue"}}>
            {Count}

        </span>
        </>
    )
}

