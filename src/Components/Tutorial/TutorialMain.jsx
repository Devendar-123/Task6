import React from 'react'
import {Typography, Button,TextField} from "@mui/material"
const TutorialMain = () => {
  return (
    <div>
        {/* Typography same as p without varaiants */}
      <Typography variant='h4' sx={{color:"orange"}}>
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography  variant="h6" component={"h6"} >
        Im Devendar
      </Typography>

      {/* Button */}
      <Button 
      variant='contained' 
      color='success' 
      sx={{margin:"30px"}}
      disabled
      >CONTAINED</Button> {/*button with primary color */} 
      <Button variant='text' size='large'>TEXT</Button> {/* button with text*/ }
      <Button variant='outlined' onClick={()=> alert("You clicked button outlined!")}>OUTLINED</Button> {/*button with outline*/}
    
    {/* Textfield same as input tag */}
    <br />

    {/* <input type="text" placeholder='typr your name' /> */}
    <TextField type='text' placeholder='Name' variant='standard' sx={{margin:"20px"}}/>
    <TextField type='email' placeholder='Email' variant='filled'/>
    <TextField type='password' placeholder='Password' variant='outlined'/>


    </div>
  )
}

export default TutorialMain
