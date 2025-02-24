import React, { useState } from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Select, TextField,Typography } from '@mui/material';
const Forms = () => {
    
        const [inputs,setInputs] = useState({
            name:"",
            email:"",
            age:"",
            subscribe:false,
            course:"",
        });

        const handleChange = (e)=>{
            setInputs((prevState)=>({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }

        const handleSubmit =(e)=>{
            e.preventDefault()
            console.log(inputs);
            
        }
        
      return (
        <div>
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"30%",justifyContent:"center", marginLeft:"35vw", background:"#ebfaf9", color:"black",borderRadius:"10px"}}>
            <FormLabel>Name:</FormLabel>
            <TextField
            
            onChange={handleChange}
            name='name'
            value={inputs.name} 
            placeholder='Name'
            variant='filled'
            sx={{margin:3}}
            type='text'
          /> <br />

          <FormLabel>Email:</FormLabel>
          <TextField
          onChange={handleChange}
            value={inputs.email}
            name='email'
            placeholder='Email'
            variant='outlined'
            sx={{margin:3}}
            type='email'
          /> <br />
           <FormLabel>Age:</FormLabel>
          <TextField
          onChange={handleChange}
            value={inputs.age}
            name='age'
            placeholder='age '
            variant='standard'
            sx={{margin:3}}
            type='number'
          /> <br />

          {/* checkbox */}

           <FormGroup>
              <FormControlLabel sx={{margin:3}} control={<Checkbox onChange={()=>setInputs((prevState)=>({
                ...prevState,subscribe:!inputs.subscribe
              }))} />} label="Subscribe to Newsletter " />
              {/* <FormControlLabel required control={<Checkbox />} label="Required" /> */}
              {/* <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
            </FormGroup>

{/* select */}

            <FormControl fullWidth>
        <InputLabel >Course</InputLabel>
        <Select
          name='course'
          value={inputs.course}
          label="course"
          onChange={handleChange}
        >
          <MenuItem value={"CSS"}>CSS</MenuItem>
          <MenuItem value={"JAVA"}>JAVA</MenuItem>
          <MenuItem value={"MANGO DB"}>MANGO DB</MenuItem>
          <MenuItem value={"HTML"}>JAVA</MenuItem>
          <MenuItem value={"PYTHON"}>JAVA</MenuItem>
          <MenuItem value={"TYPESCRIPT"}>TYPESCRIPT</MenuItem>
        </Select>
      </FormControl>

          <Button variant='contained' type='submit'>Submit</Button>
            </form>

            <Typography>
            Name: {inputs.name}
          </Typography>
          <Typography>
            Email: {inputs.email}
          </Typography>
          <Typography>
            Age: {inputs.age}
          </Typography>
          
        </div>
      )
    
}

export default Forms
