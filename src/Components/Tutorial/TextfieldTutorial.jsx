import React, { useState } from 'react'
import { TextField, Typography } from "@mui/material"
const TextfieldTutorial = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [age,setAge] = useState("");
    
  return (
    <div>
      <TextField
        value={name} 
        onChange={(e)=>setName(e.target.value)}
        placeholder='Name'
        variant='filled'
        sx={{margin:3}}
        type='text'
      />
      <TextField
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Email'
        variant='outlined'
        sx={{margin:3}}
        type='email'
      />
      <TextField
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        placeholder='age '
        variant='standard'
        sx={{margin:3}}
        type='number'
      />

      <Typography>
        Name: {name}
      </Typography>
      <Typography>
        Email: {email}
      </Typography>
      <Typography>
        Age: {age}
      </Typography>
    </div>
  )
}

export default TextfieldTutorial
