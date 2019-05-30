#Triangle Test

For Tradeshift

###Installation instructions

```
git clone https://github.com/richardhealy/tradeshift.git 
cd tradeshift
yarn install
yarn start
```

Then visit `http://localhost:5000`

###To build 

```
yarn build
```

###To run tests

```
yarn test
```

##Notes

I decided not to use a framework like React because I didn't know how Tradeshift UI 
would work with it. So I decided on vanilla custom built framework that uses a 
standard Babel, Webpack, Nunjuks configuration.

The main functions are found in `helpers/triangle.js`. `isValidTriangle()` checks 
if the measurements create a valid triangle and `getTriangleType()` gets 
the triangle type. It's easy to test when separated from the main application
functionality; `triangle.test.js`

The main entry point of the app is `app.js` which loads in the components and 
seeds them with the state singleton (single-source-of-truth) with the app. 
As this is a small example, I rerender the whole screen when the state changes,
rather than changing the elements that need changing (like React would do).

