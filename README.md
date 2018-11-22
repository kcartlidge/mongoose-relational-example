# mongoose-relational-example

An example of Express using async/await with MongoDB as a relational document store.

## Note about the connection

This is just example code, so whilst there is (for convenience) a hard-coded connection string in the main ```server.js``` it is random, not used elsewhere, and temporary.
Either take similar precautions or move it to an environment variable (or similar).

Obviously replace the connection string with one that works for you.

## Running the example

Written with Node v10.13.0 (LTS).

``` sh
npm install     # pull dependencies
npm start       # run the example
npm run lint    # tidy up the 'src' folder code
npm run watch   # run and restart on changes
```
