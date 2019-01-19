const FlexLayout = require('sf-core/ui/flexlayout'),
  SliderDrawer = require('sf-core/ui/sliderdrawer'),
  SliderDrawerComp = require("./components/SliderDrawerComp");
const Application = require("sf-core/application");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");

class SliderDrawerWrapper {
  constructor() {
    this.sliderDrawer = new SliderDrawer({
      width: 293
    });
    this.sliderDrawer.onLoad = this.onLoad.bind(this);
    this.sliderDrawer.onShow = this.onShow.bind(this);
    this.sliderDrawer.onHide = this.onHide.bind(this);
    this.sliderDrawer.layoutComp = new SliderDrawerComp();
    this.sliderDrawer.children = { layoutComp: this.sliderDrawer.layoutComp};
    this.sliderDrawer.layout.addChild(this.sliderDrawer.layoutComp);
    componentContextPatch(this.sliderDrawer, "sliderDrawer");
  }
  
  setRouter(val){
    this.sliderDrawer.router = val;
    this.sliderDrawer.layoutComp && this.sliderDrawer.layoutComp.setRouter(val);
  }
  
  set position(pos) {
    this.sliderDrawer.drawerPosition = pos;
  }
  
  set enabled(val) {
    this.sliderDrawer.enabled = val;
    if(val) 
      Application.sliderDrawer = this.sliderDrawer;
  }
  
  get enabled() {
    return this.sliderDrawer.enabled;
  }
  
  setView(view){
    view.sliderDrawer = this.sliderDrawer;
  }
  
  hide(){
     this.sliderDrawer.hide();
  }
  
  toggleShow(){
    this.sliderDrawer.state === SliderDrawer.State.CLOSED ?
     this.sliderDrawer.show()
     : this.sliderDrawer.hide();
  }
  
  activateOption(index){
    this.sliderDrawer.layoutComp.activateOption(index);
  }

  onLoad() {
    this.sliderDrawer.layoutComp.setRouter(this.sliderDrawer.router);
  }

  onShow() {
    if (this.sliderDrawer.currentPage) {
      this.sliderDrawer.currentPage.layout.touchEnabled = false;
    }
  }

  onHide() {
    if (this.sliderDrawer.currentPage) {
      this.sliderDrawer.currentPage.layout.touchEnabled = true;
    }
  }
}

const drawer = new SliderDrawerWrapper();
drawer.position = SliderDrawer.Position.LEFT;
drawer.enabled = false;
module.exports = drawer;
