import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import Cards from './Card';
const Appbar = () => {
    const [value,setValue] = useState(0);

  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography variant='h5'>
            LOGO
        </Typography>
        <Tabs sx={{marginLeft:"auto"}} value={value} onChange={(e,val)=>setValue(val)} textColor='inherit' indicatorColor='secondary'>
            <Tab label="Home"/>
            <Tab label="About"/>
            <Tab label="Contact"/>
            <Tab label="About us"/>
            <Tab label="Feedback"/>
        </Tabs>
        
        </Toolbar>
      </AppBar>

      <div style={{marginTop:100}}>
            <Cards/>
      </div>
    </div>
  )
}

export default Appbar
