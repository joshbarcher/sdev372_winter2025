import express from 'express';
import router from './routers/gamesRouter.js';

const app = express();

//parse JSON payloads
app.use(express.json());

app.use("/api/v1/games", router);

const PORT = 3002;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));