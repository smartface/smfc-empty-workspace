/* global alert */

const noop = () => {};
const alert = typeof alert !== 'undefined' ? alert : noop;

export { alert };