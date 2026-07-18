# gutenmorgen

Random Guten-Morgen-Generator for the CLI and as a Node.js/Pug web app.

## Requirements

- Node.js 18 or newer
- npm

## CLI Usage

Run the CLI directly from the repository:

```sh
node cli.js
node cli.js Anna
node cli.js "Max Mustermann"
```

After installing or linking the package, use the binary:

```sh
gutenmorgen
gutenmorgen Anna
gutenmorgen "Max Mustermann"
```

The CLI prints one randomized German good-morning greeting.

## CLI Installation

Install dependencies first:

```sh
npm install
```

For local development, link the binary:

```sh
npm link
```

Then run:

```sh
gutenmorgen Anna
```

## HTML Version Installation

Install dependencies:

```sh
npm install
```

Start the Node.js web app:

```sh
npm start
```

Then open:

```text
http://localhost:3000
```

You can also pass a name through the query string:

```text
http://localhost:3000/?name=Anna
```

## HTML Version Usage

The web app renders a German good-morning greeting. Each part can be omitted, selected directly, or set to random:

- prefix emojis, selected by icon button or typed manually
- general text
- weekday text
- suffix emojis, selected by icon button or typed manually

Use `Gruß bauen` to generate the greeting from the selected values.
Use `Zufällig` to refresh the selectable greeting parts while keeping the entered name.
Use the copy button to copy the current greeting to the clipboard.

## Development

- Web server entry: `index.js`
- CLI entry: `cli.js`
- Greeting generator: `src/greeting.js`
- Pug template: `views/index.pug`
- Browser assets: `public/`

## License

MIT
