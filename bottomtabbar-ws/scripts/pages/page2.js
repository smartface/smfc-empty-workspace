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
    console.log("page2");
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    const page = this;
    superOnLoad();
    this.headerBar.leftItemEnabled = false;
}

module.exports = Page2;
