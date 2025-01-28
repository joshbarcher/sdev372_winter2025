import * as db from './../db/gamesDb.js';

export const getAllGames = async (req, res) => {
    res.status(200);

    const dataResults = await db.getAllGames();
    res.json({
        message: "success",
        data: dataResults
    })
}

export const getGameByName = async (req, res) => {
    const game = await db.getGameByName(req.params.gameName);

    if (game) { //found!
        res.status(200);
        res.json({
            message: "Found game!",
            data: game
        })
    } else { //not found!
        res.status(404);
        res.json({
            message: `Game ${req.params.gameName} not found`
        })
    }
}

export const addGame = async (req, res) => {
    console.log(req.body);
    const addedGame = await db.addGame(req.body);

    res.status(201);
    res.json({
        message: "Inserted new game!",
        data: addedGame
    })
}

export const updateGame = (req, res) => {
    
}

export const deleteGame = (req, res) => {
    
}
