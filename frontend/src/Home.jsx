import { useEffect,useState } from "react";
import axios from "axios"
import Create from "./Create";

export default function Home(){
    const[contacts,setContacts] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result => setContacts(result.data))
        .catch(err => console.log(err))
    },[])

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

return(
    <div className="home">
      <h1>Contact manager</h1> 
      <Create/>   
      <div>
         <h2>Contacts</h2>
         {contacts.map((contact,index)=>(
           <div key = {index} className="content">
             <img src="icons8-person-30.png" alt="" />
              <div>
                <div><b>{contact.name}</b></div>
                <div>{contact.phone}</div>
                <div>{contact.email}</div>
               </div>
               <div className="update-btn">
                <button className="edit">Edit</button>
                <button className="dlt" onClick={() => handleDelete(contact._id)}>Delete</button>
               </div>
           </div>
    ))}
      </div>
  </div>
    );
}