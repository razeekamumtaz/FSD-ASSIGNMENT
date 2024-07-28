import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import axios from 'axios';


const Home = () => {
  
  
  var [product, setproduct] = useState([])
   
  useEffect(() => {
      axios.get(" https://fakestoreapi.com/products")
      .then((response) => {
          console.log(response)
          setproduct(response.data)
              
          })

       },[])
  return (
    <div>
        <Typography variant="h4" component="h1" gutterBottom>
       
      </Typography>
      <Grid container spacing={3}>
        {product.map(product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Category: {product.category}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                  Price: ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default Home