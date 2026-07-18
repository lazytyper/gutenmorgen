#!/usr/bin/env node

// Verwendung:
//   gutenmorgen
//   gutenmorgen Anna
//   gutenmorgen "Max Mustermann"

const name = process.argv.slice(2).join(" ");

function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function randomUnique(list, min = 1, max = 3) {
    const count = Math.min(
        Math.floor(Math.random() * (max - min + 1)) + min,
        list.length
    );

    const copy = [...list];
    const result = [];

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * copy.length);
        result.push(copy.splice(index, 1)[0]);
    }

    return result.join(" ");
}

// ------------------------------------------------------------
// Emoji
// ------------------------------------------------------------

const prefixEmojis = [
    "🌞", "☀️", "🌅", "🌸", "🌻", "🌼",
    "☕", "🐦", "✨", "🍀", "💐",
    "🌈", "🌺", "🦋", "🐝"
];

const suffixEmojis = [
    "😊", "😄", "🤗", "🥰", "😁",
    "💛", "❤️", "🌞", "🌻", "☕",
    "✨", "🍀", "🎉", "🥳", "👍"
];

// ------------------------------------------------------------
// Allgemeine Texte
// ------------------------------------------------------------

const generalTexts = [
    "Ich wünsche dir einen wunderschönen Tag!",
    "Hab einen tollen Tag!",
    "Lass es dir gutgehen!",
    "Alles Gute für heute!",
    "Genieße den Tag!",
    "Viel Erfolg heute!",
    "Möge dir heute vieles gelingen!",
    "Ich wünsche dir viele schöne Momente!",
    "Bleib gesund und gut gelaunt!",
    "Einen erfolgreichen Tag wünsche ich dir!"
];

// ------------------------------------------------------------
// Wochentag
// ------------------------------------------------------------

const weekdayTexts = {
    0: [
        "Genieße deinen Sonntag!",
        "Einen erholsamen Sonntag!",
        "Lass es heute ruhig angehen!",
        "Zeit zum Entspannen!"
    ],

    1: [
        "Einen guten Start in die neue Woche!",
        "Auf geht's in eine erfolgreiche Woche!",
        "Einen gelungenen Wochenstart!",
        "Viel Energie für die neue Woche!"
    ],

    2: [
        "Hab einen schönen Dienstag!",
        "Weiter so – die Woche läuft!",
        "Ich wünsche dir einen angenehmen Dienstag!"
    ],

    3: [
        "Bergfest! Die Hälfte der Woche ist geschafft!",
        "Schönen Mittwoch!",
        "Nur noch zwei Tage bis Freitag!"
    ],

    4: [
        "Das Wochenende ist schon in Sicht!",
        "Schönen Donnerstag!",
        "Nur noch morgen, dann ist Wochenende!"
    ],

    5: [
        "Komm gut ins Wochenende!",
        "Genieße den Freitag!"
    ],

    6: [
        "Genieße dein Wochenende!",
        "Schönen Samstag!",
        "Mach dir einen schönen freien Tag!"
    ]
};

// ------------------------------------------------------------
// Zusammenbauen
// ------------------------------------------------------------

const day = new Date().getDay();

const prefix = randomUnique(prefixEmojis, 1, 3);
const suffix = randomUnique(suffixEmojis, 1, 3);

const text1 = random(generalTexts);
const text2 = random(weekdayTexts[day]);

let message = `${prefix} Guten Morgen`;

if (name) {
    message += `, ${name}`;
}

message += `! ${text1} ${text2} ${suffix}`;

console.log(message);