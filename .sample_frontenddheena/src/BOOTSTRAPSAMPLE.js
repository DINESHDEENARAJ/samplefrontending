import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export let Samplebootstrap=()=>
{
    const  Connect=()=>
    {

        alert('Apple connectin people')
    }
    return(
        <>
        <link src="Mycss.css" rel="stylesheet"></link>
        <table>
            <thead>
                <tr>
                    <th>NAME </th>
                    <th>VALUE</th>

                </tr>
                
            </thead>
        </table>
        <button className="btn btn-outline-success text-danger" onClick={Connect}>Apple<i class="bi-bi-apple"></i></button>
        </>

    )
}