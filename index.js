// HINTS:
// 1. Import express and axios

// 2. Create an express app and set the port number.

// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.

// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.

// 6. Listen on your predefined port and start the server.

import express from 'express';
import axios from "axios";
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 80;
const API = "https://secrets-api.appbrewery.com";

app.use(express.static("public"));
app.use(morgan('dev'));

app.get('/', async (req, res) => {
    try{
        const response = await axios.get(API+ "/random");
        res.render("index.ejs", {content: response.data});
    }catch (error){console.info(error.response.message);}
})


app.listen(PORT, () => {
    console.info(`Server running on port ${PORT}`);
})
