const extend = require('js-base/core/extend');
const SliderDrawerCompDesign = require('library/SliderDrawerComp');
const Option = require("components/Option");

const OPTIONS_DATA = [{
    name: "option1",
    text: "Page 1",
    routePath: "/pages/page1",
    routeData: { message: "page1" },
    userProps: {
        marginTop: 61
    }
}, {
    name: "option2",
    text: "Page 2",
    routePath: "/pages/page2",
    routeData: { message: "page2" }
}];

const SliderDrawerComp = extend(SliderDrawerCompDesign)(
    // Constructor
    function(_super, props = {}, pageName) {
        // Initalizes super class for this scope
        _super(this, props);
        this.pageName = pageName;
        let optionList = createOptions.call(this, OPTIONS_DATA);
        this.setRouter = router => this.__router = router;
        this.activateOption = index => {
            optionList[index] && onTouchEnded.call(this, optionList, optionList[index]);
        };
    }
);

function onTouchEnded(optionList, selectedOption) {
    optionList.forEach(option => {
        if (option === selectedOption) {
            if (!option.enabled) {
                option.enabled = true;
                let url = this.__router.getState().url;
                url !== option.routePath && this.__router.push(option.routePath, option.routeData, false);
            }
        }
        else if (option.enabled) {
            option.enabled = false;
        }
    });
}

function createOptions(optionsData) {
    let tempOption;
    let optionList = [];
    this.removeAll();
    this.children = {};
    optionsData.forEach(option => {
        tempOption = new Option(option.userProps);
        tempOption.text = option.text;
        tempOption.routePath = option.routePath;
        tempOption.routeData = option.routeData;
        tempOption.onTouchEnded = onTouchEnded.bind(this, optionList, tempOption);
        this.addChild(tempOption);
        this.children[option.name] = tempOption;
        optionList.push(tempOption);
    });
    return optionList;
}

module.exports = SliderDrawerComp;
