import { Router } from 'express';
import { getAllGames, getGameById, addGame, updateGame, deleteGame } from './../controllers/gamesController.js';

const router = Router();

//define routes here...
router.get("/", getAllGames);
router.post("/", addGame);
router.put("/", updateGame);
router.delete("/", deleteGame);

export default router;