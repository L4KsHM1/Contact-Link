import { useState } from 'react'
import axios from 'axios'
export default function Create(){
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const handleSubmit = () =>{
        if(!name || !phone ){
            alert("please fillout the field");
            return;
        }
        axios.post('http://localhost:3001/add',{name,phone,email})
        .then(result=>{
            location.reload()
            // alert("Contact saved successfully");
        })
        .catch(error => {
            console.error('Error saving contact:', error);
            alert("Failed to save contact. Please try again.");
        });
        
    }

    return (
        <>
        <div className="create_form">
            <input type="text" placeholder="Name"  onChange={(e)=> setName(e.target.value)} required/>
            <input type="number" placeholder="Phone" onChange={(e)=> setPhone(e.target.value)} required/>
            <input type="email" placeholder="Email" onChange={(e)=> setEmail(e.target.value)} />
            </div>

        <div className="btn">
              <button onClick={handleSubmit}><b>ADD</b></button>
              {/* <button onClick={handleView}><b>View</b></button> */}
        </div>
</>
    )
}