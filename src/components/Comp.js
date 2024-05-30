import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
function Comp(){
    const [name,setname]=useState("");
    const[email,setemail]=useState("");
    const [data,setdata]=useState([]);

    function adddata(){
     setdata([...data,{name,email}])
     setname("");
     setemail("")
    }

    return(
      <div>
        <h1>Record Keeping</h1>
        <div className="main">
        <Stack spacing={2} direction="row">
        <TextField value={name} onChange={(event) => setname(event.target.value)} id="outlined-basic" label="Name..." variant="outlined" />
        <TextField value={email} onChange={(event) => setemail(event.target.value)} id="outlined-basic" label="Email..." variant="outlined" />
        <Button onClick={adddata} color='success' variant="contained"><AddIcon/></Button>
    </Stack>
       
        

        </div>
        </div>
   
        
    )
}

export default Comp;