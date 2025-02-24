import React from 'react'
import {AppBar, Button, Toolbar, Typography} from "@mui/material"
const Appbars = () => {
  return (
    <div>
      <AppBar >
       <Toolbar>
        <Typography>Logo</Typography>
        <Button  sx={{marginLeft:"auto"}} variant='contained' color='secondary'>Submit</Button>
       </Toolbar>
      </AppBar>
    </div>
  )
}

export default Appbars
