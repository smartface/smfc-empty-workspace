const createPageContext = require("@smartface/contx/lib/smartface/pageContext");
const Image = require("sf-core/ui/image");
const Color = require("sf-core/ui/color");
const Application = require("sf-core/application");
const OS = require('sf-core/device/system').OS;
const {
    NativeRouter: Router,
    NativeStackRouter: StackRouter,
    BottomTabBarRouter,
    Route
} = require("@smartface/router");

var activePage = {};
class StylingComponent {
    subscribeContext({
        type, // context type
        style, // style with native objects
        rawStyle // style with json objects
    }) {
        //console.log('styling context');
        //console.log(JSON.stringify(rawStyle));
        // You can assign styles below using style object
    }
}

StylingComponent.$$styleContext = {
    classNames: "",
    userProps: {
        width: null,
        height: null,
        paddingLeft: 10,
        paddingRight: 10
    }
};

const pageContext = createPageContext(new StylingComponent(), "btbExample");

// Theme styling BottomTabBarRouter using Application.theme
Application.theme(
    pageContext,
    'btbExample'
);
const starImage = Image.createFromFile("images://star_icon.png");
const bottomTabBarRouter = BottomTabBarRouter.of({
    path: "/",
    to: "/btb/tab1",
    tabbarParams: () => ({
        ios: { translucent: false },
        itemColor: {
            normal: Color.create("#919191"),
            selected: Color.create("#00a1f1")
        }
    }),
    items: () => [{ title: "page1", icon: starImage }, { title: "page2", icon: starImage }, { title: "page3", icon: starImage }, { title: "page4", icon: starImage }, { title: "page5", icon: starImage }],
    routes: [
        //tab1
        StackRouter.of({
            path: "/btb/tab1",
            to: "/btb/tab1/page1",
            routes: [
                Route.of({
                    path: "/btb/tab1/page1",
                    routeDidEnter: (router, route) => {
                        activePage.router = router;
                        activePage.name = "page1";
                    },
                    build: (router, route) => {
                        let Page1 = require("pages/page1");
                        return new Page1(route.getState().routeData, router);
                    }

                })
            ]
        }),
        // tab2
        StackRouter.of({
            path: "/btb/tab2",
            to: "/btb/tab2/page2",
            routes: [
                Route.of({
                    path: "/btb/tab2/page2",
                    routeDidEnter: (router, route) => {
                        activePage.router = router;
                        activePage.name = "page2";
                    },
                    build: (router, route) => {
                        let Page2 = require("pages/page2");
                        return new Page2(route.getState().routeData, router);
                    }
                })
            ]
        }),
        // tab3
        StackRouter.of({
            path: "/btb/tab3",
            to: "/btb/tab3/page3",
            routes: [
                Route.of({
                    path: "/btb/tab3/page3",
                    routeDidEnter: (router, route) => {
                        activePage.router = router;
                        activePage.name = "page3";
                    },
                    build: (router, route) => {
                        let Page3 = require("pages/page3");
                        return new Page3(route.getState().routeData, router);
                    }
                })
            ]
        }),
        // tab4
        StackRouter.of({
            path: "/btb/tab4",
            to: "/btb/tab4/page4",
            routes: [
                Route.of({
                    path: "/btb/tab4/page4",
                    routeDidEnter: (router, route) => {
                        activePage.router = router;
                        activePage.name = "page4";
                    },
                    build: (router, route) => {
                        let Page4 = require("pages/page4");
                        return new Page4(route.getState().routeData, router);
                    }
                })
            ]
        }),
        // tab5
        StackRouter.of({
            path: "/btb/tab5",
            to: "/btb/tab5/page5",
            routes: [
                Route.of({
                    path: "/btb/tab5/page5",
                    routeDidEnter: (router, route) => {
                        activePage.router = router;
                        activePage.name = "page5";
                    },
                    build: (router, route) => {
                        let Page5 = require("pages/page5");
                        return new Page5(route.getState().routeData, router);
                    }
                })
            ]
        })
    ]
});

const router = Router.of({
    path: "/",
    to: "/btb/tab1/page1",
    isRoot: true,
    headerBarParams: () => { ios: { translucent: false } },
    routes: [
        bottomTabBarRouter
    ]
});
if (OS === "Android") { // Android back button
    Application.android.onBackButtonPressed = () => {
        switch (activePage.name) {
            case 'page1':
                Application.exit();
                break;
        }
    };
}
module.exports = router;
