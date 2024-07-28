import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Button,Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <AppBar color='secondary'>
<Toolbar>
<Typography variant='h4' sx={{ flexGrow: 1 }}>Product Management Application </Typography>&nbsp;&nbsp;
                  <Link to='/home'><Button variant='contained' color="secondary" style={{ color: "white" }}>Home</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/add'><Button variant='contained' color="secondary" style={{ color: "white" }}>Add Product</Button>
                  </Link>&nbsp;&nbsp;
</Toolbar>
     </AppBar>
    </div>
  )
}

export default Navbar