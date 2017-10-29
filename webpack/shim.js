/* eslint-disable no-console */

// Get rid of the requestAnimationFrame warning
// Included in jest.setupFiles in package.json
// https://github.com/facebook/jest/issues/4545

console.log('Remove this shim once jest 21.3 is released.');
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
