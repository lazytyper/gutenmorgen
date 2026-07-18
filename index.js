const express = require("express");
const path = require("path");
const {
    createGreeting,
    generalTexts,
    prefixEmojis,
    suffixEmojis,
    weekdayOptions
} = require("./src/greeting");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    const name = typeof req.query.name === "string" ? req.query.name.trim() : "";
    const shouldRandomize = req.query.randomize === "1";
    const selections = {
        name,
        prefix: shouldRandomize || typeof req.query.prefix !== "string" ? "random" : req.query.prefix,
        generalText: shouldRandomize || typeof req.query.generalText !== "string" ? "random" : req.query.generalText,
        weekdayText: shouldRandomize || typeof req.query.weekdayText !== "string" ? "random" : req.query.weekdayText,
        suffix: shouldRandomize || typeof req.query.suffix !== "string" ? "random" : req.query.suffix
    };
    const greeting = createGreeting(selections);

    res.render("index", {
        title: "Guten Morgen",
        greeting,
        options: {
            generalTexts,
            prefixEmojis,
            suffixEmojis,
            weekdayOptions
        },
        selections
    });
});

app.listen(port, () => {
    console.log(`gutenmorgen listening at http://localhost:${port}`);
});
