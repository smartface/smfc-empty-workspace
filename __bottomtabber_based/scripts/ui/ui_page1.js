//------------------------------------------------------------------------------
//
//     This code was auto generated.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
//
//------------------------------------------------------------------------------

const extend = require('js-base/core/extend');
const PageBase = require('sf-core/ui/page');
const Page = extend(PageBase);
const pageContextPatch = require('@smartface/contx/lib/smartface/pageContextPatch');
const Label = extend(require('sf-core/ui/label'));
const StatusBarStyle = extend(require('sf-core/ui/statusbarstyle'));

function addChild(childName, ChildClass, pageInstance) {
  this.children = this.children || {};
  this.children[childName] = new ChildClass(pageInstance);
  if (this.layout)
    this.layout.addChild(this.children[childName]);
  else
    this.addChild(this.children[childName]);
}
// Constructor
function $Page1(_super, props) {
  // Initalizes super class for this page scope
  _super(this, Object.assign({}, {
    onLoad: onLoad.bind(this),
    orientation: PageBase.Orientation.PORTRAIT
  }, props || {}));
  this.ios && (this.ios.safeAreaLayoutMode = true);
  this.children = {};
  this.children["statusBar"] = {};
  this.children["headerBar"] = this.headerBar;
  addChild.call(this, "lbl", $Lbl_, this);
  pageContextPatch(this, "page1");
}
$Page1.$$styleContext = {
  classNames: ".page",
  userProps: {
    flexProps: {
      justifyContent: "CENTER",
      alignItems: "STRETCH"
    },
    paddingBottom: 20
  },
  statusBar: {
    classNames: ".statusBar",
    userProps: {
      style: "LIGHTCONTENT",
      visible: true
    }
  },
  headerBar: {
    classNames: ".headerBar",
    userProps: {
      titleColor: "rgba( 255, 255, 255, 1 )",
      visible: true
    }
  }
};
const $Page1_ = Page($Page1);

function $Lbl(_super, pageInstance) {
  _super(this, {
    text: "Page1\n",
    skipDefaults: true
  });
  pageInstance.lbl = this;
}
$Lbl.$$styleContext = {
  classNames: ".label",
  userProps: {
    backgroundColor: "rgba( 255, 255, 255, 0 )",
    flexProps: {
      alignSelf: "STRETCH"
    },
    font: {
      size: 32,
      bold: false,
      italic: false,
      family: "SFProText",
      style: "Regular"
    },
    height: 90,
    multiline: true,
    textAlignment: "MIDCENTER",
    textColor: "rgba( 210, 210, 210, 1 )",
    width: null
  }
};
const $Lbl_ = Label($Lbl);

/**
 * @event onLoad
 * This event is called once when page is created. You can create views and add them to page in this callback.
 */
function onLoad() {
  // HeaderBar props
  this.headerBar.title = "Page Title";

}

module.exports = $Page1_;