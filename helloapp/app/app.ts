/// <reference path="globals.d.ts" />
 
class Utility {
    static displayGlobalVar() {
        console.log(globalVar);
        display();
        for (var i = 0; i < points.length; i++)
            console.log("Точка с координатами X=" + points[i].X + " Y=" + points[i].Y);
    }
}
window.onload = () => {
    Utility.displayGlobalVar();
};
