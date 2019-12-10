# MongoAPI

Mongo (and Mongoose) backed API example.

## Requirements

- MongoDB - either remotely (eg [mlab.com](https://mlab.com)) or locally hosted
- VS Code plugins
    - editorconfig.editorconfig
    - dbaeumer.vscode-eslint

## Note about the connection

This is just example code, so whilst there is (for convenience) a hard-coded connection string in the main `server.js` it is random, not used elsewhere, and temporary.
Either take similar precautions or move it to an environment variable (or similar).

Obviously replace the connection string with one that works for you.

## Running the example

Written with Node v12.13.1 (LTS).

``` sh
npm install     # pull dependencies

npm start       # run the example
npm run lint    # tidy up the 'src' folder code
npm run watch   # run and restart on changes

npm run build   # generate dist/api.js (for prod)
npm run prod    # run last generated build
```

Optionally, set a `debug` environment variable first:

Windows:

``` sh
set debug=server,seeding && npm start
```

Linux and MacOS:

``` sh
export debug=server,seeding && npm start
```

## Production deploys

- Don't use the full `npm install` on your production server, as that will also fetch all your dev dependencies even though they will not be needed. Instead do `npm i --production`.
- Don't use the original source unless you are not compiling (use the `npm run prod` instead).

## Notes

Dependencies for `es-lint` added via:

- `npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`

The `webpack` dependencies:

- `npm i webpack webpack-cli --save-dev`
