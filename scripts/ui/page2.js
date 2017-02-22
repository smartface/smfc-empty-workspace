/* 
		WARNING 
		Auto generated file. 
		Do not modify it's contents.
*/

var page2 = new SMF.UI.Page({
	name: "page2",
	fillColor: "#B7D21C"
});


var btn = new SMF.UI.TextButton({
	name: "btn",
	width: "70%",
	height: "10%",
	left: "15%",
	top: "80.8352144469526%",
	text: "Back"
});
page2.add(btn);


var lbl = new SMF.UI.Label({
	name: "lbl",
	width: "70%",
	height: "15.000000000000002%",
	left: "15%",
	top: "45%",
	multipleLine: true,
	text: "This is second page",
	textAlignment: SMF.UI.TextAlignment.CENTER
});
page2.add(lbl);


var img = new SMF.UI.Image({
	name: "img",
	width: "70%",
	height: "10%",
	left: "15%",
	top: "20%",
	image: "smartface.png",
	imageFillType: SMF.UI.ImageFillType.ASPECTFIT
});
page2.add(img);



page2.onShow = function() {
    SMF.UI.statusBar.name = "statusBar";
    SMF.UI.statusBar.visible = false;
    if(Device.deviceOS === 'iOS'){
        SMF.UI.iOS.NavigationBar.name = "navigationBar";
        SMF.UI.iOS.NavigationBar.visible = false;
    }
    if(Device.deviceOS === 'Android'){
        page2.actionBar.name = "actionBar";
        page2.actionBar.visible = false;
    }
};

Object.assign(page2, {
    btn: btn,
    lbl: lbl,
    img: img
});

module && (module.exports = page2);