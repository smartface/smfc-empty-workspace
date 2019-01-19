const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Color = require("sf-core/ui/color");
const Image = require("sf-core/ui/image");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");
const PageTitleLayout = require("components/PageTitleLayout");

const extend = require("js-base/core/extend");

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
    superOnShow();
    this.headerBar.titleLayout.applyLayout(); //TODO IOS-2729
    this._sliderDrawer.activateOption(0);
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
    superOnLoad();
    this.headerBar.titleLayout = new PageTitleLayout();
    let leftHeaderBarItem =  new HeaderBarItem({
        onPress: onLeftItemPress.bind(this),
        image: Image.createFromFile("images://hamburger_menu_icon.png"),
        color: Color.WHITE
    });
    this.headerBar.setLeftItem(leftHeaderBarItem);
    componentContextPatch(this.headerBar.titleLayout, "titleLayout");
    /* componentContextPatch(leftHeaderBarItem, "leftItem"); //TODO AND-3516
     leftHeaderBarItem.dispatch({
        type: 'pushClassNames',
        classNames: [".leftHeaderBarItem"]
    });
    */
}

module.exports = Page1;
