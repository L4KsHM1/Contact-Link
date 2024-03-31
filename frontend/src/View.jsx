import axios from "axios"
import { useEffect } from "react"

export default function View(){
    const[contacts,setContacts]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setContacts (result.data))
        .catch(err =>console.log(err))
    },[])
    return(
        <div>
            <h1>Contacts</h1>
            <div>
                {
                    contacts.map(contact =>(
                        <div>
                        <p>{contact.name}</p>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                        </div>
                        
                    ))
                }
            </div>
        </div>
    )
}