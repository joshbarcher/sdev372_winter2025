import repo from './../db/techniquesRepo.js';

const getPoints = (req, res) => {
    const { x, y, z } = req.params;

    if (!Number.isNaN(x) || !Number.isNaN(y) || !Number.isNaN(z)) {
        res.status(400).send("Integers only please...");
    } else {
        res.status(200).send(`Point is (${x}, ${y}, ${z})`);
    }
}

const book = (req, res) => {
    const thing = req.params.thing;
    console.log(`Thing: ${thing}`);

    const book = {
        name: "Androids dream of electric sheep",
        summary: "A bounty hunter that looks for androids in present",
        pages: "Pages: 200",
        author: "Phillip K Dick"
    }

    if (thing in book) {
        res.status(200).send(book[thing]);
    } else {
        res.status(404).send("Book information not found!");
    }
}

const bookName = (req, res) => {
    res.status(200).send("Androids dream of electric sheep");
}

const bookSummary = (req, res) => {
    res.status(200).send("A bounty hunter that looks for androids in present");
}

const bookPages = (req, res) => {
    res.status(200).send("Pages: 200");
}

const printName = (req, res) => {
    const { fName, lName, nickname } = req.query;
    res.send(`Hello, ${fName} ${lName} (${nickname})`)
}

const pageLoader = (req, res) => {
    const page = req.query.page;

    res.status(200);
    if (page === "page1") {
        res.send("Page #1");
    } else if (page === "page2") {
        res.send("Page #2");
    } else if (page === "page3") {
        res.send("Page #3");
    } else {
        res.status(404);
        res.send("Unknown page!");
    }
}

const hello = (req, res) => {
    res.status(200);
    res.send("Hello, you!");
}

const addMessage = (req, res) => {
    res.status(200);
    res.send("<h1>Welcome!</h1>");
}

const course = (req, res) => {
    res.status(200);
    res.json({
        id: "SDEV 372",
        topic: "Cloud Computing With Microservices",
        credits: 5
    })
}

const unknown = (req, res) => {
    res.status(404);
    res.end();
}

const underwaterTechniques = (req, res) => {
    res.status(200);
    res.json(repo.getTechniques());
}

export default {
    hello,
    addMessage,
    course,
    unknown,
    underwaterTechniques,
    pageLoader,
    printName,
    bookName, 
    bookPages,
    bookSummary,
    book,
    getPoints
}