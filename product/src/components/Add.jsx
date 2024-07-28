import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React from 'react'

const Addproduct = () => {
  return (
    <div>
        <Typography variant='h5'>Add product</Typography><br />
        <TextField id="outlined-basic" label="product name" variant="outlined" /><br/><br />
        <TextField id="outlined-basic" label="imageURL" variant="outlined" /><br/><br />
      
      
        <TextField id="outlined-basic" label="price" variant="outlined" /><br/><br />
        
        
        <FormControl fullWidth>
  <InputLabel id="cat">Category</InputLabel>
  <Select
    labelId="cat"
    id="category"
    label="Category"
    
  >
    <MenuItem value={"men's clothing"}>men's clothing</MenuItem>
    <MenuItem value={"jewelery"}>jewelery</MenuItem>
    <MenuItem value={'electronics'}>electronics</MenuItem>
  </Select>
</FormControl><br/><br/>
<Button variant="outlined">Submit</Button>
    </div>
  )
}

export default Addproduct