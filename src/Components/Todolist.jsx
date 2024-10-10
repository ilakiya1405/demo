import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from'axios'
const Todolist = () => {

    //const [todo, setTodo] = useState('');
    const [name, setName] = useState('');
    const[db,setDb]=useState([])
    function database() {
        axios.post("http://localhost:3000/posts", { name })
            .then(()=>{
                alert("data has been posted")
                //setTodo(' ')
            })
            .catch(()=>{
                alert("data has not been posted")
            })
    }
    function getData()
    {
        axios.get("http://localhost:3000/posts",{name})
            .then((ref) => {
                setDb(ref.data)
                alert("data has been read")
            
            })
            .catch(() => {
                alert("data has not been read")
            })
    }
    function updatedata(id,data) {
        axios.put(`http://localhost:3000/posts/${id}`,{name:data})
        .then(()=> {
            console.log("data updated");
            getData();
        })
        .catch(()=> {
            console.log("data cannot be updated")
        })
    }
    function deleteDate(id, data) {
        axios.delete(`http://localhost:3000/posts/${id}`,{name:data})
        .then(()=> {
            console.log("data deleted");
            getData();
        })
        .catch(()=> {
            console.log("data cannot be deleted")
        })
    }
    
    function newData(id) {
        const data=prompt("enter the new data")
        console.log(id);
        updatedata(id,data);
    }
    console.log(db)

      

  return (
    <div>
        {/* <p>
            {todo}
        </p>
       <TextField 
       id="outlined-basic" 
       label="Todo" varient="outlined" 
       value={todo} 
       onChange={(ref) => setTodo(ref.target.value)}/>  */}

        <p>
            { name }
        </p>
       <TextField 
       id="outlined-basic"
       label="Name" varient="outlined" 
       value={name} 
       onChange={(ref) => setName(ref.target.value)}/>
       <Button variant="contained" onClick={database}>Post</Button> 
       <Button variant="contained" onClick={getData}>Get</Button> 
       

       <div>
        <ul>
            {
                db.map((item) =>(
                    <li key={item.id}>{item.name}
                    <Button onClick={()=> newData(item.id)}>Edit</Button>
                    <Button onClick={()=>deleteDate(item.id)}>Delete</Button></li>

                        
                ))
            }
        </ul>
       </div>
    </div>
  )
}

export default Todolist