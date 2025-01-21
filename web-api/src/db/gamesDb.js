import fs from 'fs/promises';

export const getAllGames = async () => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    console.log(`Read ${contents.length} game records`);
    console.log(contents);
    return contents;
}

export const getGameById = id => {

}

export const addGame = gameData => {
    
}

export const updateGame = updatedGame => {
    
}

export const deleteGame = id => {
    
}