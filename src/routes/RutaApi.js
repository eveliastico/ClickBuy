import express from 'express';
import { setRoutes } from './routes/RutaApi.js';

const app = express();
const port = process.env.PORT || 3000;

setRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});