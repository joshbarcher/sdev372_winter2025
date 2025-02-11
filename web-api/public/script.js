window.onload = async () => {
    //request games from our API
    const uri = "/api/v1/games";
    const config = {
        method: "get",
        mode: "cors"
    }
    const response = await fetch(uri, config);
    const json = await response.json();
    console.log(json);
    loadUI(json.data);

    const button = document.getElementById("gameSubmit");
    button.onclick = addGame;
}

function addGame(event) {
    //prevent the default behavior of this event (form submission)
    event.preventDefault();
}

function loadUI(games) {
    const main = document.querySelector("#games");

    for (const game of games) {
        addGame(game, main);
    }
}

function addGame(game, main) {
    //create DOM elements
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const ul = document.createElement("ul");

    //add properties
    h2.innerHTML = game.title;

    const details = [game.genre, game.developer, game.rating, game.release_date];

    for (const detail of details) {
        addGameDetail(ul, detail);
    }

    //nest elements
    section.appendChild(h2);
    section.appendChild(ul);
    main.appendChild(section);
}

function addGameDetail(ul, detail) {
    const li = document.createElement("li");
    li.innerHTML = detail;
    ul.appendChild(li);
}