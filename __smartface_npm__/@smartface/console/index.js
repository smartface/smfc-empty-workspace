const noop = () => {};

const log = ( things ) => typeof console !== undefined ? console.log( ...things ) : noop();

export { log };