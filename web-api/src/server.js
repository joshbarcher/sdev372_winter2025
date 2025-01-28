import express from 'express';
import router from './routers/gamesRouter.js';

const app = express();

//parse JSON payloads
app.use(express.json());

app.use("/api/v1/games", router);

app.listen(8001, () => console.log('Server started on 8001'));