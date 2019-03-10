const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({hi: 'Maga... Vish Rocks!!!'});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);
