#!/usr/bin/env node

const { createGreeting } = require("./src/greeting");

const name = process.argv.slice(2).join(" ").trim();

const greeting = createGreeting({
    name,
    prefix: "random",
    generalText: "random",
    weekdayText: "random",
    suffix: "random"
});

console.log(greeting);
