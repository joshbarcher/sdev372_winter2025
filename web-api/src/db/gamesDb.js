import fs from 'fs/promises';

export const getAllGames = async () => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    console.log(`Read ${contents.length} game records`);
    return contents;
}

export const getGameByName = async (name) => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    const foundGame = contents.find(game => game.title === name);
    return foundGame;
}

export const addGame = async (gameData) => {
    let contents = await fs.readFile('./src/db/games.json');
    contents = JSON.parse(contents); //convert buffered JSON text to JS object

    contents.push(gameData);
    await fs.writeFile('./src/db/games.json', JSON.stringify(contents, null, 4));

    return gameData;
}

export const updateGame = updatedGame => {
    
}

export const deleteGame = id => {
    
}