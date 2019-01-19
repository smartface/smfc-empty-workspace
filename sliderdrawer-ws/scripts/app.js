/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");
const OS = require('sf-core/device/system').OS;

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: e.type || lang.applicationError,
        message: OS === "Android" ? e.stack : (e.message + "\n\n*" + e.stack)
    });
};

require("sf-extension-utils");
require("./theme");
const Network = require("sf-core/device/network");
var notifier = new Network.createNotifier();

notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});

const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    Route
} = require("@smartface/router");
const sliderDrawerWrapper = require("./sliderdrawer-comp");

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        StackRouter.of({
            path: "/pages",
            routes: [
                Route.of({
                    path: "/pages/page1",
                    routeDidEnter: (router, route) => {
                        sliderDrawerWrapper.enabled = true;
                        sliderDrawerWrapper.hide();
                    },
                    routeDidExit: (router, route) => {},
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let Page1 = require("pages/page1");
                        return new Page1(routeData, router, sliderDrawerWrapper);
                    }
                }),
                Route.of({
                    path: "/pages/page2",
                    routeDidEnter: (router, route) => {
                        sliderDrawerWrapper.enabled = true;
                        sliderDrawerWrapper.hide();
                    },
                    routeDidExit: (router, route) => {},
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let Page2 = require("pages/page2");
                        return new Page2(routeData, router, sliderDrawerWrapper);
                    }
                })
            ]
        })
    ]
});
//set router to sliderdrawer for action of options.
sliderDrawerWrapper.setRouter(router);
//go page1
router.push("/pages/page1");
