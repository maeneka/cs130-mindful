# cs130-mindful
Our project for CS 130 taught by Professor Miryung Kim, Fall 2020.

## Building the UI for extension testing + deployment

**Note** these steps need to be repeated for *any* change to appear in the extension. Make sure to delete old build files from `/project` when re-exporting. Most of testing should happen by running `npm run dev` in the `/mindful-ui` folder where you can run the extension as a web server.

`cd mindful-ui`
`npm run build` (may need to run `npm install`)

once done building, delete the `manifest.json` in `/mindful-ui/build`.

Then copy the remaining **contents** of the `/mindful-ui/build` directory directly into `/project`.

This should make the extension work, *but* the styling will be off. the next step fixes that.

Now go into the `/project` folder. there should be a css file there that looks like `bundle.XXXXX.css`
Inside `/project/index.html` you need to add `<link rel="stylesheet" href="bundle.XXXXX.css">` right after the `<head>` tag. This should bind the css correctly

## UI Development Instructions (delete when completed)
inside of `/mindful-ui`:

 - `npm run dev` host the project locally
 - `npm run build` create the index.html and static files for export
 - `npm clean` remove build files

preact documentation: https://preactjs.com/guide/v10/getting-started

by Maeneka Grewal, Anita Ilango, Aaron Phillip, Devam Shroff, and Rohit Tavare.
TA: Keerti Kareti.
