import { useEffect,useState } from "react";
import axios from "axios"
import Create from "./Create";

export default function Home(){
    const[contacts,setContacts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setContacts(result.data))
        .catch(err => console.log(err))
    },[]);

return(
    <div className="home">
      <h1>Contact Link</h1> 
      <Create/>   
      <div>
         <h2>Contacts</h2>
         {contacts.map((contact,index)=>(
           <div key = {index} className="contact">
            <p><b>{contact.name}</b></p>
            <p><b>{contact.phone}</b></p>
            <p><b>{contact.email}</b></p>
           </div>
    ))}
      </div>
  </div>
    );
}