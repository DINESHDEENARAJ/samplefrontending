import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export const FirstHook=()=>
{
    const[user,SetUser]=useState("")
    const print=()=>
    {
        alert(user+'has adding successfull')
    }

    const result=(temp)=>
    {
        SetUser(temp.target.value)
    }

return(
    <>
<input type="text" placeholder="enter name" name={user} onChange={result}/>
<button className="btn btn-outline-success" onClick={print}>click</button>
    </>
    
)
}



// export const SecondHook=()=>
// {
//     const[user,SetUser]=useState("")
//     const print=()=>
//     {
//         alert(user+'has add successfull')
//     }

//     const result=(temp)=>
//     {
//         SetUser(temp.target.value)
//     }

// return(

//     <>
// <input type="text" placeholder="enter name" name={user} onChange={result}/>
// <button className="btn btn-outline-success" onClick={print}>click</button>
//     </>
    
// )

// }

