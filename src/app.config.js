/*
 *  ____                       _    __                      _
 * / ___| _ __ ___   __ _ _ __| |_ / _| __ _  ___ ___      (_) ___
 * \___ \| '_ ` _ \ / _` | '__| __| |_ / _` |/ __/ _ \     | |/ _ \
 *  ___) | | | | | | (_| | |  | |_|  _| (_| | (_|  __/  _  | | (_) |
 * |____/|_| |_| |_|\__,_|_|   \__|_|  \__,_|\___\___| (_) |_|\___/
 * -----------------------------------------------------------------
 */

// TODO: creating this as a regular JS file, so that we can do things like localization.
// TODO: do some validation in the mounter (for instance all the names should be unique, types should be legit etc;
// that validation should be done before parsing, that validation should be pluggable.)

// TODO: this should be declarative in the JSON.
// as in…
// `onReady: onReady` where `onReady` comes from app.actions.js`
//
// onDemoAppReady
// onPushAndRelaxButton1Click
// onPushAndRelaxButton2Click
//  i.e. if there is an exported action, use it; otherwise noop.
// which also means mounter needs to access the actions; though we can 
// bind it to config as config.actions; though being explicit is better.
//
// in general think about the best way to wire events.
//
// TODO: validate config before each build.

const config = {
    type: 'Application',
    name: 'DemoApp',
    landingPage: 'FirstPage',
    children: [ {
        type: 'Page',
        name: 'FirstPage',
        fillColor: '#eeee',
        children: [ {
			type: 'TextButton',
			onClick: 'PushAndRelaxButton1Click',
			name: 'PushAndRelaxButton1',
			text: 'smartface.io is so AWEOME…',
			left: '15%',
			top: '30%',
			height: '10%',
			enableRipple: true
		}, {
			type: 'TextButton',
			name: 'PushAndRelaxButton2',
			onClick: 'PushAndRelaxButton2Click',			
			text: '…that the “S” falls off!',
			left: '15%',
			top: '40%',
			height: '10%',
			enableRipple: true
		} ]
    } ]
};

export default config;