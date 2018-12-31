const Color = require("sf-core/ui/color");
const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Image = require("sf-core/ui/image");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const PageTitleLayout = require("components/PageTitleLayout");

const extend = require("js-base/core/extend");
const System = require("sf-core/device/system");

// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function(_super, routeData, router, sliderDrawer) {
        // Initalizes super class for this page scope
        _super(this);
        this._router = router;
        this._sliderDrawer = sliderDrawer;
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
    this._sliderDrawer.activateOption(0);
    if (System.OS === "Android") {
        setTimeout(() => page.btnNext.enabled = true, 300);
    }
}

function onLeftItemPress(){
    this._sliderDrawer.toggleShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    this.headerBar.titleLayout = new PageTitleLayout();
    this.headerBar.setLeftItem(new HeaderBarItem({
      image: Image.createFromFile("images://hamburger_menu_icon.png"),
      backgroundColor: Color.WHITE,
      color: Color.WHITE,
      onPress: onLeftItemPress.bind(this)
    }));
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
}

module.exports = Page1;
