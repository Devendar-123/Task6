import React, { useState } from 'react'
import {TextField,Button, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, FormLabel, RadioGroup, Radio} from "@mui/material"
const FormTutorial = () => {
    const [inputs,setInputs]= useState({
        name:"",
        email:"",
        password:"",
        courses:"",
        terms:false,
        gender:"",
    })

    const handleChange = (e)=>{
        setInputs(prevState=>({
            ...prevState,
            [e.target.name]:[e.target.value],
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(inputs);
        
    }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField 
        name="name" 
        value={inputs.name}
        onChange={handleChange}
        type='text' 
        variant='outlined' 
        placeholder='Name' 
        sx={{margin:"30px"}}
        /> <br />
        <TextField 
        name="email"
        value={inputs.email} 
        onChange={handleChange}
        type='email' 
        variant='outlined' 
        placeholder='Email' 
        sx={{margin:"30px"}}
        /> <br />

        <TextField 
        name="password"
        value={inputs.password}
        onChange={handleChange} 
        type='password' 
        variant='outlined' 
        placeholder='Password' 
        sx={{margin:"30px"}}
        /> <br />
    <FormControl fullWidth>
        <InputLabel id="menu">Courses</InputLabel>
        <Select  label="courses" value={inputs.courses} onChange={handleChange} name='courses'>
            <MenuItem value={"mangodb"}>Mangodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"javascript"}>Java Script</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
            <MenuItem value={"css"}>Css</MenuItem>
        </Select>
    </FormControl>
     <br />
    <FormGroup sx={{margin:"30px"}}>
    <FormControlLabel label="I Agree T&C" control={<Checkbox onChange={()=>setInputs(prevState=>({
        ...prevState,
        terms:!inputs.terms,
    }))}

    />}>

        </FormControlLabel>
    </FormGroup>

    <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup name='gender' defaultValue={"male"} onChange={handleChange}>
            <FormControlLabel value={"male"} label="Male" control={<Radio/>}/>
            <FormControlLabel value={"female"} label="Female" control={<Radio/>}/>
            <FormControlLabel value={"other"} label="Other" control={<Radio/>}/>
        </RadioGroup>
    </FormControl>
        <Button type='submit'>
            Submit
        </Button>
      </form>
    </>
  )
}

export default FormTutorial
