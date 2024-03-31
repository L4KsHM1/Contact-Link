import { useState } from 'react'
import axios from 'axios'
export default function Create(){
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = () =>{
        axios.post('http://localhost:3001/add',{name,phone,email})
        .then(result=>{
            // setName('');
            // setPhone('');
            // setEmail('');
            location.reload()
            alert("Contact saved successfully");
        })
        .catch(error => {
            console.error('Error saving contact:', error);
            alert("Failed to save contact. Please try again.");
        });
        
    }

    return (
        <>
        <div className="create_form">
            <input type="text" placeholder="Name" onChange={(e)=> setName(e.target.value)} />
            <input type="number" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)}/>
            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            </div>

        <div className="btn">
              <button onClick={handleSubmit}><b>Save</b></button>
              <button ><b>View</b></button>
        </div>
</>
    )
}