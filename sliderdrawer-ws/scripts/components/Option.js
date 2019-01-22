const extend = require('js-base/core/extend');
const OptionDesign = require('library/Option');

const LEFT_WALL_PASSIVE_CLASSNAME = ".sliderDrawerComp_option_leftWall.passive";
const TITLE_PASSIVE_CLASSNAME = ".sliderDrawerComp_option_title.passive";

const Option = extend(OptionDesign)(
  // Constructor
  function(_super, props = {}, pageName) {
    // Initalizes super class for this scope
    _super(this, props);
    this.pageName = pageName;

    var enabled = false;
    Object.defineProperty(this, "enabled", {
      set: value => {
        enabled = value;
        applyState.call(this, enabled);
      },
      get: () => enabled
    });

    var text = this.title.text;
    Object.defineProperty(this, "text", {
      set: value => {
        text = value;
        this.title.text = text;
      },
      get: () => text
    });
  }
);

function applyState(enabled) {
  enabled ? this.leftWall.dispatch({
      type: "removeClassName",
      className: [LEFT_WALL_PASSIVE_CLASSNAME]
    }) :
    this.leftWall.dispatch({
      type: "pushClassNames",
      classNames: [LEFT_WALL_PASSIVE_CLASSNAME]
    });
  enabled ? this.title.dispatch({
      type: "removeClassName",
      className: [TITLE_PASSIVE_CLASSNAME]
    }) :
    this.title.dispatch({
      type: "pushClassNames",
      classNames: [TITLE_PASSIVE_CLASSNAME]
    });
}

module.exports = Option;
