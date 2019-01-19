const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Application = require("sf-core/application");
const Image = require("sf-core/ui/image");
const PageTitleLayout = require("components/PageTitleLayout");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const System = require("sf-core/device/system");

// Get generated UI code
const Page2Design = require('ui/ui_page2');

const Page2 = extend(Page2Design)(
    // Constructor
    function(_super, routeData, router) {
        // Initalizes super class for this page scope
        _super(this);
        this._router = router;
        this._routeData = routeData;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        this.btnSayHello.onPress = () => {
            alert("Hello World !");
        }
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    const page = this;
    superOnShow();
    this.headerBar.titleLayout.applyLayout();
    if (!page._routeData)
        return;
    console.info(page._routeData.message);
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    let headerBar;
    superOnLoad();
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
    this.headerBar.setItems([new HeaderBarItem({
        title: "Option",
        onPress: () => {
            console.warn("You pressed Option item!");
        }
    })]);
    if (System.OS === "Android") {
        headerBar = this.headerBar;
        let onBackButtonPress = () => {
            this._router.goBack();
        };
        headerBar.setLeftItem(new HeaderBarItem({
            onPress: onBackButtonPress,
            image: Image.createFromFile("images://arrow_back.png")
        }));
        Application.android.onBackButtonPressed = onBackButtonPress;
    }
    else {
        headerBar = this.parentController.headerBar;
    }
    headerBar.itemColor = Color.WHITE;
}

module.exports = Page2;
