const express = require('express');
const cors = require('cors');
const foodRoute = require('./routes/food');

const app = express();

const PORT = 7000;
app.use(express.json());
app.use(cors("*"));
app.use("/food",foodRoute);

app.listen(PORT, () =>{
    console.info(`Server listen on port${PORT}`);
});