import connection from './connection.js';

export const getAllGames = async () => {
    const [results, fields] = await connection.query(
        "SELECT * FROM games", []
    );
    return results;
}

export const getGameByName = async (name) => {
    const [results] = await connection.query(
        "SELECT * FROM games WHERE title = ?", [name]
    );
    return results;
}

export const addGame = async (gameData) => {
    
}

export const updateGame = async (updatedGame) => {
    
}

export const deleteGame = async title => {
    
}