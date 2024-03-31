import { useState } from 'react'
import axios from 'axios'
export default function Create(){
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');

    const handleSubmit = () =>{
        axios.post('http://localhost:3001/add',{name,phone,email});
        setName('');
        setPhone('');
        setEmail('');
        alert("Contact saved successfully");
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