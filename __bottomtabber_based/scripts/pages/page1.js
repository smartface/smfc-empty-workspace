const Color = require("sf-core/ui/color");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const PageTitleLayout = require("components/PageTitleLayout");

const extend = require("js-base/core/extend");
const System = require("sf-core/device/system");

// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function(_super, routeData, router) {
        // Initalizes super class for this page scope
        _super(this);
        this._router = router;
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
    if (System.OS === "Android") {
    }
}
/**
 * 
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
}

module.exports = Page1;
