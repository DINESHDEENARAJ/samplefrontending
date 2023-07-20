//return ku pakkathula intha bracket (   kila potta output varathu. Return pakkathula intha open bracket podanum.
import './External.css'

function Tall()
{
    return(
        <>
        <ol>
            NAME
            <li>DEENA</li>
            <li>DINESH</li>
        </ol>
        </>
    );
}

function Func()
{
    return(
        <>
        <h4>WELCOME REACT</h4>
        </>
    );
    
}


export let TableCreate=()=>
{
    return(
        <>
        <body>
        <table  border='10px' >
            
            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>STUDENT NAME</th>
                    <th>father name</th>
                    <th>mother name</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>deena</td>
                    <td>raju</td>
                    <td>renu</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>rohith</td>
                    <td>egs</td>
                    <td>biruntha</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>dishanth</td>
                    <td>egs</td>
                    <td>biruntha</td>
                </tr>
                 <tr>
                    <td>4</td>
                    <td>giri</td>
                    <td>goivind</td>
                    <td>kv</td>
                </tr> 
            </tbody>
        </table>
        </body>
        </>
    );
}


export default Tall;
export{Func};