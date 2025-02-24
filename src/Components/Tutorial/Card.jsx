import React, { useState } from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
const Cards = () => {
    const [open,setOpen]= useState(false)
  return (
    <div>
      <Card sx={{maxWidth:300}}>
            <CardMedia 
            component={"img"} 
            height="140" 
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s'
            alt='Image'
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component="div">
                    Peacock Feather
                </Typography>
                <Typography variant='body2'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi labore eaque ullam, itaque illum ad.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary' onClick={()=>setOpen(true)}>Delete</Button>
            </CardActions>
      </Card>

      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Are you sure</DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure to delete this product</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=>setOpen(false)}>Cancel</Button>
            <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Cards
