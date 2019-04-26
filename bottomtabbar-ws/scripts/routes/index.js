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
const buildExtender = require("sf-extension-utils/lib/router/buildExtender");
require("sf-extension-utils/lib/router/goBack"); // Implements onBackButtonPressed

class StylingComponent {
    subscribeContext({
        type, // context type
        style, // style with native objects
        rawStyle // style with json objects
    }) {
        // console.log(JSON.stringify(rawStyle));
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
    items: () => [
        { title: "page1", icon: starImage },
        { title: "page2", icon: starImage },
        { title: "page3", icon: starImage },
        { title: "page4", icon: starImage },
        { title: "page5", icon: starImage }
    ],
    routes: [
        // tab1
        StackRouter.of({
            path: "/btb/tab1",
            to: "/btb/tab1/page1",
            routes: [
                Route.of({
                    path: "/btb/tab1/page1",
                    build: buildExtender({ pageName: "page1", singleton: true, pageProps: { shouldExit: true } })
                }),
            ]
        }),
        // tab2
        StackRouter.of({
            path: "/btb/tab2",
            to: "/btb/tab2/page2",
            routes: [
                Route.of({
                    path: "/btb/tab2/page2",
                    build: buildExtender({ pageName: "page2", singleton: true, pageProps: { shouldExit: true } })
                }),
            ]
        }),
        // tab3
        StackRouter.of({
            path: "/btb/tab3",
            to: "/btb/tab3/page3",
            routes: [
                Route.of({
                    path: "/btb/tab3/page3",
                    build: buildExtender({ pageName: "page3", singleton: true, pageProps: { shouldExit: true } })
                }),
            ]
        }),
        // tab4
        StackRouter.of({
            path: "/btb/tab4",
            to: "/btb/tab4/page4",
            routes: [
                Route.of({
                    path: "/btb/tab4/page4",
                    build: buildExtender({ pageName: "page4", singleton: true, pageProps: { shouldExit: true } })
                }),
            ]
        }),
        // tab5
        StackRouter.of({
            path: "/btb/tab5",
            to: "/btb/tab5/page5",
            routes: [
                Route.of({
                    path: "/btb/tab5/page5",
                    build: buildExtender({ pageName: "page5", singleton: true, pageProps: { shouldExit: true } })
                }),
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

module.exports = router;
