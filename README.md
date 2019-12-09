# MongoAPI

Mongo (and Mongoose) backed API example.

## Requirements

- MongoDB - either remotely (eg [mlab.com](https://mlab.com)) or locally hosted
- VS Code plugins
    - editorconfig.editorconfig
    - dbaeumer.vscode-eslint

## Running the example

Written with Node v12.13.1 (LTS).

``` sh
npm install     # pull dependencies
npm start       # run the example
npm run lint    # tidy up the 'src' folder code
npm run watch   # run and restart on changes

## Notes

Dependencies for `es-lint` added via:

- `npm i -D eslint eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard`
