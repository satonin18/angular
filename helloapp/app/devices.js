"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Phone = /** @class */ (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
exports.Phone = Phone;
function Call(phone) {
    console.log("Make a call by", phone.name);
}
exports.Call = Call;
// export {Device, Phone, Call /*as Devices*/}; //обрати внимание на окончание -s
