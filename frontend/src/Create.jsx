export default function Create(){
    return (
        <>
        <div className="create_form">
            <input type="text" placeholder="Name" />
            <input type="number" placeholder="Phone" />
            <input type="email" placeholder="Email" />
            </div>

        <div className="btn">
              <button ><b>Save</b></button>
              <button ><b>View</b></button>
        </div>
</>
    )
}