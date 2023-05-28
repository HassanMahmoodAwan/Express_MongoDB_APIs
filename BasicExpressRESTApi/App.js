// Basic rest api is created for hardcorded arrays of value.


console.clear();
const express = require('express');
const app = express();
app.use(express.json());  // MiddleWare will be understand laterOn.


// Array of Products
const Products = ['Mobile', 'Laptop', `32 inch Monitor`, 'Tablet', 'PC'];

app.get('/', (req, res)=>{
    res.send('hello server side rendering');
});

app.get('/api/Products', (req, res)=>{

    res.send(Products);
});

// // HardCorded single element of Products.
// app.get("/api/Products/1", (req, res) => {
//   res.send(Products[1]);
// });

// Actual way of using singl element
app.get("/api/Products/:index", (req, res) => {
    if (!Products[req.params.index]){
        return res.status(400).send("Product not find");
    } 
    res.send(Products[req.params.index]);
});


// Posting  and updating data and checking it using thunder client.
app.put("/api/Products/:index", (req, res) => {
  console.log(req.body);
  Products[req.params.index] = req.body.name; 
  res.send(Products[req.params.index]);
});

// Delete the request from the array
app.delete("/api/Products/:index", (req, res) => {
  Products.splice(req.params.index, 1);
  res.send(Products[req.params.index]);
});

// Post request in the array
app.post("/api/Products", (req, res) => {
  Products.push(req.body.name);
  res.send(Products);
});








app.listen(3000);
