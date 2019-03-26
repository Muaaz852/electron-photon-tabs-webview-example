// Require Photon
// const Photon = require('./../');
const Photon = require("E:\\PrOjEcTs\\Fiverr\\electron-photon-example\\node_modules\\electron-photon");
// Lop Photon instance
console.log(Photon);

window.addEventListener("activate", function(event) {
    console.log(event);
});

window.addEventListener('load', function () {
    const tabGroup = document.getElementsByTagName('tab-group')[0];
    console.log(tabGroup);

    tabGroup.addEventListener("tabActivate", function(event) {

        let viewSelector = event.detail.tab.getAttribute("data-view");

        let tabs = this.getElementsByTagName("tab-item");

        for (let i = 0; i < tabs.length; ++i) {
            document.querySelector(tabs[i].getAttribute("data-view")).style.display = "none";
        }
        document.querySelector(viewSelector).style.removeProperty("display");
        console.log(event);
    });

        // tabGroup.addEventListener("tabClose", function(event) {
        //     console.log(event);
        // });
        // tabGroup.addEventListener("tabMove", function(event) {
        //     console.log(event);
        // });

        tabGroup.addEventListener("tabAdd", function(event) {
            // console.log(event.detail.tab.createAttribute("data-view"));
            console.log(event);
        });
});

