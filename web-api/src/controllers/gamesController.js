import * as db from './../db/gamesDb.js';

export const getAllGames = async (req, res) => {
    res.status(200);

    const dataResults = await db.getAllGames();
    res.json({
        message: "success",
        data: dataResults
    })
}

export const getGameById = (req, res) => {

}

export const addGame = (req, res) => {
    
}

export const updateGame = (req, res) => {
    
}

export const deleteGame = (req, res) => {
    
}
