import TestUtils from 'react-addons-test-utils';

const renderer = TestUtils.createRenderer();

const mount = ( component ) => renderer.render( component );

export { mount };