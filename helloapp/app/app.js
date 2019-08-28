/// <reference path="globals.d.ts" />
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.displayGlobalVar = function () {
        console.log(globalVar);
        display();
        for (var i = 0; i < points.length; i++)
            console.log("Точка с координатами X=" + points[i].X + " Y=" + points[i].Y);
    };
    return Utility;
}());
window.onload = function () {
    Utility.displayGlobalVar();
};
