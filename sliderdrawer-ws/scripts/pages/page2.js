const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const PageTitleLayout = require("components/PageTitleLayout");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");

// Get generated UI code
const Page2Design = require('ui/ui_page2');

const Page2 = extend(Page2Design)(
    // Constructor
    function(_super, routeData, router, sliderDrawer) {
        // Initalizes super class for this page scope
        _super(this);
        this._router = router;
        this._sliderDrawer = sliderDrawer;
        this._routeData = routeData;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
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
    this._sliderDrawer.activateOption(1);
    if (!page._routeData)
        return;
    console.log(page._routeData.message);
}

function onLeftItemPress() {
    this._sliderDrawer.toggleShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    const page = this;
    superOnLoad();

    page.android.onBackButtonPressed = () => {
        this._router.goBack();
    };
    
    let leftHeaderBarItem =  new HeaderBarItem({
        onPress: onLeftItemPress.bind(this),
        image: Image.createFromFile("images://hamburger_menu_icon.png"),
        color: Color.WHITE
    });
    this.headerBar.setLeftItem(leftHeaderBarItem);
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
}

module.exports = Page2;