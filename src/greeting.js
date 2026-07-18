function random(list) {
    return list[Math.floor(Math.random() * list.length)];
}

const prefixEmojis = [
    "🌞", "☀️", "🌅", "🌸", "🌻", "🌼",
    "☕", "🐦", "✨", "🍀", "💐",
    "🌺", "🦋", "🐝"
];

const suffixEmojis = [
    "😊", "😄", "🤗", "🥰", "😁",
    "💛", "❤️", "🌞", "🌻", "☕",
    "✨", "🍀", "🎉", "🥳", "👍"
];

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
        "Weiter so - die Woche läuft!",
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

const weekdayOptions = Object.entries(weekdayTexts).flatMap(([day, texts]) => (
    texts.map((text) => ({
        day: Number(day),
        text
    }))
));

function pickSelected(value, list) {
    if (!value) {
        return "";
    }

    if (value === "random") {
        return random(list);
    }

    return list.includes(value) ? value : "";
}

function pickEmoji(value, list) {
    const trimmedValue = typeof value === "string" ? value.trim() : "";

    if (!trimmedValue) {
        return "";
    }

    if (trimmedValue === "random") {
        return random(list);
    }

    if (typeof Intl !== "undefined" && Intl.Segmenter) {
        const segmenter = new Intl.Segmenter("de", { granularity: "grapheme" });
        return Array.from(segmenter.segment(trimmedValue), (segment) => segment.segment)
            .slice(0, 12)
            .join("");
    }

    return Array.from(trimmedValue).slice(0, 24).join("");
}

function pickSelectedWeekday(value, date) {
    if (!value) {
        return "";
    }

    if (value === "random") {
        return random(weekdayTexts[date.getDay()]);
    }

    return weekdayOptions.some((option) => option.text === value) ? value : "";
}

function createGreeting(options = {}, date = new Date()) {
    const name = options.name || "";
    const prefix = pickEmoji(options.prefix, prefixEmojis);
    const suffix = pickEmoji(options.suffix, suffixEmojis);
    const text1 = pickSelected(options.generalText, generalTexts);
    const text2 = pickSelectedWeekday(options.weekdayText, date);
    const recipient = name ? `, ${name}` : "";
    const parts = [`${prefix} Guten Morgen${recipient}!`, text1, text2, suffix]
        .map((part) => part.trim())
        .filter(Boolean);

    return parts.join(" ");
}

module.exports = {
    createGreeting,
    generalTexts,
    prefixEmojis,
    suffixEmojis,
    weekdayOptions,
    weekdayTexts
};
