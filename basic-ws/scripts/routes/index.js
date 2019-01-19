const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    Route
} = require("@smartface/router");

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        StackRouter.of({
            path: "/pages",
            routes: [
                Route.of({
                    path: "/pages/page1",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let Page1 = require("pages/page1");
                        return new Page1(routeData, router);
                    }
                }),
                Route.of({
                    path: "/pages/page2",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let Page2 = require("pages/page2");
                        return new Page2(routeData, router);
                    }
                })
            ]
        })
    ]
});

module.exports = router;